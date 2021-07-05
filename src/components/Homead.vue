<template>
  <el-container class="home-container">
    <!--头部布局-->
    <el-header>
      <div>
        <img src="../assets/logo.jpg" alt class="logo_img" />
        <span>光伏平台管理员</span>
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
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>项目概况</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="goTo('/add0')">增加</el-menu-item>
              <el-menu-item index="1-2" @click="goTo('/dele0')">删除</el-menu-item>
              <el-menu-item index="1-3" @click="goTo('/searchad0')">查询</el-menu-item>
              <el-menu-item index="1-4" @click="goTo('/update0')">修改</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>场址概况</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="goTo('/add1')">增加</el-menu-item>
              <el-menu-item index="1-2" @click="goTo('/dele1')">删除</el-menu-item>
              <el-menu-item index="1-3" @click="goTo('/searchad1')">查询</el-menu-item>
              <el-menu-item index="1-4" @click="goTo('/update1')">修改</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>主要气象特征要素</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="goTo('/add2')">增加</el-menu-item>
              <el-menu-item index="1-2" @click="goTo('/dele2')">删除</el-menu-item>
              <el-menu-item index="1-3" @click="goTo('/searchad2')">查询</el-menu-item>
              <el-menu-item index="1-4" @click="goTo('/update2')">修改</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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