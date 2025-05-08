<template>

    登录成功

    <el-button type="primary" @click="logout()"> 退出登录</el-button>
</template>


<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
    const token = localStorage.getItem('token')
    if (!token) {
        router.push('/login')
    }
})


const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
}
</script>