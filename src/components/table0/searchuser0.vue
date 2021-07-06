<template>
  <div class="box">
    <el-form>
      <el-form-item prop="name">
        <el-input v-model="name" placeholder="请输入名称查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-serch" @click="getProjectListByname">提交</el-button>
      </el-form-item>
    </el-form>
    <h2>查询结果</h2>
    <!--用户列表  -->
    <el-table :data="[projectlistbyname]" width="3000" border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="项目名称" prop="name"></el-table-column>
      <el-table-column label="项目类型" prop="ptype"></el-table-column>
      <el-table-column label="项目阶段" prop="pstage"></el-table-column>
      <el-table-column label="项目业主" prop="powner"></el-table-column>
      <el-table-column label="项目业主所属集团" prop="pgroup"></el-table-column>
      <el-table-column label="设计单位" prop="pdesigninstitute"></el-table-column>
      <el-table-column label="日期" prop="pdate"></el-table-column>
    </el-table>

  </div>

</template>

<script>
export default {
  created() {
    this.getProjectList();
  },
  data() {
    return {
      name: "",
      projectlist: [],
      projectlistbyname: [],
    }
  },
  methods: {
    //获得所有光伏信息
    async getProjectList() {
      const {data: res} = await this.$http.get("project/getAll");
      this.projectlist = res;
    },
    //根据名字查询
    async getProjectListByname() {
      const {data: res} = await this.$http.get("project/getProjectByName/" + this.name).then(response => {
        console.log("success")
        this.projectlistbyname = response.data;
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
