<template>
  <div class="box">
    <el-form>
      <el-form-item prop="projectName">
        <el-input v-model="projectName" placeholder="请输入名称删除"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='button' @click="delProjectListByname">删除</el-button>
      </el-form-item>
    </el-form>
    <!--用户列表  -->
    <el-table :data="projectlist" width="3000"  border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="项目名称" prop="projectName"></el-table-column>
      <el-table-column label="项目类型" prop="projectType"></el-table-column>
      <el-table-column label="项目阶段" prop="projectStage"></el-table-column>
      <el-table-column label="项目业主" prop="projectOwner"></el-table-column>
      <el-table-column label="项目业主所属集团" prop="projectGroup"></el-table-column>
      <el-table-column label="设计单位" prop="projectDesignInstitute"></el-table-column>
      <el-table-column label="日期" prop="projectDate"></el-table-column>
    </el-table>
    <router-view></router-view><!--结果展示-->
  </div>

</template>

<script>
export default {
  created(){
    this.getProjectList();
    this.delProjectListByname()
  },
  data() {
    return {
      projectName:"",
      projectlist:[],
    }
  },
  methods: {
    //获取全部气象特征数据
    async getProjectList(){
      const {data:res} = await this.$http.get("project/getAll");
      this.projectlist=res;
    },
    //名称删除Project
    async delProjectListByname() {

      this.$http.get("project/delete/"+this.projectName);
    },
  }
}
</script>
<style>
</style>
