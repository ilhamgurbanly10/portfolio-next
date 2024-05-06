"use client";
import { ReturnType } from "./type";
import { useEffect, useState } from "react";

const useModel = (data: React.ReactNode[], time?: number): ReturnType => {

    const indexes: number[] = data?.map((item, i) => {
        item;
        return i;
    });

    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const timeout =  setTimeout(() => {
            setActiveIndex(activeIndex + 1 < indexes.length ? activeIndex + 1 : 0)
        }, time ?? 3000)
        return () => { clearTimeout(timeout) }
    }, [activeIndex])

    return { activeIndex }
} 

export default useModel;