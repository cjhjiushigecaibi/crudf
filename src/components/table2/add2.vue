<template>
	<div class="box">
		<el-form ref="loginFormRef" :model="loginForm"   label-width="0px">
					<el-form-item prop="locPV">
					  <el-input v-model="loginForm.locPV" placeholder="请输入名称" ></el-input>
					</el-form-item>
					<el-form-item prop="AVG_Tem_year">
					  <el-input v-model="loginForm.AVG_Tem_year" placeholder="请输入多年平均气温"  ></el-input>
					</el-form-item>
					<el-form-item prop="MAX_Tem_year">
					  <el-input v-model="loginForm.MAX_Tem_year" placeholder="请输入极端最高气温" ></el-input>
					</el-form-item>
					<el-form-item prop="Min_Tem_year">
					  <el-input v-model="loginForm.Min_Tem_year" placeholder="请输入极端最低气温" ></el-input>
					</el-form-item>
					<el-form-item prop="AVG_Tem_Hotmonth">
					  <el-input v-model="loginForm.AVG_Tem_Hotmonth" placeholder="请输入最热月平均气温" ></el-input>
					</el-form-item>
					<el-form-item prop="MAX_Soil_Depth">
					  <el-input v-model="loginForm.MAX_Soil_Depth" placeholder="请输入多年最大冻土深度" ></el-input>
					</el-form-item>
						<el-form-item prop="AVG_Windspeed_year">
						  <el-input v-model="loginForm.AVG_Windspeed_year" placeholder="请输入多年平均风速" ></el-input>
						</el-form-item>
							<el-form-item prop="MAX_Windspeed_year">
							  <el-input v-model="loginForm.MAX_Windspeed_year" placeholder="请输入多年极大风速" ></el-input>
							</el-form-item>
								<el-form-item prop="AVG_Thunderstormday_year">
								  <el-input v-model="loginForm.AVG_Thunderstormday_year" placeholder="请输入多年平均雷暴日数" ></el-input>
								</el-form-item>
									<el-form-item prop="Filthy_Level">
									  <el-input v-model="loginForm.Filthy_Level" placeholder="请输入污秽等级" ></el-input>
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
			    locPV:"",
          AVG_Tem_year: "",
	        MAX_Tem_year: "",
			    Min_Tem_year: "",
			    AVG_Tem_Hotmonth:"",
          MAX_Soil_Depth:"",
          AVG_Windspeed_year:"",
          MAX_Windspeed_year:"",
          AVG_Thunderstormday_year:"",
          Filthy_Level:"",
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
