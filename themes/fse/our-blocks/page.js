wp.blocks.registerBlockType("ourblocktheme/page", {
  title: "Fictional University Page",
  icon:{
    "src":"admin-settings",
    "background": "#2196f3",
    "foreground": "#fff"
  },
  category: "text",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Page Placeholder")
  },
  save: function () {
    return null
  }
})
