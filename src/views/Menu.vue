<template>
  <div>
    <router-link :to="itemPath">
     
         <img :src="posterImage" :alt="item.name" />
         <div class="itemname">

         {{item.name}}
         </div>
        
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

<style  scoped>
.itemname{
  font-size:1.3rem;
  font-weight:bold;
}
</style>