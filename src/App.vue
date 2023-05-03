<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>

        <Suspense>

            <template #fallback>
                <div class="h-screen flex items-center justify-center text-4xl font-bold text-white">loading</div>
            </template>

            <div>
                <Header />
      
                <main class="min-h-screen bg-gray-800 p-8">
                    <div class="container mx-auto">
                        <router-view />
                    </div>
                </main>

                <Footer />
            </div>

        </Suspense>



</template>
