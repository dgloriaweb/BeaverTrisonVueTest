<template>
  <div class="container">
    <router-link to="/">
      <a
        href=""
        class="btn-back rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"
      >
        Back
      </a>
    </router-link>
    <div class="grid-container">
      <div class="item1">Food & Drink</div>

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

      <router-link :to="itemPath" class="item5">
        <a
          href=""
          class="flex bg-blue-500 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6"
        >
          Order Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline ml-2 w-6 stroke-current text-white stroke-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </router-link>
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
    itemPath: function () {
      return `/order/${this.$route.params.id}`;
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
.btn-back{
    margin:1rem;

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

  padding: 20px;
}

.mr-6 {
  width: 10rem;
}
</style>