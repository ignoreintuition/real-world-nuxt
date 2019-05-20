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
const data = []
const gameTitle = 'At the Gates of Loyang'

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
