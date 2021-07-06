<template>
  <div class="box">
    <el-form>
      <el-form-item prop="name">
        <el-input v-model="name" placeholder="请输入名称删除"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='button' @click="delElementListByname">删除</el-button>
      </el-form-item>
    </el-form>
   <!--用户列表  -->
    <el-table :data="elementlist" width="3000"  border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="光电厂名称" prop="name"></el-table-column>
      <el-table-column label="多年平均气温" prop="avgTemperature"></el-table-column>
      <el-table-column label="多年极端最低气温" prop="lowestTemperature"></el-table-column>
      <el-table-column label="多年极端最高气温" prop="highestTemperature"></el-table-column>
      <el-table-column label="最热月平均气温" prop="avgTemperatureInHottest"></el-table-column>
      <el-table-column label="多年最大冻土深度" prop="maxFrozenDepth"></el-table-column>
      <el-table-column label="多年平均风速" prop="avgWindSpeed"></el-table-column>
      <el-table-column label="多年极大风速" prop="maxWindSpeed"></el-table-column>
      <el-table-column label="多年平均雷暴日数" prop="avgThunderstorm"></el-table-column>
      <el-table-column label="污秽等级" prop="pollutionGrade"></el-table-column>
    </el-table>
    <router-view></router-view><!--结果展示-->
  </div>

</template>


<script>
export default {
  created(){
    this.getElementList();
    this.delElementListByname()
  },
  data() {
    return {
        name:"",
        elementlist:[],
    }
  },
  methods: {
    //获取全部气象特征数据
    async getElementList(){
      const {data:res} = await this.$http.get("element/getAll");
      this.elementlist=res;
    },
    //名称删除Element
    async delElementListByname() {

      this.$http.get("element/delete/"+this.name);
    },
  }
}
</script>

<style>
.box{

  padding-left: 20px;
}
</style>
