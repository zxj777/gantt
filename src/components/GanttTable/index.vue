<template>
  <div ref="tableWrapper" class="mihoyo-gantt__table-wrapper" :style="{ height }">
    <TableHeader></TableHeader>
  </div>
</template>

<script>
import TableHeader from './Header.vue'

export default {
  name: 'GanttTable',
  components: {
    TableHeader,
  },
  props: {
    height: {
      type: String,
      default: '100%',
    },
  },
  mounted() {},
}
</script>

<style>
.mihoyo-gantt__table-wrapper {
  background-color: #fff;
}
</style>
