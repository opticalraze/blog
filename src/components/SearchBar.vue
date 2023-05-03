<script>
import { defineComponent, onMounted } from 'vue';
import SearchIcon from '../icons/Search.vue';

export default defineComponent({
    async setup() {
        const blogs = await fetch("/blogs.json").then(res => res.json());
        return {
            blogs
        };
    },
    mounted() {
        console.log('hello')
        console.log(this.$refs.form);

        let input = 0;

        console.log(this.$refs.searchResults.childNodes.length);

        this.$refs.form.addEventListener('submit', (e) => {
            e.preventDefault();
        })

        this.$refs.form.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();

                if (input > this.$refs.searchResults.childNodes.length - 3) {
                    input = 0
                    this.$refs.searchBar.focus();
                } else {
                    input++;
                    this.$refs.searchResults.childNodes[input].focus()
                }

            } else if (e.key === 'ArrowUp') {

                e.preventDefault();

                if (input < 0) {
                    input = this.$refs.searchResults.childNodes.length - 3
                    this.$refs.searchResults.childNodes[input].focus()
                } else {
                    input--;
                    this.$refs.searchBar.focus()
                }

            }
        })

    },
    data() {
        return {
            query: ""
        }
    },
    components: { SearchIcon }
})

</script>

<template>

    <form class="flex items-center group w-96" ref="form">
        <label for="search" class="pl-4 py-3 bg-gray-700 border border-r-0 border-gray-600 text-gray-400 rounded-l-2xl cursor-text group-focus-within:bg-gray-600 group-hover:bg-gray-600 group-focus-within:rounded-b-none"><SearchIcon class="h-4 w-4" /></label>
        <input ref="searchBar" v-model="query" type="text" id="search" autocomplete="off" placeholder="Search" class="flex-grow px-4 py-2 rounded-r-2xl bg-gray-700 border border-l-0 border-gray-600 group-focus-within:bg-gray-600 group-hover:bg-gray-600 focus:ring-0 focus:border-gray-600 focus:outline-none group-focus-within:rounded-b-none">
        <div ref="searchResults" class="hidden group-focus-within:block bg-gray-600 absolute top-14 w-96 py-2 rounded-b-2xl">
            <router-link v-for="(blog, slug) in blogs" :key="slug" :to="{ name: 'Post', params: { id: slug }}" v-show="slug.includes(query)" to="test" class="block p-4 focus:bg-gray-700">
                {{ blog.title }}
            </router-link>
        </div>
    </form>

</template>