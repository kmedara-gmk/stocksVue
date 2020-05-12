<template>
    <v-container>
        <Stock v-for="stock in stocks " :key="stock.id" :stock="stock"/>
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import Stock from './Stock'
export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio' //maps to stock portfolio getter
        })
    },
    components: {
        Stock
    }
}
</script>