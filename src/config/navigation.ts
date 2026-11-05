export type MenuItem = {
  label: string;
  href?: string;
  description?: string;
  badge?: string;
};

export type NavLinkItem = { label: string; href: string };

export type NavDropdownItem = {
  label: string;
  menu: { featured: MenuItem[]; secondary: MenuItem[] };
};

export type NavItem = NavLinkItem | NavDropdownItem;

export const navigation: NavItem[] = [
  { 
    label: "Products",
      menu: {
        featured: [
        { label: "v0", href: "/#v0" },
        { label: "Ky", href: "/#ky" },
        { label: "Kova", href: "/#kova" },
      ],
    },
  },
  {
    label: "Resources",
    menu: {
      featured: [
        {
          label: "About",
          href: "/about",
          description: "Meet the team and the story behind Kivoff",
        },
      ],
      secondary: [{ label: "Download", badge: "Soon" }],
    },
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavLinkItem[] = navigation.flatMap((item) => {
  if ("href" in item) return [item];
  return [...item.menu.featured, ...(item.menu.secondary ?? [])]
    .filter((entry): entry is MenuItem & { href: string } => Boolean(entry.href))
    .map(({ label, href }) => ({ label, href }));
});