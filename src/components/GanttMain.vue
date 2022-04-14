<template>
  <div class="mihoyo-gantt-wrapper">
    <div class="mihoyo-gantt__toolsbar" style="height: 32px"></div>
    <div :v-loading="isLoading" ref="gantt" :style="{ height: `${height.ganttHeight}px` }">
      <div class="mihoyo-gantt__container" :style="{ height: `${height.ganttContainerHeight}px` }">
        <div class="mihoyo-gantt__empty"></div>
        <div class="mihoyo-gantt__split-wrapper">
          <div
            class="mihoyo-gantt__split-part part--left"
            :style="{ right: `${100 - triggerLeft}%` }"
          >
            <div :style="{ height: `${height.ganttContainerHeight}px` }">
              <GanttTable></GanttTable>
            </div>
          </div>
          <div class="mihoyo-gantt__split-trigger" :style="{ left: `${triggerLeft}%` }">
            <div class="mihoyo-gantt__split-trigger-bar"></div>
          </div>
          <div class="mihoyo-gantt__split-part part--right" :style="{ left: `${triggerLeft}%` }">
            <GanttChart :height="height.ganttContainerHeight"></GanttChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import GanttTable from './GanttTable/index.vue'
import GanttChart from './GanttChart/index.vue'
// import { mapState } from 'vuex'
import GanttTable from './GanttTable/tempTable.vue'

export default {
  name: 'GanttMain',
  components: {
    GanttTable,
    GanttChart,
  },
  data() {
    return {
      triggerLeft: 50,
      isLoading: false,
      height: {
        ganttHeight: 0,
        ganttContainerHeight: 0,
      },
    }
  },

  mounted() {
    this.computeGanttHeight()
    window.onresize = () => {
      this.computeGanttHeight()
    }
  },
  methods: {
    computeGanttHeight() {
      const ganttEl = this.$refs.gantt
      const ganttHeight = window.innerHeight - ganttEl.offsetTop
      const ganttContainerHeight = ganttHeight - 18

      this.height = {
        ganttHeight,
        ganttContainerHeight,
      }
    },
  },
}
</script>

<style lang="scss">
.mihoyo-gantt-wrapper {
  width: 100%;

  .mihoyo-gantt__container {
    background-color: #f8f8f8;

    .mihoyo-gantt__split-wrapper {
      position: relative;
      height: 100%;

      .mihoyo-gantt__split-part {
        position: absolute;
        top: 0;
        bottom: 0;

        &.part--left {
          left: 0;
        }

        &.part--right {
          right: 0;
          overflow: scroll;
          font-size: 0;
        }
      }
    }
  }
}
</style>
