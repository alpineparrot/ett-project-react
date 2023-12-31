export const data = [
  {
    title: "Turin",
    description: "description",
    image: "./assets/clients.jpg",
  },
  {
    title: "Firenze",
    description: "description",
    image: "./assets/security.jpg",
  },
  {
    title: "Milan",
    description: "description",
    image: "./assets/teamwork.jpg",
  },
  {
    title: "Amsterdam",
    description: "description",
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg",
  },
  {
    title: "Edinburgh",
    description: "description",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
];

export const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
