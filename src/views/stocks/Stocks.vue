<template>
  <v-container fluid fill-height>
    <v-row>
      <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
    </v-row>
  </v-container>
</template>

<script>
import Stock from "@/views/stocks/Stock.vue";
export default {
  components: {
    Stock
  },
  data() {
    return {
    };
  },
  computed: {
      stocks() {
          return this.$store.getters.stocks;
      }
  }
};
</script>