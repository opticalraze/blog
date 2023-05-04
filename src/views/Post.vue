<script>
import { defineComponent } from "vue";

export default defineComponent({
    async setup() {
        const blogs = await fetch("/blogs.json").then(res => res.json());
        return {
            blogs
        };
    },
    mounted() {
        
    }
})
</script>

<template>
    
    <div class="text-white">
        <div class="flex justify-center">
            <div>
                <h1 class="text-6xl font-black">{{ blogs[$route.params.id].title }}</h1>
                <h2 class="text-3xl font-bold text-gray-500">{{ blogs[$route.params.id].description }}</h2>
                <h6 class="text-xs text-gray-500"><b>Published: </b>{{ new Date(blogs[$route.params.id].date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</h6>
            </div>
        </div>
        <hr class="border-gray-700 my-8">
        <div class="text-center">
            <img :src="blogs[$route.params.id].image" alt="" class="w-1/3 inline-block">
        </div>
        
    </div>
    
</template>

<style>
.markdown h1 {
    @apply text-6xl font-black;
}
.markdown h2 {
    @apply text-3xl font-bold text-gray-500;
}
</style>