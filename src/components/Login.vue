<!--author:Chen Jiahao-->
<template>
  <div class="login_container">
	  <!--登录块-->
    <div class="login_box">
      <div class="avatar_box">
        <!--头像-->
        <img src="../assets/熊猫头.jpg" alt />
      </div>
      <!--添加表单-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login_form" label-width="0px">
			<el-form-item prop="username">
			  <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
			</el-form-item>
			<el-form-item prop="password">
			  <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock" type="password"></el-input>
			</el-form-item>
			<el-form-item class="btns">
			  <el-button type="primary" @click="login">登录</el-button>
			  <el-button type="info" @click="resetLoginForm">重置</el-button>
			</el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
	  //校验规则
      loginRules: {
        username: [//必填项，信息，失去焦点
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 8, message: "密码为 6~8 位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
	  //重置功能
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
		//console.log(111)控制台测试用
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        // 调用get请求
        const {data :res} = await this.$http.post("login",this.loginForm);
         if (res.flag == "ok" ) {
           window.sessionStorage.setItem('flag','ok'); // session 放置
           this.$message.success("登陆成功！！！");
		   if(res.power)
           this.$router.push({ path: "/home1"});
		   else
		   this.$router.push({ path: "/home0"});
         }else{
          this.$message.error("请输入正确的用户名和密码！！！");
         }
      });
    }
  }
};
</script>

<style lang="less" scoped>

// 根节点样式
.login_container {
  background-image:url(../assets/background.jpg);
  background-color:#2b4b6b ;
  background-repeat:no-repeat;
  background-position:center;
  height:100%;
}
// 登录框
.login_box {
  width: 250px;
  height: 300px;
  background-color: transparent;
  position: absolute;// 绝对定位
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);// 根据自己位置 以自己为长度位移
  // 头像框
  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%; // 加圆角
    padding: 10px;
    box-shadow: 0 0 10px #ddd;// 盒子阴影
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #0ee;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%; // 加圆角
      background-color: #eee;
    }
  }
  .btns {
    display: flex;// 弹性布局
    justify-content: space-around; // 居中
  }
  .login_form {
    position: absolute;
    bottom: 0%;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box; // 设置边框
  }
}
</style>