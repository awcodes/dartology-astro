export const SITE = {
  title: "Dartology",
  description: "Dartology is a collection of tools to learn more about darts and become more proficient in your game.",
  startDate: 2021,
};

export const DESKTOP_NAVIGATION = [
  { label: "Practice", link: "/routines/", children: null },
  { label: "Flipout", link: "/flipout/", children: null },
  { label: "Checkout Chart", link: "/checkouts/", children: null },
  { label: "Setups", link: "/setups/", children: null },
  { label: "Terms", link: "https://en.wikipedia.org/wiki/Glossary_of_darts", children: null },
  // { label: "Analyzer", link: "/analyzer/", children: null },
];

export const MOBILE_NAVIGATION = [
  { label: "Home", link: "/", children: null },
  { label: "Practice", link: "/routines/", children: null },
  { label: "Flipout", link: "/flipout/", children: null },
  { label: "Checkout Chart", link: "/checkouts/", children: null },
  { label: "Setups", link: "/setups/", children: null },
  { label: "Terms", link: "https://en.wikipedia.org/wiki/Glossary_of_darts", children: null },
  // { label: "Analyzer", link: "/analyzer/", children: null },
];

export const BRAND = {
  name: "Dartology",
  source: "Dartology.com",
  email: "info@dartology.com",
  social: {
    facebook: null,
    twitter: "https://twitter.com/DartologyApp",
    instagram: null,
    linkedin: null,
    youtube: null,
    pinterest: null,
  },
  images: {
    icon: {
      url: "/assets/images/icon.svg",
      alt: `Brand Icon`,
      width: "100",
      height: "100",
    },
  },
};
