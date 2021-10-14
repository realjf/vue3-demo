<template>
    <el-form
    label-width="120px"
    class="container"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input placeholder="Enter Email..." v-model="email" type="email"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="submit-btn" @click="handleForgotPassword()">找回密码</el-button>
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

    setup() {
        const { ref,globalProperties } = useCurrentInstance();
        const email = ref<string>("");

        const handleForgotPassword = async () => {
            const res = await globalProperties.$axios.post("/api/v1/auth/forgotpassword", {email: email.value});
            console.log(res.data);
        }

        return { handleForgotPassword, email }
    }
};
</script>
<style scoped>
/* form */
.container {
    width: 50%;
    margin: 200px auto;
}

.submit-btn {
  width: 100%;
}

</style>