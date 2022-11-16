import { App } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElRow,
  ElCol,
  ElTable,
  ElTableColumn,
  ElDialog,
} from 'element-plus'
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElRow,
  ElCol,
  ElTable,
  ElTableColumn,
  ElDialog
]

export default function installElementPlus(app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
