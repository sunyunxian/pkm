import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人知识库",
  description: "个人知识库 ",
  // default .
  srcDir: "./src",
  // default ./.vitepress/dist
  outDir: "./build",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav : [
      { text: 'create', link: '/create' },
      { text: "csdiy", link: "/csdiy" },
      { text: "invest", link:"/invest"},
      { text: "run", link: "/run" },
      { text: 'tools', link: "/tools"},
      { text: "关于", link: "about" },
    ],
    sidebar: {
      // '/zh/reference/': { base: '/zh/reference/', items: sidebarReference() }
      '/create': { base: '/create/', items: sidebarCreate() },
      '/csdiy': { base: '/csdiy/', items: sidebarCsdiy() },
      '/invest': { base: '/invest/', items: sidebarInvest() },
      '/run': { base: '/run/', items: sidebarRun() },
      '/tools': { base: '/tools/', items: sidebarTool() },
    },
    // sidebar: [
    //   {
    //     text: '文章列表',
    //     items: [
    //       { text: '投资', items: [
    //           {text: "书籍", link: "/invest/recommended_books" },
    //           { text: "策略", link: "/invest/methods" },
    //           { text: "实盘", link: "/invest/real_account" },
    //         ],
    //       },
    //       ],
    //     }
    // ],
    search: {
      provider: 'local'
    },
    outline: {
      // https://vitepress.dev/zh/reference/default-theme-config#outline
      label: '目录',
      level: [2, 4],
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunyunxian' },
      { icon: 'twitter', link: "https://x.com/sunxian22"},
      {icon: "youtube", link: "https://www.youtube.com/@sunyunxian"},
    ],
    // langMenuLabel: '多语言',
    // returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    // pageNotFound: '页面未找到',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-2025 Sun Xian',
    },
  },
  markdown: {
    theme: {light: 'github-light', dark: 'github-dark'}
    // config(md) {
    //   md.use(headerPlugin)
    // }
  },
})

function sidebarInvest(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '推荐书籍',
      collapsed: false,
      items: [
        { text: '经典书籍1', link: 'recommended_books' },
      ]
    },
    {
      text: '策略',
      collapsed: false,
      items: [
        { text: '高股息策略', link: 'methods' },
      ]
    },
    {
      text: '实盘',
      collapsed: false,
      items: [
        { text: '2024', link: 'real_account_2024' },
      ]
    },
  ]
}
function sidebarCreate(): DefaultTheme.SidebarItem[] {
  return []
}

function sidebarCreatefoo(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '参考',
      items: [
        { text: '站点配置', link: 'site-config' },
        { text: 'frontmatter 配置', link: 'frontmatter-config' },
        { text: '运行时 API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: '默认主题',
          base: '/zh/reference/default-theme-',
          items: [
            { text: '概览', link: 'config' },
            { text: '导航栏', link: 'nav' },
            { text: '侧边栏', link: 'sidebar' },
            { text: '主页', link: 'home-page' },
            { text: '页脚', link: 'footer' },
            { text: '布局', link: 'layout' },
            { text: '徽章', link: 'badge' },
            { text: '团队页', link: 'team-page' },
            { text: '上下页链接', link: 'prev-next-links' },
            { text: '编辑链接', link: 'edit-link' },
            { text: '最后更新时间戳', link: 'last-updated' },
            { text: '搜索', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}
function sidebarCsdiy(): DefaultTheme.SidebarItem[]{
  return []
}
function sidebarRun(): DefaultTheme.SidebarItem[]{
  return []
}
function sidebarTool(): DefaultTheme.SidebarItem[]{
  return []
}
