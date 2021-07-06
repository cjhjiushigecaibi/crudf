<template>
	<div class="box">
		<el-form ref="loginFormRef" :model="name"   :inline="true" label-width="0px">
					<el-form-item prop="name"style="width: 100px">
            名称<el-input v-model="loginForm.name" placeholder="请输入名称" ></el-input>
					</el-form-item>
					<el-form-item prop="avgTemperature"style="width: 100px">
            多年平均气温<el-input v-model="loginForm.avgTemperature" placeholder="请输入多年平均气温"  ></el-input>
					</el-form-item>
					<el-form-item prop="lowestTemperature"style="width: 100px">
            极端最低气温<el-input v-model="loginForm.lowestTemperature" placeholder="请输入极端最低气温" ></el-input>
					</el-form-item>
      <el-form-item prop="highestTemperature"style="width: 100px">
        极端最高气温<el-input v-model="loginForm.highestTemperature" placeholder="请输入极端最高气温" ></el-input>
      </el-form-item>
					<el-form-item prop="avgTemperatureInHottest"style="width: 100px">
            最热月平均气温<el-input v-model="loginForm.avgTemperatureInHottest" placeholder="请输入最热月平均气温" ></el-input>
					</el-form-item>
					<el-form-item prop="maxFrozenDepth"style="width: 100px">
            最大冻土深度<el-input v-model="loginForm.maxFrozenDepth" placeholder="请输入多年最大冻土深度" ></el-input>
					</el-form-item>
						<el-form-item prop="avgWindSpeed"style="width: 100px">
              多年平均风速<el-input v-model="loginForm.avgWindSpeed" placeholder="请输入多年平均风速" ></el-input>
						</el-form-item>
							<el-form-item prop="maxWindSpeed"style="width: 100px">
                多年极大风速<el-input v-model="loginForm.maxWindSpeed" placeholder="请输入多年极大风速" ></el-input>
							</el-form-item>
								<el-form-item prop="avgThunderstorm"style="width: 100px">
                  平均雷暴日数<el-input v-model="loginForm.avgThunderstorm" placeholder="请输入多年平均雷暴日数" ></el-input>
								</el-form-item>
									<el-form-item prop="pollutionGrade"style="width: 100px">
                    污秽等级<el-input v-model="loginForm.pollutionGrade" placeholder="请输入污秽等级" ></el-input>
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
	      loginForm: {
			    name:"",
          avgTemperature: "",
			    lowestTemperature: "",
          highestTemperature: "",
			    avgTemperatureInHottest:"",
          maxFrozenDepth:"",
          avgWindSpeed:"",
          maxWindSpeed:"",
          avgThunderstorm:"",
          pollutionGrade:"",
	      },
		}
	},
    methods:{
     submit() {
        this.$http.post("element/add", this.loginForm);
      },
    }
}

</script>

<style>
	.box{
		
		padding-left: 20px;
	}
	
</style>
