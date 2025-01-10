type LocaleRoutes = {
  about: string;
  contacts: string;
  news: string;
  products: string;
};

export type Routes {
  en: LocaleRoutes,
  et: LocaleRoutes,
  ru: LocaleRoutes
}

const routes: Routes = {
    en: {
      about: '/about',
      contacts: '/contact',
      news: '/news',
      products: '/products'
    },
    et: {
        about: '/meist',
        contacts: '/kontaktid',
        news: '/uudised',
        products: '/tooted'
    },
    ru: {
        about: '/onas',
        contacts: '/kontakty',
        news: '/novosti',
        products: '/produkty'
    }
  };
  
  export default routes;
  