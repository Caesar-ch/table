<template>
  <div class="Table">
    <el-table :data="tableData" :default-sort="{ prop: 'id' }" border style="width: 100%">
      <template v-for="item in tableColumn" :key="item.id">
        <!-- 处理排序的逻辑 -->
        <template v-if="item.prop == 'id'">
          <el-table-column :label="item.label" prop="id" sortable align="center" show-overflow-tooltip>
            <template #default="scope">
              <slot :name="item.slotName" :row="scope.row">
                {{ scope.row[item.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column :label="item.label" align="center" show-overflow-tooltip>
            <template #default="scope">
              <slot :name="item.slotName" :row="scope.row">
                {{ scope.row[item.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { ColumnType } from './type'
export default defineComponent({
  props: {
    tableData: {
      type: Object as unknown as any,
      default: () => ({})
    },
    tableColumn: {
      type: Array as unknown as PropType<ColumnType>,
      default: []
    }
  },
  setup(props) {
    const data = computed(() => {
      return [...props.tableData]
    })
    return { data }
  }
})
</script>

<style scoped>

</style>