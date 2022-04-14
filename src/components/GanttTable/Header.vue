<template>
  <div class="table-header__wrapper">
    <div class="table-header">
      <table class="table-table-header">
        <colgroup>
          <col width="34" />
          <col :width="width.name" field="name" />
          <col :width="width.owner" field="owner" />
          <col :width="width.begin" field="begin" />
          <col :width="width.due" field="due" />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th field="name">
              <div class="row-head-cell">
                <div class="row-head-cell__content">
                  <div class="row-head-cell__name">
                    <span class="cell__name-icon"><i class="el-icon-plus"></i></span>
                    <span class="cell__name-label"> 标题 </span>
                  </div>
                </div>
                <div class="row-head-cell__suffix"></div>
              </div>
              <div class="row-head__split-line"></div>
            </th>
            <th field="owner">
              <div class="row-head-cell">
                <div class="row-head-cell__content">
                  <div title="处理人" class="text-label">
                    <span> 处理人</span>
                  </div>
                </div>
                <div class="row-head-cell__suffix"></div>
              </div>
              <div class="row-head__split-line"></div>
            </th>
            <th field="begin">
              <div class="row-head-cell">
                <div class="row-head-cell__content">
                  <div title="预计开始" class="text-label">
                    <span> 预计开始</span>
                  </div>
                </div>
                <div class="row-head-cell__suffix"></div>
              </div>
              <div class="row-head__split-line"></div>
            </th>
            <th field="due">
              <div class="row-head-cell">
                <div class="row-head-cell__content">
                  <div title="预计结束" class="text-label">
                    <span> 预计结束</span>
                  </div>
                </div>
                <div class="row-head-cell__suffix"></div>
              </div>
              <div class="row-head__split-line"></div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: {
        name: '246',
        owner: '80',
        begin: '88',
        due: '187',
      },
    }
  },
}
</script>

<style>
.table-header__wrapper {
  width: 100%;
  overflow: hidden;
}

.table-table-header {
  width: 100%;
  border: none;
  border-spacing: 0;
  line-height: 60px;
  user-select: none;
}

.table-table-header th {
  position: relative;
  padding: 5px 0;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  text-align: left;
}

.row-head-cell {
  padding: 0 5px;
  height: 40px;
  line-height: 40px;
}

.row-head__split-line {
  position: absolute;
  top: 20%;
  right: 0;
  display: none;
  width: 8px;
  height: 60%;
  border-right: 2px solid #e8eaee;
  cursor: ew-resize;
}

.table-table-header th:hover .row-head__split-line {
  display: block;
}
</style>
