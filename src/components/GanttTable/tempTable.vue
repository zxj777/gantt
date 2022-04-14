<template>
  <vxe-table
    ref="xTable"
    :data="tasks"
    border="inner"
    row-id="id"
    :row-config="{ isHover: true }"
    height="100%"
    :tree-config="{
      reserve: true,
      transform: true,
      parentField: 'pid',
    }"
    @toggle-tree-expand="toggleExpandChangeEvent"
    size="mini"
  >
    :column-config="{ resizable: true }" >
    <vxe-column
      v-for="column in columns"
      :key="column.name"
      :field="column.name"
      :title="column.label"
      :min-width="column.width"
      show-overflow="ellipsis"
      tooltip
      :tree-node="column.name === 'title'"
    ></vxe-column>
  </vxe-table>
  <!-- <el-table
    :data="tasks"
    :row-key="getRowKey"
    highlight-current-row
    height="100%"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    border
    :header-row-style="{ height: '60px' }"
    @expand-change="handleExpandChange"
    :expand-row-keys="viewConfig.expandedKeys"
  >
    >
    <el-table-column
      v-for="column in columns"
      :key="column.name"
      :label="column.label"
      :min-width="column.width"
      resizable
      show-overflow-tooltip
    >
      <template slot-scope="{ row }">
        <el-link v-if="row[column.name].isLink" href="https://element.eleme.io" target="_blank">{{
          row[column.name].value
        }}</el-link>
        <template v-else-if="row[column.name].isEditing">
          <span></span>
        </template>
        <span v-else>{{ row[column.name].value }}</span>
      </template>
    </el-table-column>
  </el-table> -->
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Vue from 'vue'
import 'xe-utils'
import 'vxe-table/lib/style.css'
import {
  // 核心
  // VXETable,

  // 功能模块
  Icon,
  Filter,
  Menu,
  Edit,
  Export,
  Keyboard,
  Validator,
  Header,
  // Footer,

  // 可选组件
  Column,
  Colgroup,
  Grid,
  Toolbar,
  Pager,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Input,
  Textarea,
  Button,
  Modal,
  Tooltip,
  Form,
  FormItem,
  FormGather,
  Select,
  Optgroup,
  Option,
  Switch,
  List,
  Pulldown,

  // 表格
  Table,
} from 'vxe-table'

Vue.use(Header)
  // .use(Footer)
  .use(Icon)
  .use(Filter)
  .use(Edit)
  .use(Menu)
  .use(Export)
  .use(Keyboard)
  .use(Validator)

  // 可选组件
  .use(Column)
  .use(Colgroup)
  .use(Grid)
  .use(Toolbar)
  .use(Pager)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Radio)
  .use(RadioGroup)
  .use(RadioButton)
  .use(Input)
  .use(Textarea)
  .use(Button)
  .use(Modal)
  .use(Tooltip)
  .use(Form)
  .use(FormItem)
  .use(FormGather)
  .use(Select)
  .use(Optgroup)
  .use(Option)
  .use(Switch)
  .use(List)
  .use(Pulldown)

  // 安装表格
  .use(Table)

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tasks: 'tasks',
      columns: 'columns',
      viewConfig: 'viewConfig',
    }),
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapMutations(['setViewConfig']),
    init() {
      this.$refs.xTable.setTreeExpand(
        this.tasks.filter((task) => task.expanded),
        true,
      )
    },
    getRowKey(row) {
      return row.id
    },
    toggleExpandChangeEvent({ row, expanded }) {
      let expandedKeys
      const { expandedKeys: keys } = this.viewConfig
      if (expanded) {
        expandedKeys = keys.concat(row.id)
      } else {
        const idx = keys.findIndex((item) => item === row.id)
        expandedKeys = keys.slice(0, idx).concat(keys.slice(idx + 1))
      }

      this.setViewConfig({
        ...this.viewConfig,
        expandedKeys,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .vxe-header--row {
  height: 60px;
}
</style>
