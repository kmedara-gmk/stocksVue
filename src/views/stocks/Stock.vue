<template>
  <v-col md="4">
    <v-card raised color="white" dark>
      <v-card-title class="light-green lighten-2">{{stock.name}}</v-card-title>
      <v-card-subtitle class="light-green lighten-2">(Price: {{stock.price | currency}})</v-card-subtitle>
      <v-spacer></v-spacer>
      <v-card-text>
        <v-text-field
          outlined
          dense
          light
          prepend-inner-icon="fas fa-hashtag"
          v-model="qty"
          type="number"
          label="Quantity"
          :rules="[!insufficientFunds]"
        />
        <v-btn color="success"  @click="buyStock" :disabled="insufficientFunds || qty <= 0 || qty % 1 != 0" >{{insufficientFunds ? 'Not Enought Funds' : 'Buy' }}</v-btn>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      qty: 0
    };
  },
  computed: {
    insufficientFunds(){
      return this.qty * this.stock.price > this.funds;
    },
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.qty
      };
      console.log(order);
      this.$store.dispatch('buyStock', order);
      this.qty = 0;
    }
  }
};
</script>

<style>
.v-btn--disabled{
  background-color: red !important;
}
</style>