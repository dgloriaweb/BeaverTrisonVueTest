<template>
    <div>
        <h1>{{ menu.menu_name }}</h1>
        <h1>Drivers license: {{ menu.menu_drivers_licenses[0].driver.drivers_license }}</h1>
    </div>
</template>

<script>
    export default {
         data() {
    return {
      menu: {}
    };
  },
     created: function() {
    this.fetchData();
  },

    computed: {
    styles() {
      return {
      };
    }
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          `http://localhost/talentexploit_laravel/public/api/menus/${this.$route.params.id}`
        );
        const menu = await res.json();
        this.menu = menu;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>