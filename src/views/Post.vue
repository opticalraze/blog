<script>
import { defineComponent } from "vue";

import showdown from "showdown";

export default defineComponent({
    async setup() {
        const blogs = await fetch("/blogs.json").then(res => res.json());

        //var showdown  = require('showdown'),
        const converter = new showdown.Converter();
        const text = `1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses`;
        const html = converter.makeHtml(text);

        return {
            blogs,
            html
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
        <div class="markdown" v-html="html"></div>
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