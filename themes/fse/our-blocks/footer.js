wp.blocks.registerBlockType("ourblocktheme/footer", {
  title: "FSE Footer",
  icon:{
    "src":"smiley",
    "background": "#f15025",
    "foreground": "#fff"
  },
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "FSE Footer Placeholder")
  },
  save: function () {
    return null
  }
})
