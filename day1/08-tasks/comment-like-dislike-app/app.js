const app = Vue.createApp({
  data() {
    return {
      comments: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.",
          likes: 10,
          dislikes: 20,
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.",
            likes: 5,
            dislikes: 6,

        },
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.",
            likes: 10,
            dislikes: 20,
          },
          {
              id: 2,
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.",
              likes: 5,
              dislikes: 6,
  
          }
      ],
    };
  },
});

app.mount("#app");
