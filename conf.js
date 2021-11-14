jsproxy_config({
  // 当前配置的版本（记录在日志中，用于排查问题）
  // 每次修改配置，该值需要增加，否则不会生效。
  // 默认每隔 5 分钟自动下载配置，若想立即验证，可通过隐私模式访问。
  ver: '151',

  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 165
  },

  // 节点配置
  node_map: {
    'demo-hk': {
      label: 'flat-mud-雅虎',
      lines: {
        'flat-mud-0c10.029.workers.dev': 1,
        'crimson-snow-3307.029sina.workers.dev': 2,
      }
   },
    'demo-sg': {
      label: 'feichang99-节点',
      lines: {
        'crimson-snow-3307.029sina.workers.dev': 1,
      }
    },
     'cfworker': {
      label: 'restless-雅虎',
      lines: {
        'restless-moon-9c9d.029.workers.dev': 1,
        'j.xj2.workers.dev': 1,
        'damp-shape-64ee.693.workers.dev': 1,
        'dark-bread-0041.693.workers.dev': 1,
        'red-breeze-27a6.693.workers.dev': 1,
        'jh5.029sina.workers.dev': 1,
        '1.yd139.workers.dev': 1,
        '1.wv1.workers.dev': 1,
        '2.yd029.workers.dev': 1,
        'jh.029sina.workers.dev': 1,
        'bold-sky-960f.693.workers.dev': 1,
        'proud-moon-1d61.693.workers.dev': 1,
        'dark-block-0f89.693.workers.dev': 1,
        'hidden-mud-dfe9.693.workers.dev': 1,
        '1.693.workers.dev': 1,
        '1112u.029.workers.dev': 1,
        '1112v.029.workers': 1,
        'sparkling-dust-39b8.029.workers.dev': 1,
        'throbbing-term-1ac3.029.workers.dev': 1,
        'damp-sea-e13b.029.workers.dev': 1,
        'billowing-silence-c555.029.workers.dev': 1,
      }
    }
  },

  /**
   * 默认节点
   */
  node_default: 'demo-hk',
  // node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  // assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

  // 本地测试时打开，否则访问的是线上的
  assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '<!-- custom html -->',

  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pornhub.com/': {
      redir: 'https://php.net/'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})
