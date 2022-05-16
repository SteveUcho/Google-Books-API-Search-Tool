<template>
  <div class="content-column rounded-border">
    <h2>Saved Books</h2>
    <select class="form-select">
      <option selected disabled value="">Sort:</option>
      <option @click="savedBooksAuthorSorted">Author</option>
      <option @click="savedBooksTitleSorted">Title</option>
      <option @click="savedBooksRatingSorted">Avg. Rating (low to high)</option>
    </select>
    <hr>
    <div class="row book-entity rounded-border" v-for="(book, index) in savedBooks()" :key="index">
      <div class="col-8">
        {{ book.title }}
      </div>
      <div class="col-4">
        <button @click="unsaveBook(index)">Unsave Book</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useBookStore from '@/stores/useBookStore';

export default defineComponent({
  name: 'SavedBooks',
  setup() {
    const bookStore = useBookStore();
    const {
      savedBooks,
      unsaveBook,
      savedBooksAuthorSorted,
      savedBooksRatingSorted,
      savedBooksTitleSorted,
    } = bookStore;
    return {
      savedBooks,
      unsaveBook,
      savedBooksAuthorSorted,
      savedBooksRatingSorted,
      savedBooksTitleSorted,
    };
  },
});
</script>

<style scoped>
.book-entity {
  margin: 8px 0 8px 0;
}
</style>
