import { createAsyncThunk, createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"
import { ProductData } from "../../../../types"
import { customAlphabet } from 'nanoid'
import { createClientBrowser } from "@/utils/supabase/client"
import axios from "axios"

type STATE = {
    imageURL: string[] | null
    productData: ProductData | null
    status: 'idle' | 'pending' | 'error' | 'success'
}

const initialState: STATE = {
    imageURL: null,
    productData: null,
    status: 'idle'
}

export const saveProduct = createAsyncThunk(
    'product/add',
    async (action: { productData: ProductData; imageData: string[] | null }) => {
        const { productData, imageData } = action

        const nanoid = customAlphabet('abcdefghijklnmopqrstqvwxyz123456', 12)
        const merge = {
            ...productData,
            id: nanoid(),
            tags: productData.tags.split(','),
            timestamp: Date.now(),
            category: productData.category.split(','),
            imageURL: imageData
        }

        const req = axios.post('/api/product-add', merge);

        return req;

    }
)


const productDataSlice = createSlice({
    name: 'productDataSlice',
    initialState,
    reducers: {
        getImageUrl(state, action) {
            if (state.imageURL === null) {
                state.imageURL = [action.payload];
            } else {
                state.imageURL = [...state.imageURL, action.payload];
            }
        },

        resetImageSource(state) {
            state.imageURL = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveProduct.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(saveProduct.fulfilled, (state, action) => {
                state.status = 'success';
            })
            .addCase(saveProduct.rejected, (state) => {
                state.status = 'error';
            });
    }

})


export const { getImageUrl, resetImageSource } = productDataSlice.actions
export default productDataSlice.reducer