<template>
  <div class="box">
    <el-form ref="addFormRef" :inline="true" :model="projectName"   label-width="0px" >
      <el-form-item prop="projectName"  style="width: 100px">
        项目名称<el-input v-model="addForm.projectName" placeholder="请输入项目名称" ></el-input>
      </el-form-item>
      <el-form-item prop="projectType" style="width: 100px">
        项目类型 <el-input v-model="addForm.projectType" placeholder="请输入项目类型"  ></el-input>
      </el-form-item>
      <el-form-item prop="projectStage" style="width: 100px">
        项目阶段<el-input v-model="addForm.projectStage" placeholder="请输入项目阶段" ></el-input>
      </el-form-item>
      <el-form-item prop="projectOwner"style="width: 100px">
        项目业主<el-input v-model="addForm.projectOwner" placeholder="请输入项目业主" ></el-input>
      </el-form-item>
      <el-form-item prop="projectGroup"style="width: 100px">
        业主所属集团<el-input v-model="addForm.projectGroup" placeholder="请输入项目业主所属集团" ></el-input>
      </el-form-item>
      <el-form-item prop="projectDesignInstitute" style="width: 100px">
        设计单位<el-input v-model="addForm.projectDesignInstitute" placeholder="请输入设计单位" ></el-input>
      </el-form-item>
      <el-form-item prop="projectDdte" >
        日期<el-input v-model="addForm.projectDdte" placeholder="请输入日期" ></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      addForm: {
        projectName:"",
        projectType:"",
        projectStage:"",
        projectOwner:"",
        projectGroup:"",
        projectDesignInstitute:"",
        projectDdte:"",
      },
    }
  },
  methods:{
    submit(){
      this.$http.post("project/add", this.addForm);
    },
}
   
      
}
</script>

<style>
.box{

  padding-left: 20px;
}

</style>
