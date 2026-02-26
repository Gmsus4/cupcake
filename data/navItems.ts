import { Icon, IconCake, IconCalendarEvent, IconHelpCircle, IconInfoCircle, IconMail, IconMessage, IconPackage, IconUsersGroup } from "@tabler/icons-react";

export interface NavItem {
  title: string;
  href: string;
  icon: Icon;
}

export const navItems: NavItem[] = [
  {
    title: "Productos",
    href: "/products",
    icon: IconCake,
  },
  {
    title: "Eventos",
    href: "/sd",
    icon: IconCalendarEvent,
  },  
  {
    title: "Nosotros",
    href: "/about",
    icon: IconUsersGroup,
  },
  {
    title: "Contacto",
    href: "/contact",
    icon: IconMail,
  },
];