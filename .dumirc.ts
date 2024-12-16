import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/databend-profile-ui/',
  publicPath: '/databend-profile-ui/',
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
  logo: '/databend-profile-ui/logo.svg',
  favicons: [
    'databend-profile-ui/favicon.svg'
  ]
});
