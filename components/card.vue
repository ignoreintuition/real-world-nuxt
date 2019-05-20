<template>
  <div class="card">
    <div class="container">
      <div class="card-title">Type</div>
      <div class="card-title">Deck</div>
      <div class="card-title">Text</div>
      <div class="card-title">Player(s)</div>
    </div>
    <div v-for="card in val" :key="card.Card" class="container">
      <div class="card-detail">{{ card.Type }}</div>
      <div class="card-detail">{{ card.Deck }}</div>
      <div class="card-detail">{{ card.Text }}</div>
      <div class="card-detail">{{ card.Players }}</div>
    </div>
  </div>
</template>
<script>
export default {
  return: function() {
    return this.val
  },
  props: {
    val: Array
  },
  methods: {
    sort: function() {}
  }
}
</script>
<style scoped>
.container {
  font-family: 'garamond', sans-serif;
  font-size: 1em;
  color: #39b982;
  text-decoration: none;
  border: #856226 solid 1px;
  display: flex;
  justify-content: center;
}
.card-title {
  font-weight: bold;
}
.card-detail,
.card-title {
  box-sizing: border-box;
  margin: 0 5px;
  display: block;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  flex-basis: 33%;
}
</style>
