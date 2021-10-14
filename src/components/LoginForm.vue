<template>
    <el-form :model="loginUser" :rules="rules" ref="loginForm"
    label-width="120px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input
      placeholder="Enter Email..." v-model="loginUser.email"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        placeholder="Enter Password..."  v-model="loginUser.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="submit-btn" @click="handleLogin('loginForm')">登录</el-button>
      <div class="tiparea">
          <p>忘记密码？ <a @click.prevent="handleForgot">立即找回</a></p>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import useCurrentInstance from "@/hooks/useCurrentInstance";
export default {
    props: {
        loginUser: {
            type: Object,
            requred: true,
        },
        rules: {
            type: Object,
            requred: true,
        }
    },

    setup(props: any) {
        
        const { globalProperties,proxy } = useCurrentInstance();
        const router = useRouter();
        console.log(proxy);
        const handleLogin = (formName: string) => {
            proxy.$refs[formName].validate((valid: boolean) => {
                if(valid){
                     globalProperties.$axios.post("/api/v1/auth/login", props.loginUser)
                    .then((res:any) => {
                        console.log(res.data);
                        alert("sumit");
                            // 注册成功
                        globalProperties.$message({
                            message: "登录成功",
                            type: "success",
                        });

                        // 路由跳转
                        router.push("/");
                    }).catch((err: any) => {
                        console.log(err);
                        alert("error");
                    });
                }else{
                    console.log("error submit!");
                    return false;
                }
            })
        }

        const handleForgot = () => {
          router.push("/forgotpassword");
        }

        return { handleLogin, handleForgot }
    }
};
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
  cursor: pointer;
}

</style>