const INITIAL_STATE = {
  sections: [
    {
      title: "heartlad",
      imageUrl:
        "https://1.bp.blogspot.com/-wPkAgdzlvpQ/XoLh6QmtqWI/AAAAAAADNuU/mukV8IX-4CM3_sp8XSDRqaZaqBLs3XUCQCLcBGAsYHQ/w1320/%2522EPIC%2BHADOUKEN%2522%2Bby%2BHANH%2Bfor%2BHEARTLAB%2Bon%2BTOYSREVIL%2B01.jpg",
      id: 1,
      linkUrl: "shop/heartlad"
    },
    {
      title: "abiebi",
      imageUrl:
        "https://4.bp.blogspot.com/-h7e4Mg-02dE/XoIovYL73yI/AAAAAAADNtE/tiljemmtP88Cx9AoK2MWUzvQoix9COtRACLcBGAsYHQ/w1320/Dadballs%2B%2522Love%2BYour%2BSelf%2522%2Bby%2BABIEBI%2B1.jpeg",
      id: 2,
      linkUrl: "shop/abiebi"
    },
    {
      title: "rare collectables",
      imageUrl:
        "https://ksr-ugc.imgix.net/assets/020/809/544/516eee778a29a1ff59f75b730b3ac0db_original.JPG?ixlib=rb-2.1.0&w=700&fit=max&v=1523121201&auto=format&frame=1&q=92&s=bb12c774d3cf257f31a0d8fb6c22b348",
      id: 3,
      linkUrl: "shop/rare"
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
