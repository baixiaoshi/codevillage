import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: '/imgs/code.png',
    home: '/opsys',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '开始',
        link: '/get-started'
      },
      {
        text: '操作系统',
        link: '/opsys'
      }
    ],
    sidebar: [
      {
        text: '开始',
        link: '/get-started'
      },
      {
        text: '操作系统',
        link: '/opsys',
        children: [
          {
            text: 'vfs',
            link: '/vfs'
          }
        ]
      }
    ]
  }),

  bundler: viteBundler(),
})
