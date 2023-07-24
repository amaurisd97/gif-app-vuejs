
<script setup lang="ts">
import GifsRow from './GifsRow.vue';
import { inject, type Ref } from 'vue';

const searchs: Ref<string[]> = inject('searchValues')!

</script>
<template>
  <ul v-for="(search, index) in searchs" :key="index">
    <Suspense>
      <GifsRow :search-params="search" />
    </Suspense>
  </ul>
</template>