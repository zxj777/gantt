<template>
  <div id="app">
    <Gantt :tasks="tasks" :columns="columns"></Gantt>
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
