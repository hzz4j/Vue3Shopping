<!-- 
  面包屑
  使用方式：
  <NavBread parentPath="/category/1005000" 
    parentName="电器">空调</NavBread>
-->
<script lang="ts">
import { h, defineComponent } from "vue"

export default defineComponent({
  render() {
    return h("div", "hello")
  },
})
</script>

<style lang="scss" scoped>
.bread-wrapper {
  padding: 2.5rem 1rem;
  font-size: 1.6rem;
  .bread-item {
    display: inline-block;
    color: #666;
    padding: 0 0.25rem;

    &:hover {
      color: $theme-primary-color;
    }
  }
}
</style>
