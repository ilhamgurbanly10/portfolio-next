"use client";
import { ReturnType, FieldType } from "./type";
import type { FormProps } from "antd";
import { useState } from "react";
import { notification } from "antd";
import { useTranslations } from "next-intl";
// import { SMTPClient } from "emailjs";
// import { mailAddress } from "./data";
// https://www.npmjs.com/package/emailjs

const useModel = (): ReturnType => {
   const translated = useTranslations("Index");

   const [isSending, setIsSending] = useState<boolean>(false);
   const onFinish: FormProps<FieldType>["onFinish"] = async (values: FieldType): Promise<void> => {
      values;
      if (isSending) return;
      setIsSending(true);

      // const client = new SMTPClient({
      //    user: 'user',
      //    password: 'password',
      //    host: 'smtp.your-email.com',
      //    ssl: true,
      // });

      try {
         // await client.sendAsync({
         //    text: values?.message ?? '',
         //    from: `you <${values.email}>`,
         //    to: `someone <${mailAddress}>`,
         //    subject: 'Contact from portfolio',
         // });
         

         notification.success({
            message: translated('successfully_title', { operation: translated('sended')}),
            description: translated('successfully_mes', { operation: translated('sended'), title: translated('message')}),
         });
         
      } catch (err) {
         notification.error({
            message: translated('error_title', { operation: translated('sended')}),
            description: translated('error_mes', { operation: translated('sended'), title: translated('message')}),
         });
      }
   
  };


   return {onFinish, isSending}
} 

export default useModel;