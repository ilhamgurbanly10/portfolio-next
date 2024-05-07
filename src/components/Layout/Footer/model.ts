"use client";
import { useState, useEffect } from "react";
import { ReturnType } from "./type";

const useModel = (): ReturnType => {
   const [year, setYear] = useState<string>('');

   useEffect(() => {
      setYear(String(new Date().getFullYear()))
   }, [])
   return {year}
} 

export default useModel;