export const News = {
  clickNewsIcon:
    '[href="/blog/radio-zum-1-iova-dmitri-10-intrebari-la-rece"] > .card > .card-body > .card-title',
  clickNextPage: ":nth-child(5) > a",
  clickPrevPage: "ul > :nth-child(1) > a",
  clickNumberPage: ":nth-child(4) > a",

  // child: {
  //   1: ".v-pagination li:nth-child(1)",
  //   3: ".v-pagination li:nth-child(3)",
  //   4: ".v-pagination li:nth-child(4)",
  // },
  child: (index) => `.v-pagination li:nth-child(${index})`,
};
