<script setup lang="ts">
import { ref } from 'vue'
import Gifs from './GifsRow.vue'
const search = ref('')
const searchs = ref<string[]>([])
const handleSubmit = () => {
  searchs.value.unshift(search.value)
  search.value = ''
}

</script>
<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="search" placeholder="Let's find something interesting..." />
    </form>

    <ul v-for="(element, index) in searchs" :key="index">
      <Suspense>
        <Gifs :search-params="element" />
      </Suspense>
    </ul>

  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  width: 250px;
}
</style>
