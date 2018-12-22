const userList = {
  admin: {
    name: 'Super Admin',
    permission: [
      {
        Title: '导航1',
        Path: '/menus-1',
        Icon: 'el-icon-menu',
        Children: [
          {
            Title: '导航1 - 1',
            Path: '/menus-1-1',
            Icon: 'el-icon-menu',
            Children: [
              {
                Title: '导航1 -1-1',
                Path: '/menus-1-1-1',
                Icon: 'el-icon-menu'
              }
            ]
          },
          {
            Title: '导航1 -2',
            Path: '/menus-1-2',
            Icon: 'http://meiye-pre.lvshou.me/static/images/icon/icon_mendianshezhi.png'
          }
        ]
      },
      {
        Title: '菜单二',
        Path: '/menus-2',
        Icon: 'el-icon-menu',
        Children: [
          {
            Title: '菜单二-1',
            Path: '/menus-2-1',
            Icon: 'el-icon-menu'
          }
        ]
      },
      {
        Title: 'Undefined Router',
        Path: '/menus-4',
        Icon: 'el-icon-menu',
        Children: [
          // {
          //   Title: 'Undefined',
          //   Path: '/menus-4-1',
          //   Icon: 'el-icon-menu'
          // }
        ]
      }
    ]
  },
  editor: {
    name: 'Editor Admin',
    roles: 'editor'
  },
  delete: {
    name: 'Delete Admin',
    roles: 'delete'
  }
}

export default {
  login: config => {
    const { name } = JSON.parse(config.body)
    return {
      status: userList[name] ? 200 : 400,
      token: userList[name] ? name : ''
    }
  },
  logout: () => {
    return {
      states: 200,
      msg: 'success'
    }
  },
  getUserInfo: config => {
    const { token } = JSON.parse(config.body)
    return {
      status: 200,
      user: userList[token] || {}
    }
  }
}
