<template>
    <form id="search-form" @submit.prevent>
      <label class="form-label" for="search-name">
        Search Book Title:
        <input
          type="text"
          id="search-name"
          class="form-control"
          name="search-name"
          @keyup.enter="callGoogleBooksAPI"
          v-model="searchTerm"
          placeholder="Book Name"
        >
      </label>
      <button @click="callGoogleBooksAPI">Search</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import useBookStore from '../stores/useBookStore';

export default defineComponent({
  name: 'SearchBar',
  setup() {
    const bookStore = useBookStore();
    const { searchTerm } = storeToRefs(bookStore);
    const { callGoogleBooksAPI } = bookStore;
    return {
      searchTerm,
      callGoogleBooksAPI,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  margin-left: 10px;
}

#search-form {
  margin-bottom: 20px;
}
</style>
