<template>
  <div class="register-form-wrapper">
    <a-button type="primary" long @click="handleChange('loginForm')"
      >忘记</a-button
    >
  </div>
</template>

<script setup lang="ts">
  import { defineEmits } from 'vue';

  const emit = defineEmits(['changeForm']);
  const handleChange = (value: string) => {
    emit('changeForm', value);
  };
</script>

<style scoped lang="less">
  .register-form {
    &-wrapper {
      width: 320px;
    }

    &-title {
      color: var(--color-text-1);
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
    }
  }
</style>
