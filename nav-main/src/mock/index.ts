import Mock from 'mockjs'

const categories = Mock.mock({
  'data|20-30': [
    {
      name: '@ctitle(4)',
      id: '@word(8)',
      icon: 'iconfont icon-youxishoubing',
      'children|2-4': [
        {
          name: '@ctitle(4)',
          id: '@word(8)',
          icon: 'iconfont icon-qianduan',
        },
      ],
    },
  ],
})

const navData = Mock.mock({
  'data|10-20': [
    {
      name: '@ctitle(4)',
      id: '@word(8)',
      'list|5-10': [
        {
          id: '@word(8)',
          name: '@ctitle(2,6)',
          logo: '//geekape-hangzhou.oss-cn-hangzhou.aliyuncs.com/geekape-nav/images/raspberry.png',
          desc: '@csentence(12, 20)',
          view: '@integer(1000, 2000)',
          star: '@integer(20,80)',
        },
      ],
    },
  ],
})

export default [
  {
    url: '/data',
    method: 'get',
    response: () => {
      return {
        categories: categories,
        navData: navData,
      }
    },
  },
]
