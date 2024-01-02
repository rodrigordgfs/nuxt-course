<template>
  <button @click="increment">Increment</button>
  <p>{{ count }}</p>
  <button @click="decrement">Decrement</button>
</template>

<script setup>
const count = ref(0);

const increment = () => {
  if (count.value === 10) {
    alert("You've reached the maximum number of votes!");
  } else {
    count.value++;
  }
};

const decrement = () => {
  if (count.value === 0) {
    alert("You've reached the minimum number of votes!");
  } else {
    count.value--;
  }
};
</script>

<style lang="scss" scoped></style>
