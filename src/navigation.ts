import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Categorie', href: getPermalink('/category') },
    { text: 'Tag', href: getPermalink('/tag') },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/paolo-riva/' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://paoloriva.com">Paolo Riva</a> · All rights reserved.
  `,
};
