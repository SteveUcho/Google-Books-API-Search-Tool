<template>
  <div class="row book-entity rounded-border">
    <div class="col-1 book-index">
      {{ Number(bookIndex) + 1 }}
    </div>
    <div class="col-7 book-title">
      {{ book.volumeInfo.title }}
    </div>
    <div class="col-2 save-book">
      <button
        class="save-button"
        @click="saveBook(book.id, book.volumeInfo)"
      >
        Save Book
      </button>
    </div>
    <div class="col-2 show-more">
      <button @click="showDetails">Show More</button>
    </div>
    <BookDetails
      :style="{ display: showMore }"
      :book="book.volumeInfo"
      class="col-12 book-details"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Volume } from '@/types/BookType';
import useBookStore from '@/stores/useBookStore';
import BookDetails from './BookDetails.vue';

export default defineComponent({
  name: 'BookEntity',
  setup() {
    const bookStore = useBookStore();
    const { saveBook, savedBooks } = bookStore;
    return { saveBook, savedBooks };
  },
  data() {
    return {
      showMore: 'none',
    };
  },
  props: {
    bookIndex: Number,
    book: Object as PropType<Volume>,
  },
  methods: {
    showDetails() {
      if (this.showMore === 'none') {
        this.showMore = 'block';
      } else {
        this.showMore = 'none';
      }
    },
  },
  components: {
    BookDetails,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.book-entity {
  margin-bottom: 5px;
}

.book-index {
  border-right: 1px solid lightgray;
  text-align: center;
}

.book-title {
  padding: 0 8px 0 8px;
}

.save-button {
  animation-name: glow;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

.book-details {
  display: none;
  padding: 0 8px 0 8px;
  margin-top: 10px;
  border-top: 1px solid lightgray;
}

@keyframes glow {
  0% {
    background-color: lightgreen;
  }
  50% {
    background-color: limegreen;
  }
  100%{
    background-color: lightgreen;
  }
}
</style>
