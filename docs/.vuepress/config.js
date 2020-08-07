module.exports = {
    title: 'frankCloudy的博客',
    description: '小拉拉的博客',
    // base: '/cloudy/',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png'}] //icon
    ],
    dest: 'dist',//打包输出目录
    resolve: {
        alias: {
          '@img': '/img'
        }
      },//配置别名
    themeConfig: { 
        logo: '/img/my.jpg',//导航栏的logo
        nav: [
            {text: 'Home', link: '/'},
            {text: '职场', 
            items: [
              { text: '导师篇', link: '/workplace/Teaching/' },
              { text: '实习篇', link: '/workplace/Learning/' }
            ]
            },
            {text: 'myGithub', link: 'https://github.com/', target : '_blank' ,rel:'' }
        ],//导航栏
        // sidebar: 'auto'
        sidebar: [
            {
                title: '主页',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,   // 可选的, 默认值是 1
              },
              {
                title: '指南',
                path: '/guide/',  
              },
              {
                title: '职场',   // 必要的
                path: '/workplace/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                  {
                    title: '导师篇',   // 必要的
                    path: '/workplace/Teaching/',
                  },
                  {
                    title: '实习篇',   // 必要的
                    path: '/workplace/Learning/',
                  }
                ]
              },
        ],//侧边栏
      },
   
  }