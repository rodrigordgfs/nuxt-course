<template>
  <div class="flex flex-row gap-2">
    <div v-for="{ title, image } in iphones">
      <h1>{{ title }}</h1>
      <img class="w-48" :src="image" :alt="title" />
    </div>
  </div>
</template>

<script setup>
const iphones = ref([
  {
    title: "iPhone 13 128GB",
    image: "/images/iphone-13.png",
  },
  {
    title: "iPhone 11 64GB",
    image: "/images/iphone-11.png",
  },
  {
    title: 'iPhone 15 Pro Max 256GB',
    image: '/images/iphone-15-pro-max.png'
  },
  {
    title: 'iPhone 15 1286GB',
    image: '/images/iphone-15.png'
  },
  {
    title: 'iPhone 14 512GB',
    image: '/images/iphone-14.png'
  },
  {
    title: 'iPhone 14 Plus 128GB',
    image: '/images/iphone-14-plus.png'
  },
  {
    title: 'iPhone 14 512GB',
    image: '/images/iphone-14-1.png'
  }
]);
</script>

<style></style>
