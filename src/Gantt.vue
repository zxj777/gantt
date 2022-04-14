<template>
  <div class="mihoyo-gantt">
    <slot name="header"></slot>
    <GanttMain></GanttMain>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import GanttMain from './components/GanttMain.vue'
import { mapMutations, mapState } from 'vuex'
import { getColumnConfig } from './config/columns'
import dayjs from 'dayjs'

export default {
  components: {
    GanttMain,
  },
  props: {
    tasks: {
      type: Array,
      default() {
        return []
      },
    },
    columns: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    ...mapState({
      viewConfig: 'viewConfig',
    }),
  },
  watch: {
    tasks: {
      handler(val) {
        const expandedKeys = []
        const tasks = this.formatTasks(val, expandedKeys)
        this.setTasks(tasks)
        this.setViewConfig({
          ...this.viewConfig,
          expandedKeys,
        })
      },
      immediate: true,
    },
    columns: {
      handler(val) {
        const columns = this.formatColumns(val)
        this.setColumns(columns)
      },
      immediate: true,
    },
  },
  methods: {
    ...mapMutations(['setTasks', 'setColumns', 'setViewConfig']),
    // formatTasks(tasks, expandedKeys, pid = null) {
    //   return tasks.map((task) => {
    //     const r = {}
    //     r.pid = pid
    //     Object.keys(task).forEach((key) => {
    //       if (key === 'children') {
    //         expandedKeys.push(task.id)
    //         r.expanded = true
    //         r[key] = this.formatTasks(task[key], expandedKeys, task.id)
    //       } else {
    //         r[key] = task[key]
    //       }
    //     })
    //     r._begin = dayjs(task.begin)
    //     r._due = dayjs(task.due)
    //     return r
    //   })
    // },
    formatTasks(tasks, expandedKeys, pid = null) {
      if (!tasks) return []

      let r = []

      tasks.forEach((task) => {
        task.pid = pid
        task._begin = dayjs(task.begin)
        task._due = dayjs(task.due)
        r.push(task)
        if (task.children) {
          expandedKeys.push(task.id)
          task.expanded = true
          r = r.concat(this.formatTasks(task.children, expandedKeys, task.id))
          delete task.children
        }
      })

      return r
    },
    formatColumns(columns) {
      const configMap = getColumnConfig()

      return columns.map((column) => ({
        ...configMap[column.name],
        ...column,
      }))
    },
  },
}
</script>
