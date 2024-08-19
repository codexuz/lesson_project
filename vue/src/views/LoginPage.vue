<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const loading = ref(false)

const formState = ref({
    username: '',
    password: '',
    remember: false
});

function onFinish(values) {
  loading.value = true
  
  setTimeout(()=> {
    loading.value = false;
    router.push('/');
  }, 1500)

  console.log('Success ', values)
}

function onFinishFailed(errorInfo) {
  console.log('Error ', errorInfo)
}
</script>

<template>
  <div class="container">
    <a-form
    class="login"
    :model="formState"
    name="basic"
    autocomplete="off"
    @finish="onFinish"
    layout="vertical"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit" block="true" :loading="loading">Log In</a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<style scoped>

.container{
 width: 80%;
 margin: 0 10%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 100vh;
}

.login{
  width: 400px;
  display: block;
}
</style>