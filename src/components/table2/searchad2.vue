<template>
  <div class="box">
    <el-form>
      <el-form-item prop="sear">
        <el-input v-model="name" placeholder="请输入名称查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-serch" @click="getElementListByname">提交</el-button>
      </el-form-item>
    </el-form>
    <h2>查询结果</h2>
    <!--用户列表  -->
    <el-table :data="[elementlistbyname]" width="3000" border stripe>
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
  </div>

</template>

<script>
export default {
  created() {
    this.getElementList();
  },
  data() {
    return {
      name: "",
      elementlist: [],
      elementlistbyname: [],
    }
  },
  methods: {
    //获得所有光伏信息
    async getElementList() {
      const {data: res} = await this.$http.get("element/getAll");
      this.elementlist = res;
    },
    //根据名字查询
    async getElementListByname() {
      const {data: res} = await this.$http.get("element/getElementByName/" + this.name).then(response => {
        console.log("success")
        this.elementlistbyname = response.data;
      })

    },
  },
}
</script>

<style>
.box {
  width: 250px;
  height: 300px;
  padding-top: 20px;
  padding-left: 20px;
}
</style>
