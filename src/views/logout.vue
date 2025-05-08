<template>

登录成功

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
</script>