<template>
  <div id="app">
    <Gantt :tasks="tasks" :columns="columns" @updateTask="handleUpdateTask"></Gantt>
  </div>
</template>

<script>
import Gantt from './Gantt.vue'

export default {
  name: 'App',
  components: {
    Gantt,
  },
  data() {
    return {
      tasks: [
        {
          id: '1',
          title: '需求一',
          owner: '蛋包',
          begin: '2020-01-01',
          due: '2020-01-03',
          progress: 0,
          type: 'story',
          children: [
            {
              id: '1001',
              title: '任务一',
              owner: '蛋包',
              begin: '2020-01-01',
              due: '2020-01-03',
              progress: 0,
              type: 'task',
            },
            {
              id: '1002',
              title: '任务二',
              owner: '蛋包',
              begin: '2020-01-01',
              due: '2020-01-03',
              progress: 0,
              type: 'task',
            },
            {
              id: '1003',
              title: '任务三',
              owner: '蛋包',
              begin: '2020-01-01',
              due: '2020-01-03',
              progress: 0,
              type: 'task',
            },
          ],
        },
        {
          id: '2',
          title: '需求二',
          owner: '蛋包',
          begin: '2020-01-01',
          due: '2020-01-03',
          progress: 0,
          type: 'story',
          children: [
            {
              id: '2001',
              title: '任务一',
              owner: '蛋包',
              begin: '2020-01-01',
              due: '2020-01-03',
              progress: 0,
              type: 'task',
            },
            {
              id: '2002',
              title: '任务二',
              owner: '蛋包',
              begin: '2020-01-01',
              due: '2020-01-03',
              progress: 0,
              type: 'task',
            },
            {
              id: '2003',
              title: '任务三',
              owner: '蛋包',
              begin: '2020-01-01',
              due: '2020-01-03',
              progress: 0,
              type: 'task',
            },
          ],
        },
        // {
        //   id: '3',
        //   title: '需求三',
        //   owner: '蛋包',
        //   begin: '2019-12-01',
        //   due: '2020-01-03',
        //   progress: 0,
        //   type: 'story',
        //   children: [
        //     {
        //       id: '3001',
        //       title: '任务一',
        //       owner: '蛋包',
        //       begin: '2019-12-10',
        //       due: '2019-12-20',
        //       progress: 0,
        //       type: 'task',
        //     },
        //     {
        //       id: '3002',
        //       title: '任务二',
        //       owner: '蛋包',
        //       begin: '2019-12-15',
        //       due: '2019-12-28',
        //       progress: 0,
        //       type: 'task',
        //     },
        //     {
        //       id: '3003',
        //       title: '任务三',
        //       owner: '蛋包',
        //       begin: '2020-01-01',
        //       due: '2020-01-01',
        //       progress: 0,
        //       type: 'task',
        //     },
        //   ],
        // },
      ],
      columns: [
        {
          name: 'title',
          width: '246',
        },
        {
          name: 'owner',
          width: '80',
        },
        {
          name: 'begin',
          width: '150',
        },
        {
          name: 'due',
          width: '150',
        },
      ],
    }
  },
  methods: {
    handleUpdateTask(data, cb) {
      const task = this.findTask(this.tasks, data.taskId)
      task.begin = data.begin
      task.due = data.due
      cb && cb(null)
      // this.tasks.find((task) => {})
    },
    findTask(tasks, id) {
      for (const task of tasks) {
        if (task.id === id) {
          return task
        } else {
          if (task.children) {
            const r = this.findTask(task.children, id)
            if (r) {
              return r
            }
          }
        }
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
