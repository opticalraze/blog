<script>
import { defineComponent } from "vue";
import Card from "../components/Card.vue";
export default defineComponent({
    async setup() {
        const blogs = await fetch("/blogs.json").then(res => res.json());
        return {
            blogs
        };
    },
    components: { Card }
})
</script>

<template>
    
    <div class="grid grid-cols-3 gap-8">
        <Card v-for="(blog, slug) in blogs" :key="slug" :image="blog.image" :title="blog.title" :description="blog.description" :slug="slug" />
    </div>

</template>