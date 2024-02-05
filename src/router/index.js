import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import AppLayout from "@/components/AppLayout.vue";
import Home from "@/views/Home.vue";
import Post from "@/views/Post.vue";
import Posts from "@/views/Posts.vue";
import AuthLayout from "@/components/AuthLayout.vue";
import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";
import {useStoreAuth} from "@/stores/useStoreAuth.js";

const routes = [
    {
        path: '/',
        name: 'app',
        component: AppLayout,
        children : [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/posts',
                name: 'posts',
                component: Posts,
            },
            {
                path: '/post/:id',
                name: 'post',
                component: Post,
            },
        ],
    },
    {
        path: '/auth',
        name: 'auth',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login,
            },
            {
                path: '/register',
                name: 'register',
                component: Register,
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach(async (to, from) => {
    const soreAuth = useStoreAuth()
    if (!soreAuth.user.id && to.name !== 'login') { // if the user is not legged in and try to go somewhere else other than login
        // redirect the user to the login page
        return { name: 'auth' }
    }
    if(soreAuth.user.id && to.name === 'login') {
        return false
    }
})

export default router