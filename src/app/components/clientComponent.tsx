'use client'


import { AppDispatch, RootState } from "@/lib/store"
import { demoThunk } from "@/lib/store/demo/demoSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function DemoClientComponent() {

    const demoAction = useSelector((state: RootState) => state.demo.DEMO)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(demoThunk(5))
    })

    return (
        <>
            {demoAction && JSON.stringify(demoAction,)}
        </>
    )
}
