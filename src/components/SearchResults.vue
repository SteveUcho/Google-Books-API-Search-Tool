<template>
  <h2>Results</h2>
  <hr>
  <div id="search-container">
    <BookEntity
      v-for='(book, index) in booksSearchList'
      :key='index'
      :book-index="index"
      :book="book"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import useBookStore from '../stores/useBookStore';
import BookEntity from './BookEntity.vue';

export default defineComponent({
  name: 'SearchResults',
  setup() {
    const bookStore = useBookStore();
    const { booksSearchList } = storeToRefs(bookStore);
    return {
      booksSearchList,
    };
  },
  components: { BookEntity },
});
</script>

<style>
</style>
