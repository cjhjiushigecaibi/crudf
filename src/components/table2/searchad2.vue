<template>
	<div class="box">
    <el-form>
    <el-form-item prop="sear">
		<el-input v-model="input" placeholder="请输入名称查询"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="">提交</el-button>
    </el-form-item>
    </el-form>
	<h2>主要气象特征要素结果如下</h2>
	<router-view></router-view><!--结果展示-->
	</div>
	
</template>

<script>
	export default {
	  data() {
	    return {
	      input: ''
	    }
	  }
	}
</script>

<style>
.box{
	width: 250px;
	height: 300px;
	padding-top: 20px;
	padding-left: 20px;
}
</style>
