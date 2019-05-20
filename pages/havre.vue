<template>
  <div>
    <h1>{{ gameTitle }}</h1>
    <div>
      <card :val="cards" />
    </div>
  </div>
</template>

<script>
import Card from '~/components/card.vue'
import data from '~/static/LeHavreDatabase.json'
const gameTitle = 'La Havre'

export default {
  components: {
    Card
  },
  data: function() {
    return {
      gameTitle: gameTitle,
      cards: data
    }
  },
  created: function() {},
  head: {
    title: 'Deck - ' + gameTitle
  }
}
</script>
<style></style>
