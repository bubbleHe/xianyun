<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data="cacheFlightsData"  @changeFlights="changeFlights"/>

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班列表 -->
        <FlightsItem v-for="(item,index) in dataList" :key="index" :data="item" />
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[5, 10, 15,20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
        <FlightsAside/>
      </div>
    </el-row>
  </section>
</template>

<script>
import moment from "moment";
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsItem from "@/components/air/flightsItem.vue";
import FlightsFilters from "@/components/air/flightsFilters.vue";
import FlightsAside from '@/components/air/flightsAside.vue'

export default {
  beforeRouteUpdate(to,from,next){
    next();
    this.getData();
  },
  computed:{
    dataList(){
      return this.flightsData.flights.slice(
        (this.pageIndex-1)*this.pageSize,
        this.pageIndex*this.pageSize
      )
    }
  },
  methods: {
    getData(){
      this.$axios({
      url: "/airs",
      params: this.$route.query //?
    }).then(res => {
      //总数据
      this.flightsData = res.data;

      //总条数
      this.total = this.flightsData.flights.length;

      //设置缓存列表数据
      this.cacheFlightsData={...res.data};
      // this.dataList=this.flightsData.flights.slice(0,5)
      // this.setDataList();
    })
    },
    //定义父组件传值方法
    changeFlights(arr){
      
      this.flightsData.flights=arr;
    },
    //页面选规格变化
    handleSizeChange(value) {
      this.pageSize = value;
      this.pageIndex = 1;
      // this.setDataList();
    },
    //当前页面切换
    handleCurrentChange(value) {
      this.pageIndex = value;

      // 设置显示数据列表
      // this.setDataList();
    },
  //   setDataList(arr) {
  //     //设置datalist 数据
  //     //arr 使展示的新数据，该方法将会传递给过滤组件使用
  //     if(arr){
  //       this.pageIndex=1;
  //       this.flightsData.flights=arr;
  //       this.flightsData.total=arr.length;
  //     }
  //     this.dataList = this.flightsData.flights.slice(
  //       (this.pageIndex - 1) * this.pageSize,
  //       this.pageIndex * this.pageSize
  //     );
  //   }
  },

  data() {
    return {
      cacheFlightsData:{
        flights:[],
        info:{},
        options:{}
      },
      flightsData: {
        flights: [],
        info: {},
        options: {}
      },

      // dataList: [],
      total: 0,
      pageIndex: 1,
      pageSize: 5
    };
  },
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters,
    FlightsAside
  },
  mounted() {
    this.pageIndex=1;
    this.getData();
    
    // console.log(data.info)
  }
}
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