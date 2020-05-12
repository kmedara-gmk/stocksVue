<template>
  <v-col md="4">
    <v-card raised color="white" dark>
      <v-card-title class="light-green lighten-2">{{stock.name}}</v-card-title>
      <v-card-subtitle class="light-green lighten-2">(Price: {{stock.price | currency}} | Quantity: {{ stock.quantity }})</v-card-subtitle>
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
          :rules="[!insufficientQuantity]"
        />
        <v-btn color="success" @click="sellStock" :disabled="insufficientQuantity || qty <= 0 || qty % 1 != 0" >{{ insufficientQuantity ? 'Not Enough Stocks' : 'Sell' }}</v-btn>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ["stock"],
  data() {
    return {
      qty: 0
    };
  },
  computed: {
      insufficientQuantity() {
          return this.qty > this.stock.quantity;
      }
  },
  methods: {
      ...mapActions({
          placeSellOrder: 'sellStock' //from store
      }),
    sellStock() {
        const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.qty
        };
        this.placeSellOrder(order);
        this.qty = 0

    }
  }
};
</script>

<style scoped>

</style>
