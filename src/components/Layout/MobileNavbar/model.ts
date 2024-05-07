"use client";
import { useState } from "react";
import { ReturnType } from "./type";

const useModel = (): ReturnType => {
   const [show, setShow] = useState<boolean>(false);
   return {show, setShow}
} 

export default useModel;