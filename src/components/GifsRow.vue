<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import useFetch from '../hook/useFetch'

const props = defineProps<{ searchParams: string }>()
const data = ref()

watchEffect(
  async () => {
    data.value = await useFetch(props.searchParams)
  })

</script>

<template>
  <p>{{ searchParams }}</p>

  <ul v-if="data" class="container">
    <li v-for="gifs in data.data" :key="gifs.id">
      <img :src="gifs.images.fixed_height_downsampled.url" :alt="gifs.title">
    </li>
  </ul>
  <ul v-else>Loading...</ul>
</template>

<style scoped>
.container {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

p {
  text-align: center;
}

li {
  height: 150px;
  width: 150px;
  border: 1px solid gray;
  border-radius: 10px;
  list-style: none;
  margin: 10px;
}

img {
  height: 150px;
  width: 150px;
  border-radius: 10px;
}
</style>