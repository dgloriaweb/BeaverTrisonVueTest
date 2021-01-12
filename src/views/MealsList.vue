<template>
  <ul>
    <li v-for="meal in menu" :key="meal.id">
      <ul>
        <li v-for="item in meal.items" :key="item.id">
          <Menu v-bind:item="item" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import Menu from "./Menu.vue";
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
    Menu,
  },
};
</script>

<style lang="scss" scoped>
</style>