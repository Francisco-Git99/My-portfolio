// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: true,
  runtimeConfig: {
    public: {
      EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
      EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY
    }
  },
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/']
    },
  },
  app: {
    head: {
      script: [
        {
          hid: 'schema',
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Francisco",
            "jobTitle": "Freelancer Developer Web",
            "worksFor": "",
            "alumniOf": "",
            "award": "",
            "birthDate": "1999-08-07",
            "gender": "Male",
            "knowsAbout": [
              "web design",
              "web programming"
            ],
            "knowsLanguage": [
              "Spanish"
            ],
            "nationality": "Argentina",
            "image": "",
            "url": "https://portfolio-francisco.netlify.app/",
            "sameAs": [
              "",
              "",
              ""
            ]
          })
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/nuxt-icon.png' }
      ],
      htmlAttrs: {
        lang: 'es'
      }
    }
  }
})
