<template>
  <div class="box">
    <el-form ref="updateFormRef" :inline="true" :model="projectName"   label-width="0px">
      <el-form-item prop="projectName"style="width: 100px">
        项目名称<el-input v-model="updateForm.projectName" placeholder="请输入项目名称" ></el-input>
      </el-form-item>
      <el-form-item prop="projectType"style="width: 100px">
        项目类型<el-input v-model="updateForm.projectType" placeholder="请输入项目类型"  ></el-input>
      </el-form-item>
      <el-form-item prop="projectStage"style="width: 100px">
        项目阶段 <el-input v-model="updateForm.projectStage" placeholder="请输入项目阶段" ></el-input>
      </el-form-item>
      <el-form-item prop="projectOwner"style="width: 100px">
        项目业主<el-input v-model="updateForm.projectOwner" placeholder="请输入项目业主" ></el-input>
      </el-form-item>
      <el-form-item prop="projectGroup"style="width: 100px">
        业主所属集团<el-input v-model="updateForm.projectGroup" placeholder="请输入项目业主所属集团" ></el-input>
      </el-form-item>
      <el-form-item prop="projectDesignInstitute"style="width: 100px">
        设计单位<el-input v-model="updateForm.projectDesignInstitute" placeholder="请输入设计单位" ></el-input>
      </el-form-item>
      <el-form-item prop="projectDate">
        日期<el-input v-model="updateForm.projectDate" placeholder="请输入日期" ></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="updatesubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updateForm: {
        projectName:"",
        projectType:"",
        projectStage:"",
        projectOwner:"",
        projectGroup:"",
        projectDesignInstitute:"",
        projectDate:"",
      },
    }
  },
  methods:{
    updatesubmit() {
      this.$http.post("project/update",this.updateForm);
    },
  }
}

</script>

<style>
</style>
