<template>
  <div>
    <router-link :to="menuPath">
      {{ menu.menu_name }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["menu"],
  computed: {
    menuPath: function () {
      return `/menu_items/${this.menu.id}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>