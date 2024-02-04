<template>
  <div class="register-form-wrapper">
    <a-form
      :model="form"
      style="width: 300px"
      :rules="rules"
      @submit="handleSubmit"
    >
      <a-form-item field="email" label="email">
        <a-input
          v-model="form.email"
          placeholder="please enter your email..."
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" long html-type="submit">获取验证码</a-button>
      </a-form-item>
    </a-form>
    <a-modal v-model:visible="visible" title="Modal Form"></a-modal>
  </div>
</template>

<script setup lang="ts">
  import { defineEmits, ref } from 'vue';
  import { ValidatedError } from '@arco-design/web-vue/es/form/interface';

  const emit = defineEmits(['changeForm']);
  const visible = ref(false);
  const form = ref({ email: '' });
  // 表单校验规则
  const rules = {
    email: [
      {
        type: 'email',
        required: true,
      },
    ],
  };
  const handleSubmit = async ({
    errors,
    values,
  }: {
    errors: Record<string, ValidatedError> | undefined;
    values: Record<string, any>;
  }) => {
    if (errors) return;
    visible.value = true;
    // emit('changeForm', 'loginForm');
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
