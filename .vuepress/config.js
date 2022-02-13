module.exports = {
  title: 'Eden',
  description: '有感有悟',
  head: [
    ['link', {rel: 'icon', type: "image/x-icon", href: `/favicon.ico`}]
  ],
  host: 'localhost',
  port: 8080,
  dest: '.vuepress/dist',
  // 插件
  plugins: [
    ['vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: ''
      }
    ],
    ['vuepress-plugin-container',
      {
        type: 'center',
        defaultTitle: ''
      }
    ],
    ['vuepress-plugin-container',
      {
        type: 'quote',
        before: info => `<div class="quote"><p class="title">${info}</p>`,
        after: '</div>'
      },
    ],
    ['vuepress-plugin-container',
      {
        type: 'not-print',
        defaultTitle: ''
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-162170924-1'
      }
    ],
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'gitalk',
    //     options: {
    //       clientID: 'acf59fc06b2cf691903d',
    //       // 如果你对"clientSecret"有疑问,可以参考 http://icyfenix.cn/architect-perspective/general-architecture/system-security/authorization.html#oauth2
    //       clientSecret: '4cbf25bbf327f1164627d2ab43263b07b14c54fe',
    //       repo: 'awesome-fenix',
    //       owner: 'fenixsoft',
    //       admin: ['fenixsoft'],
    //       labels: ["Gitalk", "Comment"],
    //       id: '<%- ("icyfenix.cn" + (frontmatter.to.path || window.location.pathname)).slice(-50) %>',
    //       title: '「Comment」<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
    //       body: '<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
    //       distractionFreeMode: false,
    //       pagerDirection: 'last',
    //       // proxy: 'https://netnr-proxy.cloudno.de/https://github.com/login/oauth/access_token'
    //       proxy: 'https://fenixsoft-cors.herokuapp.com/https://github.com/login/oauth/access_token'
    //     }
    //   }
    // ],
    ['@vuepress/back-to-top'],
    // require('./plugins/read-time'),
    // require('./plugins/export')
  ],
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [2, 3] },
    // extendMarkdown: md => {
    //   md.use(require('markdown-it-mermaid').default);
    //   md.use(require('markdown-it-sub'));
    //   md.use(require('markdown-it-sup'));
    //   md.use(require('markdown-it-abbr'));
    //   md.use(require('markdown-it-ins'));
    //   md.use(require('markdown-it-figure'));
    //   md.use(require('markdown-it-smartarrows'));
    //   md.use(require('markdown-it-fontawesome'));
    // }
  },
  themeConfig: {
    logo: '/images/logo.png',
    lastUpdated: '最后更新',
    smoothScroll: true,
    sidebarDepth: 2,
    // repo: 'fenixsoft/awesome-fenix',
    // editLinks: true,
    // editLinkText: '在GitHub中编辑',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'PDF下载',
        link: 'https://raw.githubusercontent.com/fenixsoft/awesome-fenix/gh-pages/pdf/the-fenix-project.pdf',
        target: "_blank"
      }
    ],
    // 侧边栏
    sidebar: [
      {
        title: '目录',
        collapsable: false,
        path: '/overview/menu'
      },
      {
        title: '前言',
        collapsable: false,
        children: [
          '/introduction/prologue'
        ]
      },
      {
        title: '书',
        collapsable: false,
        children: [
          {
            title: '小说',
            collapsable: false,
            path: '/book/novel/',
            children: [
              {
                title: '推理',
                path: '/book/novel/whodunit/',
                children: [
                  '/book/novel/whodunit/13 steps'
                ]
              },
              {
                title: '爱情',
                path: '/book/novel/love/',
                children: [
                ]
              }
            ]
          },
          {
            title: '漫画',
            collapsable: false,
            path: '/book/comic/',
            children: [
              
            ]
          }
        ]
      },
      {
        title: '影视',
        collapsable: false,
        children: [
          {
            title: '电影',
            collapsable: false,
            path: '/tv/film/',
            children: [
              {
                title: '动画电影',
                path: '/tv/film/animation',
                children: [
                  '/tv/film/animation/Dunk For Future'
                ]
              }
            ]
          },
          {
            title: '动漫',
            collapsable: false,
            path: '/tv/anime/',
            children: [
            ]
          }
        ]
      },
      {
        title: '游戏',
        collapsable: false,
        children: [
          {
            title: 'AVG',
            path: '/game/AVG/',
            children: [

            ]
          }
        ]
      },
      {
        title: '随笔',
        collapsable: false,
        children: [
          {
            title: '2022年',
            collapsable: false,
            path: '/inspiration/2022/',
            children: [
            ]
          },
          {
            title: '2023年',
            collapsable: false,
            path: '/inspiration/2023/',
            children: [
            ]
          }
        ]
      },
      {
        title: '致谢',
        collapsable: false,
        path: '/overview/thank'
      }
    ]
  }
}