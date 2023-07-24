<script setup lang="ts">
import { inject, ref, type Ref } from 'vue'

const search = ref('')

const searchs: Ref<string[]> = inject('searchValues')!

const handleSubmit = () => {
  searchs.value = [search.value, ...searchs.value]
  search.value = ''
}

</script>
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="search" placeholder="Let's find something interesting..." />
  </form>
</template>

<style scoped>
input {
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  width: 250px;
}
</style>
