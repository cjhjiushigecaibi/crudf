<template>
  <div class="box">
    <el-form ref="loginFormRef"  label-width="0px" ><!--:model="loginForm"-->
      <el-form-item prop="name">
        <el-input v-model="loginForm.name" placeholder="请输入项目名称" ></el-input>
      </el-form-item>
      <el-form-item prop="type">
        <el-input v-model="loginForm.type" placeholder="请输入项目类型"  ></el-input>
      </el-form-item>
      <el-form-item prop="stage">
        <el-input v-model="loginForm.stage" placeholder="请输入项目阶段" ></el-input>
      </el-form-item>
      <el-form-item prop="owner">
        <el-input v-model="loginForm.stage" placeholder="请输入项目业主" ></el-input>
      </el-form-item>
      <el-form-item prop="company">
        <el-input v-model="loginForm.company" placeholder="请输入项目业主所属集团" ></el-input>
      </el-form-item>
      <el-form-item prop="unit">
        <el-input v-model="loginForm.unit" placeholder="请输入设计单位" ></el-input>
      </el-form-item>
      <el-form-item prop="date">
        <el-input v-model="loginForm.date" placeholder="请输入日期" ></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="">提交</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        name:"",
        type:"",
        stage:"",
        owner:"",
        company:"",
        unit:"",
        date:"",

      },
    }
  }
}
methods:{
  //submit(){},
}
</script>

<style>
.box{

  padding-left: 20px;
}

</style>
