<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <nuxt-link
      :to="route"
      class="shadow-md text-center p-3 rounded-md"
      v-for="{ title, image, route } in iphones"
    >
      <h1>{{ title }}</h1>
      <div class="flex justify-center">
        <img class="w-48" :src="image" :alt="title" />
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt 3 - iPhones",
});

const iphones = ref([
  {
    title: "iPhone 13 128GB",
    image: "/images/iphone-13.png",
    route: "iphone/iphone-13-128GB",
  },
  {
    title: "iPhone 11 64GB",
    image: "/images/iphone-11.png",
    route: "iphone/iphone-11-64GB",
  },
  {
    title: "iPhone 15 Pro Max 256GB",
    image: "/images/iphone-15-pro-max.png",
    route: "iphone/iphone-15-PRO-Max-256GB",
  },
  {
    title: "iPhone 15 1286GB",
    image: "/images/iphone-15.png",
    route: "iphone/iphone-15-128GB",
  },
  {
    title: "iPhone 14 512GB",
    image: "/images/iphone-14.png",
    route: "iphone/iphone-14-512GB",
  },
  {
    title: "iPhone 14 Plus 128GB",
    image: "/images/iphone-14-plus.png",
    route: "iphone/iphone-14-Plus-128GB",
  },
  {
    title: "iPhone 14 512GB",
    image: "/images/iphone-14-1.png",
    route: "iphone/iphone-14-512GB",
  },
]);
</script>

<style></style>
