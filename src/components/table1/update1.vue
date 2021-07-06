
<template>
  <div class="box">
    <el-form ref="updateFormRef" :inline="true" :model="locationName"   label-width="0px">
      <el-form-item prop="locationName"style="width: 100px">
        位置<el-input v-model="updateForm.locationName" placeholder="请输入位置" ></el-input>
      </el-form-item>
      <el-form-item prop="installCapacity"style="width: 100px">
        安装容量 <el-input v-model="updateForm.installCapacity" placeholder="请输入安装容量"  ></el-input>
      </el-form-item>
      <el-form-item prop="landArea"style="width: 100px">
        用地面积<el-input v-model="updateForm.landArea" placeholder="请输入用地面积" ></el-input>
      </el-form-item>
      <el-form-item prop="alitute"style="width: 100px">
        海拔高度<el-input v-model="updateForm.alitute" placeholder="请输入海拔高度" ></el-input>
      </el-form-item>
      <el-form-item prop="latitude"style="width: 100px">
        纬度<el-input v-model="updateForm.latitude" placeholder="请输入纬度" ></el-input>
      </el-form-item>
      <el-form-item prop="longitude"style="width: 100px">
        经度<el-input v-model="updateForm.longitude" placeholder="请输入经度" ></el-input>
      </el-form-item>
      <el-form-item prop="totalSolarRadiation1"style="width: 100px">
        水平太阳总辐射1<el-input v-model="updateForm.totalSolarRadiation1" placeholder="请输入水平太阳总辐射1" ></el-input>
      </el-form-item>
      <el-form-item prop="totalSolarRadiation2"style="width: 100px">
        水平太阳总辐射2<el-input v-model="updateForm.totalSolarRadiation2" placeholder="请输入水平太阳总辐射2" ></el-input>
      </el-form-item>
      <el-form-item prop="raditionAngle">
        最佳辐射量倾角<el-input v-model="updateForm.raditionAngle" placeholder="请输入最佳辐射量倾角" ></el-input>
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
        locationName:"",
        installCapacity:"",
        landArea:"",
        alitute:"",
        latitude:"",
        longitude:"",
        totalSolarRadiation1:"",
        totalSolarRadiation2:"",
        raditionAngle:"",
      },
    }
  },
  methods:{
    updatesubmit() {
      this.$http.post("address/update",this.updateForm);
    },
  }
}

</script>

<style>
</style>
