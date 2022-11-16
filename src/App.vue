<template>
  <div id="app">
    <!-- 文字介绍 -->
    <h3>版本一</h3>
    <p>这个版本是三个按钮其实都是新增功能,每个按钮都是触发了同一个函数</p>
    <!-- 组件一 -->
    <Home></Home>

    <!-- 文字介绍 -->
    <h3>版本二</h3>
    <p> 这个版本是每个按钮对应每一行，例如 点击按钮1,输入的值就会覆盖第一行的值,id是随机数动态生成,且不可编辑。<br>
      若删除了所有的值，点击每一个按钮其实是在数据数组对应序号位置添加信息,即这个版本点击对应按钮是在对应<br>位置 写信息或者覆盖信息，既没有新增第四条数据的功能<br>
      <strong>也实现了初步的本地搜索功能,但只支持准确搜索,没有模糊搜索功能,即当输入准确的id 或者名称时，可以搜索出来结果</strong>
      <br>
      <strong>且搜索功能只能搜索一次，然后点击重置按钮，才可以正常下一次搜索,即每点击一次搜索之后，一定要点击一次重置</strong>
    </p>
    <!-- 组件二 -->
    <HomeTwo></HomeTwo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './views/home/home.vue'
import HomeTwo from './views/home-two/homeTwo.vue'
export default defineComponent({
  components: {
    Home,
    HomeTwo
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 18px;
  margin-top: 60px;
}

.container {
  margin-top: 20px;
}
</style>
