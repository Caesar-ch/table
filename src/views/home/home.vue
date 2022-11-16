<template>
  <div class="container">
    <div class="header">
      <el-button type="success" @click="handleNewData" size="large">Success</el-button>
      <el-button type="success" @click="handleNewData" size="large">Success</el-button>
      <el-button type="success" @click="handleNewData" size="large">Success</el-button>
    </div>
    <div class="body">
      <Page :tableData="tableData" :tableColumn="tableColumn" @handleEditClick="handleEditClick"
        @handleDeleteClick="DelateData"></Page>
    </div>
    <div class="dialog">
      <Dialog ref="dialogRef" :dialogFormConfig="dialogFormConfig" :defaultInfo="defaultInfo" @editData="EditData"
        @newData="NewData">
      </Dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Page from '../../components/page/page.vue'
import Dialog from '../../base-ui/dialog/dialog.vue'
import { _tableData, tableColumn } from './config/table-data'
import { dialogFormConfig } from './config/dialog-form'
export default defineComponent({
  components: {
    Page,
    Dialog
  },
  setup() {
    const tableData = ref([..._tableData])
    const dialogRef = ref<InstanceType<typeof Dialog>>()
    const defaultInfo = ref<any>({})
    const id = ref<any>(null)
    const handleNewData = () => {
      dialogRef.value!.dialogVisible = true
      defaultInfo.value = {}
    }
    const handleEditClick = (value: any) => {
      id.value = value.id//等到点击了确认按钮执行编辑操作时用这个id在数组里找对应目标
      dialogRef.value!.dialogVisible = true
      defaultInfo.value = { ...value }
    }
    const EditData = (value: any) => {
      //根据点击编辑时保存的id找到要改变的目标项
      let target: any = tableData.value.find((item: any) => item.id == id.value)
      for (let key in target) {
        target[key] = value[key]
      }
      //这里的id是不可编辑的所以value参数里没有id的值，需要手动添加
      target['id'] = id.value
      //置空不影响下一次操作
      id.value = null
    }
    const DelateData = (value: any) => {
      let index: number = -999
      tableData.value.forEach((item, i) => {
        if (item.id == value.id) {
          index = i
        }
      })
      if (index == -999) return
      tableData.value.splice(index, 1)
    }
    const NewData = (value: any) => {
      //新建就生成一个随机id，并将表单的值和id结构到一个对象push进数组
      let id: any = (Math.random() as any).toFixed(6) * 1000000
      tableData.value.push({ 'id': id, ...value })
    }
    return { tableData, tableColumn, dialogFormConfig, dialogRef, defaultInfo, handleEditClick, handleNewData, EditData, DelateData, NewData }
  }
})
</script>

<style scoped lang="less">
.container {
  width: 1000px;
  height: 600px;
  border: 1px solid grey;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>