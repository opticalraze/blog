import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Post from '../views/Post.vue';
import About from '../views/About.vue';
import SiteMap from '../views/SiteMap.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/post/:id', name: 'Post', component: Post },
    { path: '/about', name: 'About', component: About },
    { path: '/sitemap', name: 'SiteMap', component: SiteMap }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router