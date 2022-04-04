wp.blocks.registerBlockType("ourblocktheme/blogindex", {
  title: "Fictional University Blog Index",
  icon:{
    "src":"admin-settings",
    "background": "#2196f3",
    "foreground": "#fff"
  },
  category: "text",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Blog Index Placeholder")
  },
  save: function () {
    return null
  }
})
