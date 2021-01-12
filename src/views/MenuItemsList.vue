<template>
  <ul>
    <li v-for="menu in menu_items" :key="menu.id">
      <Menu v-bind:menu="menu" />
    </li>
  </ul>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  name: "MenusList",
  data() {
    return {
      menu_items: [],
    };
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: async function (req) {
      try {
        const res = await fetch(
          "https://dev.menu.ninja/api/menu/156?key=8j5vfe%24*pfb**rzt&pretty=1"
        );
        const accessToken = req.body.access_token;

        const menu_items = await res.json(accessToken);
        this.menu_items = menu_items.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  components: {
    Menu
  },
};
</script>

<style lang="scss" scoped>
</style>