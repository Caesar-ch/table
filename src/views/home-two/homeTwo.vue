<template>
  <div class="container">
    <div class="search">
      <Search :search-form-config="searchFormConfig" @handleResetClick="handleResetClick"
        @handleQueryClick="handleQueryClick"></Search>
    </div>
    <div class="header">
      <el-button type="success" @click="handleNewData(1)" size="large">按钮1</el-button>
      <el-button type="success" @click="handleNewData(2)" size="large">按钮2</el-button>
      <el-button type="success" @click="handleNewData(3)" size="large">按钮3</el-button>
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
import { defineComponent, ref, nextTick } from 'vue'
import Page from '../../components/page/page.vue'
import Dialog from '../../base-ui/dialog/dialog.vue'
import Search from '../../components/serach/search.vue'
import { _tableData, tableColumn } from './config/table-data'
import { dialogFormConfig } from './config/dialog-form'
import { searchFormConfig } from './config/search-config'
export default defineComponent({
  components: {
    Page,
    Dialog,
    Search
  },
  setup() {
    const tableData = ref([..._tableData])
    const dialogRef = ref<InstanceType<typeof Dialog>>()
    const defaultInfo = ref<any>({})
    const index = ref<any>(null)
    const id = ref<any>(null)
    const serachTableData = ref<any>([])
    const temp = ref<any>([])
    const handleNewData = (i: any) => {
      index.value = i
      dialogRef.value!.dialogVisible = true
      defaultInfo.value = {}
    }
    const handleEditClick = (value: any) => {
      id.value = value.id
      dialogRef.value!.dialogVisible = true
      defaultInfo.value = { ...value }
    }
    const EditData = (value: any) => {
      let target: any = tableData.value.find((item: any) => id.value == item.id)
      for (let key in target) {
        target[key] = value[key]
      }
      target['id'] = id.value
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
      if (index.value != null) {
        if (tableData.value[index.value - 1]) {
          tableData.value[index.value - 1] = { 'id': tableData.value[index.value - 1].id, ...value }
          index.value = null
        } else {
          let id: any = (Math.random() as any).toFixed(6) * 1000000
          tableData.value[index.value - 1] = { 'id': id, ...value }
          index.value = null
        }
      }
    }
    const handleResetClick = (value: any) => {
      console.log(value);
      tableData.value = [...temp.value]
      temp.value = []
    }
    const handleQueryClick = (value: any) => {
      for (let key in value) {
        let target: any = tableData.value.find((item: any) => value[key] == item[key])
        serachTableData.value.push(target)
      }
      serachTableData.value = serachTableData.value.filter((item: any) => item != undefined)
      temp.value = [...tableData.value]
      tableData.value = [...serachTableData.value]
      serachTableData.value = []
    }
    return { tableData, tableColumn, dialogFormConfig, dialogRef, defaultInfo, handleEditClick, handleNewData, EditData, DelateData, NewData, handleResetClick, handleQueryClick, searchFormConfig, index, id }
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

.search {
  padding: 20px;
  // background-color: rgb(176, 181, 184);
  margin-bottom: 20px;
}
</style>