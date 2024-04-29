export const FormComponent = {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  props: {
    handlesubmit: Function,
  },
  data() {
    return {
      title: "",
      content: "",
    };
  },
  template: `
   <form @submit.prevent="handleSubmit(title, content)"> 
   <input type="text" placeholder="title" v-model="title">
   <input type="text" placeholder="content"v-model="content">
   <input type="submit " value="Submit">
   </form>`,
};
