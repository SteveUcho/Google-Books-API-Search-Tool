<template>
  <div class="container book-search">
    <h1 class="page-title">Book Search</h1>
    <SearchBar />
    <SearchResults />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import SearchResults from '@/components/SearchResults.vue';

export default defineComponent({
  name: 'BookSearchView',
  components: {
    SearchBar,
    SearchResults,
  },
});
</script>
