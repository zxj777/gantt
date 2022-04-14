import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const options = {
  state: {
    tasks: [],
    columns: [],
    options: {
      columnWidth: 30,
      rowHeight: 36,
      groupGap: 2,
      columnGap: 1,
      headerHeight: 60,
      barPadding: 3,
    },
    viewConfig: {
      expandedKeys: [],
    },
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setColumns(state, columns) {
      state.columns = columns
    },
    setViewConfig(state, viewConfig) {
      state.viewConfig = viewConfig
    },
  },
}

const store = new Vuex.Store(options)

export default store
