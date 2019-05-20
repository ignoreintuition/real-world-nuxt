<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">
      Deck Builder
    </nuxt-link>
    <nuxt-link to="/">
      Home
    </nuxt-link>
    <nuxt-link to="/agricola">
      Agricola
    </nuxt-link>
    <nuxt-link to="/havre">
      La Havre
    </nuxt-link>
    <nuxt-link to="/loyang">
      At the Gates of Loyang
    </nuxt-link>
  </div>
</template>

<style scoped>
.brand {
  font-family: 'garamont', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #434248;
  padding: 10px;
}
.nav .nav-item {
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #e39a3b;
}
.nav a {
  display: inline-block;
}
</style>
