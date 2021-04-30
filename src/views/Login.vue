<template>
  <div class="Login">
    <div class="login_box">
      <img src="@/assets/floer.svg" alt="" width="100%">
      <LoginForm />
    </div>
  </div>
</template>

<script>
  import LoginForm from '@/components/LoginForm'
  export default {
    name: 'Login',
    components: {
      LoginForm
    }
  }
</script>

<style scoped lang="scss">
  .Login {
    height: 100vh;
    background-color: #2585a6;
    display: flex;
    justify-content: center;
    align-items: center;

    .login_box {
      width: 400px;
      min-height: 400px;
      background-color: rgba(255, 255, 255, .5);
      border-radius: 8px;

      img {
        position: relative;
        top: -200px;
      }

      .LoginForm{
        margin: -200px 15px 0;
      }
    }

  }
</style>