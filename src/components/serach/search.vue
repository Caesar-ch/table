<template>
  <div class="page-serach">
    <Form v-bind="searchFormConfig" v-model="formdata">
      <template #footer>
        <div class="btns">
          <el-button @click="handleRestSearchData"> 重置</el-button>
          <el-button type="primary" @click="handleQuerySelect">
            <i class="el-icon-search"></i> 搜索
          </el-button>
        </div>
      </template>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Form from '@/base-ui/form/form.vue'

export default defineComponent({
  components: {
    Form
  },
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  emits: ['handleResetClick', 'handleQueryClick'],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const originData: any = {}
    for (const item of formItems) {
      originData[item.field] = ''
    }
    const formdata = ref(originData)
    //重置
    const handleRestSearchData = () => {
      formdata.value = originData
      emit('handleResetClick')
    }
    //查询
    const handleQuerySelect = () => {
      emit('handleQueryClick', formdata.value)
    }
    return {
      formdata,
      handleRestSearchData,
      handleQuerySelect
    }
  }
})
</script>

<style scoped>
.btns {
  text-align: right;
  padding: 0 20px 0 0;
}
</style>
