# mihoyo-gantt

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


4/18-4/22
1.保证大量任务，时间跨度长时不卡顿
2.子任务可展开隐藏
3.甘特图hover展示任务面板
4.节假日高亮


4/23-4/29
1.甘特图建立依赖关系（开始-开始，结束-结束，结束-开始）
2.表格可快速编辑
3.甘特图时间维度可更改（日、周、月）
4.甘特图未定义时间的任务也可拖动生成
5.可根据项目迭代需求任务时间处理人等条件过滤，包含过滤面板
6.快捷更改查看模式（处理人、迭代、开发人员 同tapd）


4/30-5/11
1.可在表格中快速添加删除任务需求（包括子任务）等
2.甘特图支持分割任务
3.甘特图支持关键路径计算并标红
4.支持键盘快捷键、鼠标滚轮和控制板操作
5.任务支持拖拽
6.支持里程碑
7.ddl标注、逾期任务高亮

5/12-5/20
1.可导入导出
2.甘特图操作可撤回
