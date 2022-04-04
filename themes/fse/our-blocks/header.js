wp.blocks.registerBlockType("ourblocktheme/header", {
  title: "FSE Header",
  icon:{
    "src":"smiley",
    "background": "#f15025",
    "foreground": "#fff"
  },
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "FSE Header Placeholder")
  },
  save: function () {
    return null
  }
})
