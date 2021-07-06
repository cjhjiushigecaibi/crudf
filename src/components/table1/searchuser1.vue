
<template>
  <div class="box">
    <el-form>
      <el-form-item prop="sear">
        <el-input v-model="locationName" placeholder="请输入名称查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-serch" @click="getAddressListBylocationName">提交</el-button>
      </el-form-item>
    </el-form>
    <h2>查询结果</h2>
    <!--用户列表  -->
    <el-table :data="[AddresslistbylocationName]" width="3000" border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="位置" prop="locationName"></el-table-column>
      <el-table-column label="安装容量" prop="installCapacity"></el-table-column>
      <el-table-column label="用地面积" prop="landArea"></el-table-column>
      <el-table-column label="海拔高度" prop="alitute"></el-table-column>
      <el-table-column label="纬度" prop="latitude"></el-table-column>
      <el-table-column label="经度" prop="longitude"></el-table-column>
      <el-table-column label="水平太阳总辐射1" prop="totalSolarRadiation1"></el-table-column>
      <el-table-column label="水平太阳总辐射2" prop="totalSolarRadiation2"></el-table-column>
      <el-table-column label="最佳辐射量倾角" prop="raditionAngle"></el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  created() {
    this.getAddressList();
  },
  data() {
    return {
      locationName: "",
      Addresslist: [],
      AddresslistbylocationName: [],
    }
  },
  methods: {
    //获得所有光伏信息
    async getAddressList() {
      const {data: res} = await this.$http.get("address/getAll");
      this.Addresslist = res;
    },
    //根据名字查询
    async getAddressListBylocationName() {
      const {data: res} = await this.$http.get("address/getAddressBylocationName/" + this.locationName).then(response => {
        console.log("success")
        this.AddresslistbylocationName = response.data;
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
