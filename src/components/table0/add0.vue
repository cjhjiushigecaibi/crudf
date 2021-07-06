<template>
  <div class="box">
    <el-form ref="addFormRef" :inline="true" :model="pname"   label-width="0px" >
      <el-form-item prop="pname"  style="width: 100px">
        项目名称<el-input v-model="addForm.pname" placeholder="请输入项目名称" ></el-input>
      </el-form-item>
      <el-form-item prop="ptype" style="width: 100px">
        项目类型 <el-input v-model="addForm.ptype" placeholder="请输入项目类型"  ></el-input>
      </el-form-item>
      <el-form-item prop="pstage" style="width: 100px">
        项目阶段<el-input v-model="addForm.pstage" placeholder="请输入项目阶段" ></el-input>
      </el-form-item>
      <el-form-item prop="powner"style="width: 100px">
        项目业主<el-input v-model="addForm.powner" placeholder="请输入项目业主" ></el-input>
      </el-form-item>
      <el-form-item prop="pgroup"style="width: 100px">
        业主所属集团<el-input v-model="addForm.pgroup" placeholder="请输入项目业主所属集团" ></el-input>
      </el-form-item>
      <el-form-item prop="pdesigninstitute" style="width: 100px">
        设计单位<el-input v-model="addForm.pdesigninstitute" placeholder="请输入设计单位" ></el-input>
      </el-form-item>
      <el-form-item prop="pdate" >
        日期<el-input v-model="addForm.pdate" placeholder="请输入日期" ></el-input>
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
      addForm: {
        pname:"",
        ptype:"",
        pstage:"",
        powner:"",
        pgroup:"",
        pdesigninstitute:"",
        pdate:"",
      },
    }
  },
  methods:{
    submit(){
      this.$http.post("project/add", this.addForm);
    },
}
   
      
}
</script>

<style>
.box{

  padding-left: 20px;
}

</style>
