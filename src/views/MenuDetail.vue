<template>
  <div>
    <div class="container">
      <div class="grid-container">
        <div class="item1">Food & Drink</div>
        <img  class="item2" :src="posterImage2" :alt="image" />
        <div class="item3">{{ meals.menu.items.find((p) => (p.id = this.$route.params.id)).name }}</div>
        <div class="item4">{{ meals.menu.items.find((p) => (p.id = this.$route.params.id)).name }}</div>
        <div class="item5">{{ meals.menu.items.find((p) => (p.id = this.$route.params.id)).name }}</div>
      </div>

      <!-- {{meals}} -->
      <div class="hero">
        
      </div>
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
     posterImage2: function() {
      return this.meals.menu.items.find((p) => (p.id = this.$route.params.id)).name;
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

.container{

    margin:auto;
}

/* grid */
.item1 {
  grid-area: header;
 font-size: 2rem;
  font-family: Anton, Helvetica, Arial, sans-serif;
  }
.item2 {
  grid-area: menu;
}
.item3 {
  grid-area: main;
}
.item4 {
  grid-area: right;
}
.item5 {
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "menu main main main right right"
    "menu footer footer footer footer footer";
  grid-gap: 10px;
  background:rgb(161 218 201);
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
</style>