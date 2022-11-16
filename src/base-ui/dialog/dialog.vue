<template>
  <div class="pageDialog">
    <el-dialog v-model="dialogVisible" title="新增用户" width="30%" center destroy-on-close>
      <template #default>
        <ChForm v-bind="dialogFormConfig" v-model="formData"></ChForm>
        <slot></slot>
      </template>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import ChForm from '../form/form.vue'
export default defineComponent({
  components: {
    ChForm
  },
  props: {
    dialogFormConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
  },
  emit: ['editData'],
  setup(props, { emit }) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.dialogFormConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        //编辑 
        emit('editData', { ...formData.value })
      } else {
        //新建
        emit('newData', { ...formData.value })
      }
      formData.value = {}
    }
    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped>

</style>
