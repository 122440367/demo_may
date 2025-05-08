export const routes = [
    {
        path: '/login',
        component: () => import('../views/login/login.vue'),
        name: 'login',   //命名路由
    },
    {
        path: '/',
        component: () => import('../views/logout.vue'),
        name: 'logout',   //命名路由
    }
]
