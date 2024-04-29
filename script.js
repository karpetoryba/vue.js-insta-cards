import { CardItem } from "./components/CardItem.js";
import { FormComponent } from "./components/FormComponent.js";
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
      post.like += 1;
    },
    handleSubmit(title, content) {
      console.log(
        "Submitting form with title: ",
        title,
        "and content: ",
        content
      );
      const newPost = {
        id: this.postList.length + 1,
        title: title,
        content: content,
        img_url: "https://picsum.photos/200/300",
      };
      this.postList.push(newPost);
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
