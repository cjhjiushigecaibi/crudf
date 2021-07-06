
<template>
  <div class="box">
    <el-form>
      <el-form-item prop="sear">
        <el-input v-model="lname" placeholder="请输入名称查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-serch" @click="getAddressListBylname">提交</el-button>
      </el-form-item>
    </el-form>
    <h2>查询结果</h2>
    <!--用户列表  -->
    <el-table :data="[Addresslistbylname]" width="3000" border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="位置" prop="lname"></el-table-column>
      <el-table-column label="安装容量" prop="installcapacity"></el-table-column>
      <el-table-column label="用地面积" prop="landarea"></el-table-column>
      <el-table-column label="海拔高度" prop="alitute"></el-table-column>
      <el-table-column label="纬度" prop="latitude"></el-table-column>
      <el-table-column label="经度" prop="longitude"></el-table-column>
      <el-table-column label="水平太阳总辐射1" prop="totalsolarradiation1"></el-table-column>
      <el-table-column label="水平太阳总辐射2" prop="totalsolarradiation2"></el-table-column>
      <el-table-column label="最佳辐射量倾角" prop="raditionangle"></el-table-column>
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
      lname: "",
      Addresslist: [],
      Addresslistbylname: [],
    }
  },
  methods: {
    //获得所有光伏信息
    async getAddressList() {
      const {data: res} = await this.$http.get("address/getAll");
      this.Addresslist = res;
    },
    //根据名字查询
    async getAddressListBylname() {
      const {data: res} = await this.$http.get("address/getAddressBylname/" + this.lname).then(response => {
        console.log("success")
        this.Addresslistbylname = response.data;
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
