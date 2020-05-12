<template>
  <v-container fill-height fluid>
    <v-row >
      <v-col align="center" justify="center">
        <h1>Trade or View Portfolio</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center" justify="center">
        <h4>You may Save & Load Data</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center" justify="center">
        <h4>Click on 'End Day' to begin a New Day!</h4>
        <hr />
        <p>Your Funds: {{ funds }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
