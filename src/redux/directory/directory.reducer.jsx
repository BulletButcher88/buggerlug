const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "Good Guys Never Win",
      imageUrl:
        "https://4.bp.blogspot.com/-kqon34ra7-8/XWOPllVDNdI/AAAAAAAC_-0/FnfmtSiBq6g-lqbxM-4h9LW7wKEqg9y8gCLcBGAs/s640/Good%2BGuys%2BNever%2BWin%2BToys%2BCo%2Bfor%2B%2523ThisIsNotAToyScene%2BExhibition%2B%2540%2BBSides%2BGallery%2B%2528Opens%2BAug%2B28%2529.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/goodguy"
    },
    {
      title: "kayo",
      imageUrl:
        "https://theaither.com/wp-content/uploads/2019/10/D5859719-0F79-42C3-AD5E-29ED6822EAF1-copy.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/kayo"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
