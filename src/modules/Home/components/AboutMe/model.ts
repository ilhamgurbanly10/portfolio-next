"use client";
import { ReturnType } from "./type";
import { useDispatch } from 'react-redux';
import { setAboutData } from "@/lib/features/About/aboutSlice";
import { useEffect } from "react";

const useModel = (): ReturnType => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAboutData({
            error: false, 
            data: {
                description_az: "Salam. I am enough of an artist to draw freely upon my imagination. The point is that when I see a sunset or a waterfall or something, for a split second it's so great, because for a little bit I'm out of my brain, and it's got nothing to do with me. I'm not trying to figure it out, you know what I mean? And I wonder if I can somehow find a way to maintain that mind stillness.",
                description_en: "I am enough of an artist to draw freely upon my imagination. The point is that when I see a sunset or a waterfall or something, for a split second it's so great, because for a little bit I'm out of my brain, and it's got nothing to do with me. I'm not trying to figure it out, you know what I mean? And I wonder if I can somehow find a way to maintain that mind stillness.",
                description_de: "I am enough of an artist to draw freely upon my imagination. The point is that when I see a sunset or a waterfall or something, for a split second it's so great, because for a little bit I'm out of my brain, and it's got nothing to do with me. I'm not trying to figure it out, you know what I mean? And I wonder if I can somehow find a way to maintain that mind stillness.",
            }, 
            loading: false
        }))
    }, [])

    return {}
} 

export default useModel;