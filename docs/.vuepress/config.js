import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'SAMTR 服务器',
  description: 'Minecraft Transit Railway 爱好者们的一方小小土地',
  head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
  theme: defaultTheme({
    logo: '/images/favicon.png',
    navbar: [
        {
            text: '首页',
            link: '/',
        },
        {
            text: '政策条款',
            link: '/policies/tos.html',
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
    sidebar: {
        '/policies/': [
            '/policies/tos.html',
            '/policies/privacy.html',
          ],
        '/about/': [ 
            '/about/mss.html',
          ]
    }
  }),
})