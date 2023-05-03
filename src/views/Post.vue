<script>
import { defineComponent } from "vue";
export default defineComponent({
    async setup() {
        const blogs = await fetch("https://opticalraze.com/blog/blogs.json").then(res => res.json());
        return {
            blogs
        };
    }
})
</script>

<template>
    
    <div class="text-white">
        <h1 class="text-6xl font-black">{{ blogs[$route.params.id].title }}</h1>
        <h2 class="text-3xl font-bold text-gray-500">{{ blogs[$route.params.id].description }}</h2>
        <h6 class="text-xs text-gray-500"><b>Published: </b>{{ new Date(blogs[$route.params.id].date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</h6>
        <hr class="border-gray-800 my-8">
        <img :src="blogs[$route.params.id].image" alt="" class="w-1/4">
        <div>
            {{ blogs[$route.params.id].content }}
        </div>
    </div>
    
</template>