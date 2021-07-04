<template>
  <el-container class="home-container">
    <!--头部布局-->
    <el-header>
      <div>
        <img src="../assets/logo.jpg" alt class="logo_img" />
        <span>光伏平台用户</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
	
    <el-container>
      <!--侧边布局-->
      <el-aside :width="isCollapse ?'64px':'200px'">
        <!--伸缩按钮-->
        <div class="toggle-button" >|||</div>
        <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1" disabled>
                <i class="el-icon-plus"></i>
                <span slot="title">增加</span>
              </el-menu-item>
              <el-menu-item index="2"disabled>
                <i class="el-icon-minus"></i>
                <span slot="title">删除</span>
              </el-menu-item>
              <el-menu-item index="3" @click="goTo('/searchuser')">
                <i class="el-icon-document"></i>
                <span slot="title">查询</span>
              </el-menu-item>
              <el-menu-item index="4"disabled>
                <i class="el-icon-setting"></i>
                <span slot="title">修改</span>
              </el-menu-item>
            </el-menu>
			
      </el-aside>
      <router-view></router-view>
    </el-container>

  </el-container>
  
</template>
<script>
export default {
    data() {
        return {
           
            
        }
    },
 
  methods: {
	  handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
		
	goTo(path){
		this.$router.replace(path);
	}
   
   
    
  }
};
</script>
<style lang="less" scoped>
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;// 左右贴边
  padding-left: 0%;// 左边界
  align-items: center;// 水平
  color: #fff;
  font-size: 20px;
  > div { //左侧div加布局
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu{
    border-right: none;// 对其右边框
  }
}
.el-main {
  background-color: #eaedf1;
}
.home-container {
  height: 100%;
}
.logo_img {
  width: 20%;
  height: 100%;
}
.iconfont{
  margin-right: 10px;
}
.toggle-button{
  background-color:#4A5064;
  font-size: 10px;
  line-height: 24px;
  color:#fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;// 显示鼠标指针为：小手
}
</style>