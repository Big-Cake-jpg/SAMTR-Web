import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'


export default defineUserConfig({
  plugins: [
    pwaPlugin(),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    }),
  ],
  lang: 'zh-CN',
  title: '苏安市轨道交通建设',
  description: 'Minecraft Transit Railway 爱好者们的一方小小土地',
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#e1c745' }],
  ],
  theme: defaultTheme({
    logo: '/images/favicon.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '线路一览与申报',
        link: '/routes/',
      },
      {
        text: 'MTR 线路图',
        link: 'https://routes.samtr.cakemc.top',
      },
      {
        text: '世界地图',
        link: 'https://map.samtr.cakemc.top',
      },
    ],
    repo: 'Big-Cake-jpg/SAMTR-Web',
    editLink: true,
    editLinkText: '帮助我们完善这个页面',
    docsBranch: 'master',
    docsDir: 'docs',
    lastUpdated: true,
    sidebar: {
      '/getting-started/': [
        '/getting-started/join.html',
        '/policies/privacy.html',
      ],
      '/routes/': [
        '/routes/index.html',
        '/routes/rules.html',
        {
          text: '线路一览',
          collapsible: true,
          children: ['/routes/line-1.md', '/routes/line-2.md', '/routes/line-3.md', '/routes/line-6.md', '/routes/kaedehara-line.md', '/routes/south-north-line.md', '/routes/S1.md', '/routes/S2.md'],
        },
      ],
      '/about/': [
        '/about/introducing.html',
      ]
    }
  }),
})