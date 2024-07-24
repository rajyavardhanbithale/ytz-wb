import {
    createAsyncThunk,
    createSlice,
    nanoid,
    PayloadAction,
} from '@reduxjs/toolkit'
import { ProductData } from '../../../../types'
import { customAlphabet } from 'nanoid'
import axios from 'axios'

type STATE = {
    imageURL: string[] | null
    productData: ProductData | null
    productDataUpdated: ProductData[] | null
    status: 'idle' | 'pending' | 'error' | 'success'
    operation: 'Adding' | 'Updating' | 'Deleting' | ''
}

const initialState: STATE = {
    imageURL: null,
    productData: null,
    status: 'idle',
    operation: '',
    productDataUpdated: null
}

export const saveProduct = createAsyncThunk(
    'product/add',
    async (action: {
        productData: ProductData
        imageData: string[] | null
    }) => {
        const { productData, imageData } = action

        const nanoid = customAlphabet('abcdefghijklnmopqrstqvwxyz123456', 12)
        const merge = {
            ...productData,
            id: nanoid(),
            tags: typeof productData.tags === 'string' && productData.tags.split(','),
            timestamp: Date.now(),
            category: typeof productData.category === 'string' && productData.category.split(','),
            imageURL: imageData,
        }

        const req = axios.post('/api/product-add', merge)

        return req
    }
)

export const updateProduct = createAsyncThunk(
    'product/update',
    async (action: {
        productData: ProductData
        id: string
    }) => {
        const { productData, id } = action


        const merge = {
            ...productData,
            id: id,
            tags: typeof productData.tags === 'string' && productData.tags.split(','),
            category: typeof productData.category === 'string' && productData.category.split(','),
        }
            ;

        const req = axios.post('/api/product-update', merge)

        return req
    }
)

export const fetchProduct = createAsyncThunk(
    'product/fetch',
    async () => {
        const response = await axios.get('/api/product-get')
        return response.data.data as ProductData[]
    }
)

export const deleteProduct = createAsyncThunk(
    'product/delete',
    async (productID:string) => {
        const response = await axios.get(`http://localhost:3000/api/product-delete?productID=${productID}`)
        
        return response.data
    }
)

const productDataSlice = createSlice({
    name: 'productDataSlice',
    initialState,
    reducers: {
        getImageUrl(state, action) {
            if (state.imageURL === null) {
                state.imageURL = [action.payload]
            } else {
                state.imageURL = [...state.imageURL, action.payload]
            }
        },

        resetImageSource(state) {
            state.imageURL = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveProduct.pending, (state) => {
                state.operation = 'Adding'
                state.status = 'pending'
            })
            .addCase(saveProduct.fulfilled, (state, action) => {
                state.operation = 'Adding'
                state.status = 'success'
            })
            .addCase(saveProduct.rejected, (state) => {
                state.operation = 'Adding'
                state.status = 'error'
            })

            .addCase(updateProduct.pending, (state) => {
                state.operation = 'Updating'
                state.status = 'pending'
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.operation = 'Updating'
                state.status = 'success'
            })
            .addCase(updateProduct.rejected, (state) => {
                state.operation = 'Updating'
                state.status = 'error'
            })

            .addCase(fetchProduct.fulfilled, (state, action:PayloadAction<ProductData[]>) => {
                state.productDataUpdated = action.payload
            })

            .addCase(deleteProduct.pending, (state) => {
                state.operation = 'Deleting'
                state.status = 'pending'
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.operation = 'Deleting'
                state.status = 'success'
            })
            .addCase(deleteProduct.rejected, (state) => {
                state.operation = 'Deleting'
                state.status = 'error'
            })
    },
})

export const { getImageUrl, resetImageSource } = productDataSlice.actions
export default productDataSlice.reducer
