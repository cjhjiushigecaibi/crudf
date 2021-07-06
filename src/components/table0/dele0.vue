<template>
  <div class="box">
    <el-form>
      <el-form-item prop="pname">
        <el-input v-model="pname" placeholder="请输入名称删除"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='button' @click="delProjectListByname">删除</el-button>
      </el-form-item>
    </el-form>
    <!--用户列表  -->
    <el-table :data="projectlist" width="3000"  border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="项目名称" prop="pname"></el-table-column>
      <el-table-column label="项目类型" prop="ptype"></el-table-column>
      <el-table-column label="项目阶段" prop="pstage"></el-table-column>
      <el-table-column label="项目业主" prop="powner"></el-table-column>
      <el-table-column label="项目业主所属集团" prop="pgroup"></el-table-column>
      <el-table-column label="设计单位" prop="pdesigninstitute"></el-table-column>
      <el-table-column label="日期" prop="pdate"></el-table-column>
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
      pname:"",
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

      this.$http.get("project/delete/"+this.pname);
    },
  }
}
</script>
<style>
</style>
