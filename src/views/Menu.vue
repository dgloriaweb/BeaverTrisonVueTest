<template>
  <div>
    <router-link :to="itemPath">
     
         <img :src="posterImage" :alt="item.name" />
        
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    posterImage: function() {
      return `${this.item.image}`;
    },
    itemPath: function () {
      return `/meals/${this.item.id}`;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>