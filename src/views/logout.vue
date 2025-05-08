<template>

456

</template>


<script setup lang="ts">
import { onMounted } from 'vue'


onMounted(() => {
    const token = localStorage.getItem('token')
    if (!token) {
        window.location.href = '/login'
    }
})
</script>