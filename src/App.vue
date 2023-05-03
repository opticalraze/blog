<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import { onBeforeMount, onMounted, ref } from 'vue';

/*
let blogs = ref(null);

onMounted(async () => {
  const response = await fetch("/blogs.json");
  blogs = await response.json();
});
*/
</script>

<template>
    <Header />
    <main class="min-h-screen bg-gray-900 p-8">
        <div class="container mx-auto">
            <Suspense>
                <template #fallback>
                    <div>loading</div>
                </template>

                <router-view :blogs="blogs" />
            </Suspense>
        </div>
    </main>
    <Footer />
</template>

<script>
/*
export default {
    data() {
        return {
            blogs: null
        }
    },
    onBeforeMount() { 
        async () => {
            const response = await fetch("/blogs.json");
            this.blogs = await response.json();
        } 
    },
}
*/

</script>