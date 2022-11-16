import { Iform } from '@/base-ui/form/type'
export const searchFormConfig: Iform = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '名称',
      placeholder: '请输入名称'
    },
  ],
  itemLayout: {
    padding: '10px  20px'
  },
  colLayout: {
    span: 12
  },
  labelWidth: '120px'
}
