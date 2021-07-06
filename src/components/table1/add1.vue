
<template>
  <div class="box">
    <el-form ref="locFormRef"  :inline="true" :model="lname" label-width="0px" >
      <el-form-item prop="lname"style="width: 100px">
        位置<el-input v-model="locForm.lname" placeholder="请输入位置" ></el-input>
      </el-form-item>
      <el-form-item prop="Installcapacity"style="width: 100px">
        安装容量<el-input v-model="locForm.installcapacity" placeholder="请输入安装容量"  ></el-input>
      </el-form-item>
      <el-form-item prop="Landarea"style="width: 100px">
        用地面积 <el-input v-model="locForm.landarea" placeholder="请输入用地面积" ></el-input>
      </el-form-item>
      <el-form-item prop="Alitute"style="width: 100px">
        海拔高度<el-input v-model="locForm.alitute" placeholder="请输入海拔高度" ></el-input>
      </el-form-item>
      <el-form-item prop="Latitude"style="width: 100px">
        纬度 <el-input v-model="locForm.latitude" placeholder="请输入纬度" ></el-input>
      </el-form-item>
      <el-form-item prop="Longitude"style="width: 100px">
        经度<el-input v-model="locForm.longitude" placeholder="请输入经度" ></el-input>
      </el-form-item>
      <el-form-item prop="Totalsolarradiation1"style="width: 100px">
        水平太阳总辐射1<el-input v-model="locForm.totalsolarradiation1" placeholder="请输入水平太阳总辐射1" ></el-input>
      </el-form-item>
      <el-form-item prop="Totalsolarradiation2"style="width: 100px">
        水平太阳总辐射2<el-input v-model="locForm.totalsolarradiation2" placeholder="请输入水平太阳总辐射2" ></el-input>
      </el-form-item>
      <el-form-item prop="Raditionangle">
        最佳辐射量倾角<el-input v-model="locForm.raditionangle" placeholder="请输入最佳辐射量倾角" ></el-input>
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
      locForm: {
        lname: "",
        installcapacity: "",
        landarea: "",
        alitute: "",
        latitude: "",
        longitude: "",
        totalsolarradiation1: "",
        totalsolarradiation2: "",
        raditionangle: "",
      },
    }
  },
      methods:{
        submit() {
          this.$http.post("address/add", this.locForm);
        },
    }
}

</script>

<style>
.box{

  padding-left: 20px;
}

</style>
