import { Contact } from "./type";
import {
  EnvironmentFilled,
  PhoneFilled,
  MailFilled,
  GithubFilled,
  LinkedinFilled,
  InstagramFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

export const mailAddress: string = "gurbanlyilham@gmail.com";

export const data: Contact = {
  contactInfo: [
    {
      label: "address",
      icon: <EnvironmentFilled />,
      type: "address",
      value: "Surakhani district, Bulbula settlement, Ramiz Kharayev street",
    },
    {
      label: "phone",
      icon: <PhoneFilled />,
      type: "phone",
      value: "(+994 55) 986 74 59",
      subvalue: "(+994 70) 518 28 60",
    },
    {
      label: "email",
      icon: <MailFilled />,
      type: "email",
      subvalue: "gurbanlyilham@gmail.com",
      value: "Ilham_gurbanly@mail.ru",
    },
  ],
  socials: [
    {
      icon: <GithubFilled />,
      href: "https://github.com/ilhamgurbanly10",
    },
    {
      icon: <LinkedinFilled />,
      href: "https://www.linkedin.com/in/ilham-gurbanly-b5425223a",
    },
    {
      icon: <InstagramFilled />,
      href: "https://www.linkedin.com/in/ilham-gurbanly-b5425223a",
    },
    {
      icon: <WhatsAppOutlined />,
      href: "https://wa.me/994705182860",
    },
    {
      icon: <WhatsAppOutlined />,
      href: "https://wa.me/994559767459",
    },
    {
      icon: (
        <svg
          fill="currentColor"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="25"
        >
          <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
        </svg>
      ),
      href: "https://t.me/+994705182860",
    },
    {
      icon: (
        <svg
          fill="currentColor"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="25"
        >
          <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
        </svg>
      ),
      href: "https://t.me/+994559767459",
    },
  ],
};
