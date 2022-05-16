<template>
  <div class="book-details">
    <h3>More Information:</h3>
    <ul>
      <li class="row" v-for='(item, key) in book' :key='key'>
        <div class="col-md-4 book-detail-name">
          {{ capitalized(String(key)) }}
        </div>
        <div class="col-md-8">
          {{ item }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BookDetails',
  props: {
    book: {},
  },
  methods: {
    capitalized(value: string): string {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
});

</script>

<style scoped>
ul {
  padding: 0 20px;
}

li {
  list-style: none;
  padding-bottom: 8px;
}

.book-details {
  text-align: left;
  padding: 8px;
}

.book-detail-name {
  font-weight: bold;
  color: green;
}
</style>
