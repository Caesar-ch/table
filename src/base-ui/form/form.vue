<template>
  <div class="chform">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemLayout">
              <!-- --input -->
              <template v-if="item.type === 'input'">
                <el-input :placeholder="item.placeholder" :model-value="modelValue[item.field]"
                  @update:modelValue="handleValueChange($event, item.field)"></el-input>
              </template>
              <!-- --radio -->
              <template v-else-if="item.type === 'radio'">
                <el-radio-group v-model="modelValue[item.field]">
                  <el-radio :label="true">开启</el-radio>
                  <el-radio :label="false">禁用</el-radio>
                </el-radio-group>
              </template>
              <!-- -- -->
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Iformitem } from './type'
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<Iformitem[]>,
      default: () => []
    },
    itemLayout: {
      type: Object,
      default: () => ({ padding: '20px  10px' })
    },
    colLayout: {
      type: Object,
      default: () => ({})
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    //当button的值更新时，将这个值和字段发送给父组件同步
    const handleValueChange = function (value: any, filed: any) {
      emit('update:modelValue', { ...props.modelValue, [filed]: value })
    }
    return {
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less">
.chform {
  padding: 1px 20px;
  text-align: center;
  border-radius: 10px;
  background-color: #ffffff;

  .header {
    margin: 20px 5px;
  }
}
</style>
