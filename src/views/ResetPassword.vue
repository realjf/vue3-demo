<template>
    <el-form
    label-width="120px"
    class="container"
  >
    <el-form-item label="密码" prop="password">
      <el-input placeholder="Enter password..." v-model="password" type="password"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="submit-btn" @click="handleResetPassword()">找回密码</el-button>
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
        const password = ref<string>("");
        const router = useRouter();


        const handleForgotPassword = async () => {
            const res = await globalProperties.$axios.post("/api/v1/auth/resetpassword/" + router.params.id, {password: password.value});
            console.log(res.data);

            if (res.data.success) {
                router.push("/");
            }
        }

        return { handleForgotPassword, password }
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