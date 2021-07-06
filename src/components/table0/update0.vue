<template>
  <div class="box">
    <el-form ref="updateFormRef" :inline="true" :model="pname"   label-width="0px">
      <el-form-item prop="pname"style="width: 100px">
        项目名称<el-input v-model="updateForm.pname" placeholder="请输入项目名称" ></el-input>
      </el-form-item>
      <el-form-item prop="ptype"style="width: 100px">
        项目类型<el-input v-model="updateForm.ptype" placeholder="请输入项目类型"  ></el-input>
      </el-form-item>
      <el-form-item prop="pstage"style="width: 100px">
        项目阶段 <el-input v-model="updateForm.pstage" placeholder="请输入项目阶段" ></el-input>
      </el-form-item>
      <el-form-item prop="powner"style="width: 100px">
        项目业主<el-input v-model="updateForm.powner" placeholder="请输入项目业主" ></el-input>
      </el-form-item>
      <el-form-item prop="pgroup"style="width: 100px">
        业主所属集团<el-input v-model="updateForm.pgroup" placeholder="请输入项目业主所属集团" ></el-input>
      </el-form-item>
      <el-form-item prop="pdesigninstitute"style="width: 100px">
        设计单位<el-input v-model="updateForm.pdesigninstitute" placeholder="请输入设计单位" ></el-input>
      </el-form-item>
      <el-form-item prop="pdate">
        日期<el-input v-model="updateForm.pdate" placeholder="请输入日期" ></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="updatesubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updateForm: {
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
    updatesubmit() {
      this.$http.post("project/update",this.updateForm);
    },
  }
}

</script>

<style>
</style>
