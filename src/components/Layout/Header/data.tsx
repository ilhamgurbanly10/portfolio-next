import { Path } from "./type";
import {
  HomeFilled,
  PictureOutlined,
  GlobalOutlined,
  MailOutlined,
  ReadOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

export const paths: Path[] = [
  {
    href: "/",
    label: "home",
    icon: <HomeFilled />,
  },
  {
    href: "/about",
    label: "about",
    icon: <ProfileOutlined />,
  },
  {
    href: "/service",
    label: "service",
    icon: <GlobalOutlined />,
  },
  {
    href: "/portfolio",
    label: "portfolio",
    icon: <PictureOutlined />,
  },
  {
    href: "/blog",
    label: "blog",
    icon: <ReadOutlined />,
  },
  {
    href: "/contact",
    label: "contact",
    icon: <MailOutlined />,
  },
];
