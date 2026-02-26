import { Icon, IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";

export interface socialM {
  title: string;
  href: string;
  icon: Icon;
}

export const socialMedia: socialM[] = [
  {
    title: "Instagram",
    href: "/products",
    icon: IconBrandInstagram,
  },
  {
    title: "Facebook",
    href: "/about",
    icon: IconBrandFacebook,
  },  
  {
    title: "Tiktok",
    href: "/testimonials",
    icon: IconBrandTiktok,
  },
];