<template>
  <div>
    <!-- {{meals}} -->
    <p>The meal name is: {{ meals.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meals: {},
    };
  },
  created: function () {
    this.fetchData();
  },

  computed: {
    styles() {
      return {};
    },
   
  },
  methods: {
    fetchData: async function () {
      try {
        const res = await fetch(
          `https://dev.menu.ninja/api/menu/156?key=8j5vfe%24*pfb**rzt&pretty=1`
        );
        const meals = await res.json();
        this.meals = meals;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>