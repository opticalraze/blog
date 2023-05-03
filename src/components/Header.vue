<script setup>
import SearchIcon from '../icons/Search.vue';
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
            <form class="flex items-center group w-64">
                <label for="search" class="pl-4 py-3 bg-gray-700 border border-r-0 border-gray-600 text-gray-400 rounded-l-2xl cursor-text group-focus-within:bg-gray-600 group-hover:bg-gray-600"><SearchIcon class="h-4 w-4" /></label>
                <input type="text" id="search" autocomplete="off" placeholder="Search" class="flex-grow px-4 py-2 rounded-r-2xl bg-gray-700 border border-l-0 border-gray-600 group-focus-within:bg-gray-600 group-hover:bg-gray-600 focus:ring-0 focus:border-gray-600 focus:outline-none">
            </form>
        </div>
    </header>
</template>