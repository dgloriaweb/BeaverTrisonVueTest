<template>
  <div class="container">
    <div class="grid-container">
      <div class="item1">Food & Drink</div>
      <!-- <img  class="item2" :src="posterImage2" :alt="image" /> -->
      <!-- <img  class="item2" :src="posterImage2" :alt="image" /> -->
      <div class="item2">
        {{ meals.menu.items.find((p) => (p.id = this.$route.params.id)).name }}
        &nbsp;image
      </div>
      <div class="item3">
        {{ meals.menu.items.find((p) => (p.id = this.$route.params.id)).name }}
      </div>
      <div class="item4">
        {{
          meals.menu.items.find((p) => (p.id = this.$route.params.id)).details
        }}
        <br />
        <h1>Details:</h1>
        <br />
      </div>
      <div class="item5">Order Now</div>
    </div>
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
    posterImage2: function () {
      return this.meals.menu.items.find((p) => (p.id = this.$route.params.id))
        .image;
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

<style  scoped>
body {
  background: rgba(161, 218, 201, 0.6);
}
.container {
  margin: auto;
}

/* grid */
.item1 {
  grid-area: header;
  font-size: 2rem;
  
}
.item2 {
  grid-area: menu;
}
.item3 {
  grid-area: main;
}
.item4 {
  grid-area: main2;
  text-align: left;
}
.item5 {
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    "header header header header"
    "menu main main main"
    "menu main2 main2 main2"
    "menu footer footer footer";
  grid-gap: 10px;
  padding: 10px;
}

.grid-container > div {
  background: rgba(161, 218, 201, 0.6);

  padding: 20px ;
}
</style>