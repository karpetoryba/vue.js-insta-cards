import { CardItem } from "./CardItem.js";
const { createApp, ref } = Vue;

const vm = createApp({
  components: {
    "card-post": CardItem,
  },
  data() {
    return {
      postList: [],
    };
  },
  methods: {
    increase(id) {
      console.log("Increase likes for post with id:", id);
      const post = this.postLike.find((post) => post.id === id);
      post.likes += 1;
    },
  },
  mounted() {
    console.log("App mounted");
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        this.postList = data;
      });
    console.log("App mounted");
  },
}).mount("#app");
