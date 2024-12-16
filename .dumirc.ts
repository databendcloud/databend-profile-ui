import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/databend-ui/',
  publicPath: '/databend-ui/',
  themeConfig: {
    prefersColor: {
      switch: false
    },
    name: '',
    footer: `<div>Copyright © ${new Date().getFullYear()} | <a href="https://www.databend.com" target="_blank">Databend Cloud</a></div>`,
    socialLinks: {
      github: 'https://github.com/databendcloud',
      twitter: 'https://twitter.com/DatabendLabs',
      zhihu: 'https://www.zhihu.com/org/datafuse',
      weibo: 'https://github.com/databendcloud/databend-profile-ui'
    },
  },
  logo: '/databend-ui/logo.svg',
  favicons: [
    '/databend-ui/favicon.svg'
  ]
});
