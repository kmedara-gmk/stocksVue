<template>
  <div>
    <v-app-bar app color="blue" elevate-on-scroll dark>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Stonk Market</router-link>
      </v-toolbar-title>
      <!--Title Link -->

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="item in $router.options.routes" :key="item.name" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-btn>
      </v-toolbar-items>
      <!--Desktop nav -->

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text @click="endDay">
          <v-icon left dark>mdi-timer</v-icon>End Day
        </v-btn>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{on}">
            <v-btn text color="white" v-on="on"><v-icon left dark>mdi-content-save-all</v-icon>Save & Load</v-btn>
          </template>
          <v-list>
            <v-list-item @click="saveData">Save Data</v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-btn text right><strong>Funds {{ funds | currency }}</strong></v-btn>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </span>
      <!--Only displays on mobile, opens nav drawer below -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list>
      <v-list-item v-for="item in $router.options.routes" :key="item.name" :to="item.path">
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-list>
      <v-list-item @click="endDay">
        <v-list-item-icon>
          <v-icon>mdi-timer</v-icon>
        </v-list-item-icon>
        <v-list-item-title>End Day</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-content-save-all</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Save / Load</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon></v-list-item-icon>
        <v-list-item-title>Save Data</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon></v-list-item-icon>
        <v-list-item-title>Load Data</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
    <!--Holds mobile menu -->
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex'
export default {
  name: "Header",
  components: {

  },
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay() {
      this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      let url = 'https://vuejs-stocktrader-afff0.firebaseio.com/' + 'data.json';

      this.$http.put(url, data);
    }, loadData() {
      
    }
  }
};
</script>
<style scoped>
v-app-bar router-link {
  cursor: pointer;
  color: white;
}
</style>
