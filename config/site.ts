export const siteConfig = {
  name: "Pinnacle Wealth",
  url: "http://pinnaclewealthz.com",
  description:
    "Award-winning investment platform with 10+ years of experience, serving 50K+ clients worldwide with regulated and secure trading solutions.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/service",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Team",
      href: "/team",
    },
    {
      title: "Awards",
      href: "/awards",
    },
    {
      title: "Testimonials",
      href: "/testimonials",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/pinnaclewealthz",
    github: "https://github.com/pinnaclewealth",
    linkedin: "https://linkedin.com/company/pinnacle-wealth",
    facebook: "https://facebook.com/pinnaclewealthz",
    instagram: "https://instagram.com/pinnaclewealthz",
  },
  contact: {
    email: "support@pinnaclewealthz.com",
    phone: "+1 (555) 123-4567",
    address: "123 Financial District, New York, NY 10004, United States",
  },
  api: {
    baseUrl: "http://pinnaclewealthz.com/api",
    version: "v1",
  },
  features: {
    newsletter: true,
    blog: true,
    testimonials: true,
    liveChat: true,
    multiLanguage: true,
  },
}

export type SiteConfig = typeof siteConfig
