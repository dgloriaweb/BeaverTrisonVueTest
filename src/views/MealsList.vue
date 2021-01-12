<template>
<Header />
<div class="container">

  <ul>
    <li v-for="meal in menu" :key="meal.id">
      <ul class="sec">
        <li  class="second" v-for="item in meal.items" :key="item.id">
          <Menu v-bind:item="item" />
        </li>
      </ul>
    </li>
  </ul>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Header from "./Header.vue";
export default {
  name: "ItemsList",
  data() {
    return {
      menu: [],
    };
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: async function () {
      try {
        const res = await fetch(
          "https://dev.menu.ninja/api/menu/156?key=8j5vfe%24*pfb**rzt&pretty=1"
        );

        const apiresource = await res.json();
        this.menu = apiresource;
      } catch (e) {
        console.log(e);
      }
    },
  },
  components: {
    Header,
    Menu,
  },
};
</script>

<style scoped>

li{
  font-family: 'Hachi Maru Pop';
}
.container{
  margin:auto;
}

ul.sec {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(3 , 1fr);
}
li.second {
  background:rgb(161 218 201);
  grid-row-gap: 1rem;
};
</style>