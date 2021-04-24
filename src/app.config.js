module.exports = {
  pages: [
    'pages/index/index',
    'pages/me/index',
    'pages/creditlist/index',
    'pages/share_code/index',
    'pages/task/index',
  ],
  window: {
    navigationBarTitleText: 'Remax Wechat Template',
    navigationBarBackgroundColor: '#EEEDED',
    navigationBarTextStyle: 'black',
    backgroundColor: '#EEEDED'
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
  },
  entryPagePath: 'pages/index/index', // NOTE: delete this
}
