
<template>
  <div class="box">
    <el-form>
      <el-form-item prop="lname">
        <el-input v-model="lname" placeholder="请输入名称删除"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='button' @click="deladdressListBylname">删除</el-button>
      </el-form-item>
    </el-form>
    <!--用户列表  -->
    <el-table :data="addresslist" width="3000"  border stripe>
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
    <router-view></router-view><!--结果展示-->
  </div>

</template>


<script>
export default {
  created(){
    this.getaddressList();
    this.deladdressListBylname()
  },
  data() {
    return {
      lname:"",
      addresslist:[],
    }
  },
  methods: {
    //获取全部气象特征数据
    async getaddressList(){
      const {data:res} = await this.$http.get("address/getAll");
      this.addresslist=res;
    },
    //位置删除address
    async deladdressListBylname() {

      this.$http.get("address/delete/"+this.lname);
    },
  }
}
</script>

<style>
.box{

  padding-left: 20px;
}
</style>
