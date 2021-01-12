<template>
  <div>
    <router-link :to="itemPath">
     
          {{ item.name }}
        
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    itemPath: function () {
      return `/meals/${this.item.id}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>