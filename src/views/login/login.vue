<template>
    <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">

        <el-form-item prop="username" :rules="rules.username">
            <el-input v-model="loginForm.username" placeholder="UserName"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="rules.password">
            <el-input type="password" v-model="loginForm.password"  placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button  class="login_btn" type="primary" size="default"
                @click="login()">登录</el-button>
        </el-form-item>
    </el-form>




</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus';
import { ref, reactive } from 'vue';
import { reqLogin } from '../../api/user';
import { useRouter } from 'vue-router';

let router = useRouter();
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
    console.log(result);
    if (result.code === 200) {
        localStorage.setItem('token', result.data);
        router.push('/');
    } else {
        return Promise.reject(new Error(result.msg));
    }

}
</script>