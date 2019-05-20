<template>
  <div class="content">
    <h1>{{ gameTitle }}</h1>
    <div>
      <card :val="cards" />
    </div>
  </div>
</template>

<script>
import Card from '~/components/card.vue'
import data from '~/static/AgricolaDatabase.json'
const gameTitle = 'Agricola'

export default {
  components: {
    Card
  },
  computed: {
    deck() {
      return this.$store.state.agricola
    }
  },
  data: function() {
    return {
      gameTitle: gameTitle,
      cards: data,
      state: this.$state
    }
  },
  created: function() {},
  head: {
    title: 'Deck - ' + gameTitle
  }
}
</script>
<style>
.content {
  margin: 5px;
}
</style>
