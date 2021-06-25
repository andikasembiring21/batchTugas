import { createRouter , createWebHistory } from 'vue-router'; 

const routes = [
    {
        path : '/tugas4',
        name:'tampilan.tugas4',
        component:()=> import('../../src/views/tampilan/tugas4.vue')
    },
    {
        path: '/tugas2',
        name:'tampilan.tugas2',
        component:()=> import('../../src/views/tampilan/tugas2.vue')
    },
    {
        path: '/tugas3',
        name:'tampilan.tugas3',
        component:()=> import('../../src/views/tampilan/tugas3.vue')
    },
    {
        path: '/dftruser',
        name:'tampilan.dftruser',
        component:()=> import('../../src/views/tampilan/dftruser.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;