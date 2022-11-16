type IFormType = 'input'|'radio' 

export interface Iformitem {
  field: string
  type: IFormType
  label: string
  placeholder?: any
}
export interface Iform {
  formItems: Iformitem[]
  itemLayout?: any
  colLayout?: any
  labelWidth?: string
}
