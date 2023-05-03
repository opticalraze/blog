<script setup>
import SearchBar from './SearchBar.vue';

</script>

<template>
    <header class="bg-gray-800 border-b border-gray-700 text-gray-100 px-8 py-4">
        <div class="container mx-auto flex items-center justify-between">
            <div class="flex items-center w-64">
                <a href="https://opticalraze.com" class="flex items-center font-bold text-2xl pr-4 mr-4 border-r border-gray-700">Optical Raze</a>
                <router-link to="/" class="flex items-center font-bold text-2xl">Blog</router-link>
            </div>
            <nav>
                <!--
                <router-link to="/" class="hover:text-gray-500 mx-2">Home</router-link>
                <router-link to="/popular" class="hover:text-gray-500 mx-2">Popular</router-link>
                <router-link to="/trending" class="hover:text-gray-500 mx-2">Trending</router-link>
                <router-link to="/about" class="hover:text-gray-500 mx-2">About</router-link>
                -->
            </nav>
            <SearchBar />
        </div>
    </header>
</template>