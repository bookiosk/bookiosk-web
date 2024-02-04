<template>
  <div class="container">
    <div class="logo">
      <img alt="logo" src="/src/assets/png.ico" height="30" width="30" />
      <div class="logo-text" style="padding-left: 10px">Book Kiosk Pro</div>
    </div>
    <!--  引入登录导航栏组件  -->
    <LoginBanner />
    <div class="content">
      <div class="content-inner">
        <LoginForm
          v-show="currentForm === 'loginForm'"
          @change-form="changeForm"
        />
        <RegisterForm
          v-show="currentForm === 'registerForm'"
          @change-form="changeForm"
        />
        <ForgetForm
          v-show="currentForm === 'forgetForm'"
          @change-form="changeForm"
        />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Footer from '@/components/footer/index.vue';
  import { ref } from 'vue';
  import ForgetForm from '@/views/home/components/forget-form.vue';
  import LoginBanner from './components/banner.vue';
  import LoginForm from './components/login-form.vue';
  import RegisterForm from './components/register-form.vue';

  const currentForm = ref('loginForm');

  // eslint-disable-next-line func-names
  const changeForm = function (formName: string) {
    currentForm.value = formName;
  };
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    height: 100vh;

    .banner {
      width: 550px;
      background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
    }

    .content {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      padding-bottom: 40px;
    }

    .footer {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
    }
  }

  .logo {
    position: fixed;
    top: 24px;
    left: 22px;
    z-index: 1;
    display: inline-flex;
    align-items: center;

    &-text {
      margin-right: 4px;
      margin-left: 4px;
      color: var(--color-fill-1);
      font-size: 20px;
    }
  }
</style>

<style lang="less" scoped>
  // responsive
  @media (max-width: @screen-lg) {
    .container {
      .banner {
        width: 25%;
      }
    }
  }
</style>
