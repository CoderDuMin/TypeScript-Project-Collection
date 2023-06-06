const modalConfig = {
  pageName: 'menu',
  header: {
    newTitle: '新建菜单',
    editTitle: '编辑菜单'
  },
  formItems: [
    {
      type: 'input',
      label: '菜单名称',
      prop: 'name',
      placeholder: '请输入菜单名称'
    },
    {
      type: 'input',
      label: '菜单路径',
      prop: 'url',
      placeholder: '请输入菜单url'
    },
    {
      type: 'select',
      label: '父级菜单',
      prop: 'parentId',
      placeholder: '请选择父级菜单',
      options: []
    }
  ]
}

export default modalConfig
