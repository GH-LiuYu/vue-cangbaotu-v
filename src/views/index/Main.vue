
<template>
    <div class="content">
        <Search></Search>
       <div class="list"><Card v-for="index of 10" class="card"></Card></div>
    </div>
</template>
<script>
  import Search from "./Search";
  import Card from "./Card";
  export default {
    name: "search",
      components: {Search,Card},
    data() {
      return {
        clientHeight:'',
      };
    },
    mounted(){

    },
    computed: {

    },
    watch: {

    },
    methods: {

    },
  };
</script>

<style lang="scss" scoped>
    .list{
        display: flex;
        justify-content:center;
        align-items:center;
        width: 77%;
        margin: auto;
        padding: 10px;
    }
    .card{
        padding: 5px;
    }
</style>

