import Vue from 'vue';
import Router from 'vue-router';
import Registr from '@/components/Auth/Register';
import Home from '@/components/Home';


Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/api/user/register',
            name:'registr',
            component:Registr
        }
    ]
});