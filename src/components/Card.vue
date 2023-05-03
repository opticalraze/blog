<script setup>

defineProps({
    image: String,
    title: String,
    description: String,
    slug: String
});

</script>

<template>
    <router-link :to="{ name: 'Post', params: { id: slug }}" class="bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 rounded-xl">
        <img :src="image" alt="" class="rounded-t-xl">
        <div class="p-4">
            <h3 class="text-2xl font-black">{{ title }}</h3>
            <p class="text-gray-400">{{ description }}</p>
        </div>
    </router-link>
</template>