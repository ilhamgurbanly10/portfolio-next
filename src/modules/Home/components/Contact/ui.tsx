"use client";
import React, { memo } from "react";
import { Props, FieldType } from "./type";
import Container from "@/components/Container";
import DottedTitle from "@/components/Titles/DottedTitle";
import { useTranslations } from "next-intl";
import ContactInfoCard from "@/components/Cards/ContactInfoCard";
import { data } from "./data";
import useModel from "./model";
import { Form, Input } from "antd";
import Button from "@/components/Buttons/Button";


const UI: React.FC<Props> = ({ className }) => {
  const translated = useTranslations("Index");
  const { onFinish, isSending } = useModel();

  return (
    <Container>
      <div className={`${className}`}>
        <DottedTitle
          text={<span className="text-app-black">{translated("contact")}</span>}
        />

        <div className="flex flex-col flex-wrap items-center lg:items-stretch lg:flex-row justify-between mt-16">
          {data.contactInfo?.map((item, i) => (
            <ContactInfoCard
              key={i}
              label={item.label}
              value={item.value}
              subvalue={item?.subvalue}
              type={item.type}
              icon={item.icon}
              className="w-full sm:w-6/12 mb-10 last:m-0 lg:mn-10 lg:w-[31.5%]"
            />
          ))}
          <div className="w-full sm:w-6/12 mb-10 last:m-0 lg:mn-10 lg:w-[31.5%]" />
        </div>

        <div className="flex flex-col items-center lg:items-stretch lg:flex-row justify-between mt-6">
          <address className="w-full lg:w-[49%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.75300294866!2d49.96405567586866!3d40.43646787143646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403062220ee8451d%3A0xfa28f1ca0b271888!2sRamiz%20Qarayev!5e0!3m2!1sru!2saz!4v1715346291151!5m2!1sru!2saz"
              width="600"
              height="450"
              style={{ border: "0px", height: "338px", width: "100%" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </address>
          <div className="owerflow-hidden w-full lg:w-[49%] mt-6 lg:mt-0">
            <Form
              name="basic"
              labelCol={{ span: 0 }}
              style={{ width: "100%" }}
              initialValues={{
                name: undefined,
                email: undefined,
                message: undefined,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <div className="flex flex-col lg:flex-row justify-between">
                <Form.Item<FieldType>
                  name="name"
                  className="w-full lg:w-[48%]"
                  rules={[
                    { required: true, message: translated("required_field") },
                  ]}
                >
                  <Input
                    className="p-2"
                    placeholder={translated("your_name")}
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  name="email"
                  className="w-full lg:w-[48%]"
                  rules={[
                    { required: true, message: translated("required_field") },
                    { type: "email", message: translated("ivalid_email") },
                  ]}
                >
                  <Input
                    className="p-2"
                    placeholder={translated("email_address")}
                  />
                </Form.Item>
              </div>

              <Form.Item<FieldType>
                name="message"
                className="w-full"
                rules={[
                  { required: true, message: translated("required_field") },
                ]}
              >
                <Input.TextArea
                  placeholder={translated("write_your_mes")}
                  rows={12}
                />
              </Form.Item>

              <div className="flex justify-end">
                <Form.Item>
                  <Button
                    type="danger"
                    disabled={isSending}
                    btnType="submit"
                    label={isSending ? "is_sending" : "send_message"}
                  />
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>

        <div className="flex gap-4 flex-row items-center flex-wrap justify-center mt-16">
          {data.socials?.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              className="bg-app-red text-white text-lg w-[40px] h-[40px] inline-flex items-center justify-center text-center"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default memo(UI);
