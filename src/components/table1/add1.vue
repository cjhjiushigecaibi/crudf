

<template>
  <div class="box">
    <el-form ref="loginFormRef"  label-width="0px" ><!--:model="loginForm"-->
      <el-form-item prop="location">
        <el-input v-model="loginForm.location" placeholder="请输入位置" ></el-input>
      </el-form-item>
      <el-form-item prop="capacity">
        <el-input v-model="loginForm.capacity" placeholder="请输入安装容量"  ></el-input>
      </el-form-item>
      <el-form-item prop="area">
        <el-input v-model="loginForm.area" placeholder="请输入用地面积" ></el-input>
      </el-form-item>
      <el-form-item prop="height">
        <el-input v-model="loginForm.height" placeholder="请输入海拔高度" ></el-input>
      </el-form-item>
      <el-form-item prop="latitude">
        <el-input v-model="loginForm.latitude" placeholder="请输入纬度" ></el-input>
      </el-form-item>
      <el-form-item prop="longitude">
        <el-input v-model="loginForm.longitude" placeholder="请输入经度" ></el-input>
      </el-form-item>
      <el-form-item prop="radiation">
        <el-input v-model="loginForm.radiation" placeholder="请输入水平太阳总辐射" ></el-input>
      </el-form-item>
      <el-form-item prop="dipangle">
        <el-input v-model="loginForm.dipangle" placeholder="请输入最佳辐射量倾角" ></el-input>
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
        location:"",
        capacity:"",
        area:"",
        height:"",
        latitude:"",
        longitude:"",
        radiation:"",
        dipangle:"",

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
