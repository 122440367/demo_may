<template>
    <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
        <h1>Hello</h1>
        <h2>Welcome to the System</h2>
        <el-form-item prop="username" :rules="rules.username">
            <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="UserName"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="rules.password">
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password
                placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default"
                @click="login()">登录</el-button>
        </el-form-item>
    </el-form>




</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus';
import { ref, reactive } from 'vue';
import { reqLogin } from '../../api/user';
let loginForms = ref();
let loginForm = reactive({
    username: '',
    password: ''
});
const valadatorUsername = (rule: any, value: any, callback: any) => {
    if (value.length >= 5) {
        callback();
    } else {
        callback(new Error('账号长度至少为5位'));
    }
}
const validatorPassword = (rule: any, value: any, callback: any) => {
    if (value.length >= 6 && value.length <= 15) {
        callback();
    } else {
        callback(new Error('密码长度在6到15位'));
    }
}

//定义表单验证规则
const rules = {
    //required 字段是否必填
    //min 字段最小长度
    //max 字段最大长度
    //message 错误提示信息
    //trigger 触发方式 blur(失去焦点) change(值改变) submit(提交表单)
    username: [
        // { required: true, min: 6, message: '账号长度至少为6', trigger: 'change' }
        { validator: valadatorUsername, trigger: 'change' }
    ],
    password: [
        // { required: true, min: 6, max: 15, message: '密码长度在6到15位', trigger: 'change' }
        { validator: validatorPassword, trigger: 'change' }
    ]
}

const login = async () => {
    await loginForms.value.validate();

    const result: unknown = await reqLogin(loginForm);

    if (result.code === 200) {

        ElNotification({
            type: 'success',
            message: result.msg,
        })
    } else {
        return Promise.reject(new Error(result.msg));
    }

}
</script>