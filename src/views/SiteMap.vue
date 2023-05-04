<script>
import { defineComponent } from "vue";
import Card from "../components/Card.vue";

export default defineComponent({
    async setup() {
        const blogs = await fetch("/blogs.json").then(res => res.json());
        return {
            blogs
        }
    }
})
</script>

<template>
    
    <h1 class="text-4xl font-black text-white mb-8">Site Map</h1>
    <ul>
        <li v-for="(blog, slug) in blogs" :key="slug"><router-link :to="{ name: 'Post', params: { id: slug }}" class="text-white hover:opacity-50">{{ blog.title }}</router-link></li>
    </ul>

</template>