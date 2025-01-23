<script lang="ts" setup>
import router from '@/router'
import { ref } from 'vue'

const valid = ref(false)
const username = ref('')
const password = ref('')

const usernameRules = [
  (v: string) => !!v || 'Username is required',
  (v: string) => v.length >= 3 || 'Username must be at least 3 characters',
]

const pwdRules = [
  (v: string) => !!v || 'Password is required',
  (v: string) => v.length >= 6 || 'Password must be at least 6 characters',
]

const submitForm = () => {
  if (valid.value) {
    console.log('Username:', username.value)
    console.log('Password:', password.value)
  } else {
    router.push('/admin/achievements')
    console.log('Form is invalid')
  }
}
</script>

<template>
  <div class="container">
    <v-form v-model="valid" @submit.prevent="submitForm">
      <v-container width="400">
        <v-row>
          <h1 style="margin-bottom: 12px">Login</h1>
        </v-row>
        <v-row>
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Username"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="password"
            :rules="pwdRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-btn class="mt-2" block @click="submitForm">Login</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  height: 100vh;
  width: 100%;
}

.v-form {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 32px;
  color: #333;
}

.v-text-field {
  margin-bottom: 16px;
}
</style>
