<template>
  <div class="container">
    <h1 class="page-title">Compare Books</h1>
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <SavedBooks />
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="content-column rounded-border">
          <h2>Book 1: {{ selected1 }}</h2>
          <select class="form-select" v-model="selected1">
            <option disabled value="">Choose Book</option>
            <option @click="chooseBook1(book)" v-for="(book, index) in savedBooks()" :key="index">
              {{ book.title }}
            </option>
          </select>
          <hr>
          <BookDetails :book="chosenBook1" />
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="content-column rounded-border">
          <h2>Book 2: {{ selected2 }}</h2>
          <select class="form-select" v-model="selected2">
            <option disabled value="">Choose Book</option>
            <option @click="chooseBook2(book)" v-for="(book, index) in savedBooks()" :key="index">
              {{ book.title }}
            </option>
          </select>
          <hr>
          <BookDetails :book="chosenBook2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Book } from '@/types/BookType';
import BookDetails from '@/components/BookDetails.vue';
import SavedBooks from '@/components/SavedBooks.vue';
import useBookStore from '@/stores/useBookStore';

export default defineComponent({
  name: 'SavedBooksView',
  setup() {
    const bookStore = useBookStore();
    const {
      savedBooks,
    } = bookStore;
    return {
      savedBooks,
    };
  },
  data() {
    return {
      selected1: '',
      chosenBook1: {},
      selected2: '',
      chosenBook2: {},
    };
  },
  methods: {
    chooseBook1(book: Book) {
      this.chosenBook1 = book;
    },
    chooseBook2(book: Book) {
      this.chosenBook2 = book;
    },
  },
  components: { BookDetails, SavedBooks },
});
</script>

<style scoped>
.content-column {
  margin-bottom: 10px;
}

</style>
