const _tableData = [
  {
   id:196670,
   name:'秦',
   enable:true,
   data: '王侯将相宁有种乎',
  },
  {
    id:277499,
    name:'吴',
    enable:true,
    data: '三千越甲可吞吴',
   },
   {
    id:367541,
    name:'燕',
    enable:true,
    data: '燕图现图穷匕现',
   },
]
const tableColumn= [
  { prop: 'id', label: 'id', minWidth: '80' },
  { prop: 'name', label: '名称', minWidth: '80' },
  { prop: 'enable', label: '状态', minWidth: '90', slotName: 'status' },
  { prop: 'data', label: '数据', minWidth: '200' },
  { label: '功能', minWidth: '120', slotName: 'editFn' }
]
export {
  _tableData,
  tableColumn
}