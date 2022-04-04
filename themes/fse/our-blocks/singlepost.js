wp.blocks.registerBlockType("ourblocktheme/singlepost", {
  title: "Fictional University Single Post",
  icon:{
    "src": "post",
    "background": "#2196f3",
    "foreground": "#fff"
  },
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Post Placeholder")
  },
  save: function () {
    return null
  }
})
