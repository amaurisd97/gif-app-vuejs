<script setup lang="ts">
import GifsContainer from './components/GifsContainer.vue'
import NavBar from './components/NavBar.vue'
import Form from './components/FormInput.vue'
import { provide, ref } from 'vue';

const searchs = ref<string[]>([])

provide('searchValues', searchs)

</script>

<template >
  <NavBar />
  <h1> Hi! </h1>
  <div>
    <Form />
    <GifsContainer />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
