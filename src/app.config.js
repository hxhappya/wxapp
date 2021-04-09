module.exports = {
  pages: [
    'pages/index/index',
    'pages/me/index',
  ],
  window: {
    navigationBarTitleText: 'Remax Wechat Template',
    navigationBarBackgroundColor: '#282c34'
  },
  tabBar: {
    list: [
      {pagePath: 'pages/index/index',
        text: 'index',
        iconPath: '/images/home.png',
        selectedIconPath: '/images/homeclick.png',
      },
      {
        pagePath: 'pages/me/index',
        text: 'me',
        iconPath: '/images/user.png',
        selectedIconPath: '/images/userclick.png'
      },
    ]
  }
}
