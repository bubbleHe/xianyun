<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div></div>

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班列表 -->
        <FlightsItem v-for="(item,index) in dataList" :key="index" :data="item" />
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 15,20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import moment from "moment";
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsItem from "@/components/air/flightsItem.vue";

export default {
  methods: {
    //页面选规格变化
    handleSizeChange(value) {
        this.pageSize = value;
        this.pageIndex=1;
        this.setDataList();
    }
    ,
    //当前页面切换
    handleCurrentChange(value) {
        this.pageIndex = value;
            
            // 设置显示数据列表
            this.setDataList();
    },
    setDataList(){
      this.dataList=this.flightsData.flights.slice(
          (this.pageIndex-1)*this.pageSize,
          this.pageIndex*this.pageSize
      )
  },
  },
  
  data() {
    return {
      flightsData: {
        flights: []
      },

      dataList: [],
      total: 0,
      pageIndex: 1,
      pageSize:5
    };
  },
  components: {
    FlightsListHead,
    FlightsItem
  },
  mounted() {
    this.$axios({
      url: "/airs",
      params: this.$route.query //?
    }).then(res => {
      //总数据
      this.flightsData = res.data;

      //总条数
      this.total = this.flightsData.flights.length;
      //
    //   this.setDataList();
    // this.dataList=this.flightsData.flights.slice(0,5)
    this.setDataList();
    });
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>