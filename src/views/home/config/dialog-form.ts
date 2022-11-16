import { Iform } from '@/base-ui/form/type'
export const dialogFormConfig: Iform = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '名称:',
      placeholder: '请输入用户名'
    },
    {
      field: 'enable',
      type: 'radio', 
      label: '选择状态',
    },
    {
      field: 'data',
      type: 'input',
      label: '输入数据',
      placeholder: '请选择数据',
    }
  ],
  itemLayout: {
    padding: '10px  0px'
  },
  colLayout: {
    span: 24
  },
  labelWidth: '80px'
}
