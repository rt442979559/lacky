<template>
  <div class="LoginForm">
    <a-form-model ref="ruleForm" :model="form" :rules="rules">
      <a-form-model-item prop="username" ref="name">
        <a-input
          v-model="form.username"
          placeholder="请输入您的账户"
          @blur="
            () => {
              $refs.name.onFieldBlur();
            }
          "
        >
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="password" ref="password">
        <a-input
          v-model="form.password"
          placeholder="请输入您的密码"
          type="password"
          @blur="
            () => {
              $refs.password.onFieldBlur();
            }
          "
        >
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          :loading="loading"
          style="width: 100%;background-color: #003A71;border-color:#003A71;"
          @click="toAdmin"
        >
          登录
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import { login } from "@/assets/api/draw";
import { setToken } from "@/assets/axios/token";

export default {
  name: "LoginForm",
  data() {
    return {
      loading: false,
      form: {
        grant_type: "password",
        client_id: 2,
        client_secret: "C1ZhPYuF1NrbMIcbYAbLnCZbKoyMVQvt1rbRQijj",
        username: "郑林飞",
        password: "123456",
        scope: "",
      },
      //==============================================================验证规则==============================================
      rules: {
        username: [
          {
            required: true,
            message: "请输入正确的用户名",
            trigger: ["change", "blur"],
          },
        ],
        password: [
          {
            required: true,
            min: 6,
            message: "密码长度最少为6位数",
            trigger: ["change", "blur"],
          },
        ],
      },
    };
  },
  methods: {
    toAdmin() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.userlogin();
        } else {
          return false;
        }
      });
    },
    userlogin() {
      this.loading = true;
      login(this.form)
        .then((res) => {
          setToken(res.data.access_token);
          this.$router.push("/admin");
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("登录失败");
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<style scoped lang="scss"></style>
