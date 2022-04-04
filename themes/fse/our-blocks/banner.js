wp.blocks.registerBlockType("ourblocktheme/banner", {
  title: "FSE Banner",
  icon:{
    "src":"smiley",
    "background": "#f15025",
    "foreground": "#fff"
  },
  category: "text",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "FSE Banner Placeholder")
  },
  save: function () {
    return null
  }
})
