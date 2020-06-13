<template>
  <div id="app">
      <router-view to="/" :batchList= batchlist >Home</router-view>
  </div>
</template>

<script>
import Batchlist from "./assets/Batchlist";
export default {

  data() {
    return {
      batchlist: []
    };
  },
  created() {
    this.batchlist = Batchlist;
  }
  
}
</script>
