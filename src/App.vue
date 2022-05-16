<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand">BooksAPI</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Book Search</router-link>
          <router-link class="nav-link" to="/savedbooks">Saved Books</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
button {
  border: none;
  padding: 8px;
  background-color: lightgreen;
  border-radius: 5px;
}

button:hover {
  background-color: greenyellow;
  cursor: pointer;
}

.page-title {
  padding: 20px 0 20px 0;
}

.rounded-border {
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
}

</style>
