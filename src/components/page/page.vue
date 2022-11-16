<template>
  <div>
    <Table :tableData="tableData" :tableColumn="tableColumn">
      <!-- 实现状态按钮展示 -->
      <template #status="scope">
        <template v-if="scope.row.enable">
          <el-button plain :type="scope.row.enable ? 'success' : 'danger'">
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-button>
        </template>
        <template v-else>
          <el-button plain :type="scope.row.enable ? 'success' : 'danger'">
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-button>
        </template>
      </template>
      <!-- 实现编辑删除按钮	 -->
      <template #editFn="scope">
        <div class="btn-edit-delete">
          <el-button @click="handleDeleteClick(scope.row)" size="small" type="primary" text bg>
            <i class="el-icon-delete"></i> 删除
          </el-button>
          <el-button @click="handleEditClick(scope.row)" size="small" type="primary" ext bg><i class="el-icon-edit"></i>
            编辑</el-button>
        </div>
      </template>
    </Table>
  </div>
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
import Table from '../../base-ui/table/table.vue'
export default defineComponent({
  components: {
    Table
  },
  props: {
    tableData: {
      type: Array as unknown as any,
      default: () => ({})
    },
    tableColumn: {
      type: Array,
      required: true
    }
  },
  emit: ['handleDeleteClick', 'handleEditClick'],
  setup(props, { emit }) {

    //处理删除时发送事件给父组件，逻辑交由父组件处理
    const handleDeleteClick = (value: any) => {
      emit('handleDeleteClick', value)
    }
    //同理，编辑时将值发送出去给父组件，父组件交给dialog回显
    const handleEditClick = (value: any) => {
      emit('handleEditClick', value)
    }
    return { handleDeleteClick, handleEditClick }
  }
})
</script>
 
<style scoped>

</style>