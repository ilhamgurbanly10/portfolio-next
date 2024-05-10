"use client";
import { useState } from "react";
import { ReturnType } from "./type";

const useModel = (): ReturnType => {
   const [year, setYear] = useState<number>(2012);


   return {year}
} 

export default useModel;