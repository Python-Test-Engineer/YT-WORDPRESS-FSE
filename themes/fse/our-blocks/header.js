wp.blocks.registerBlockType("ourblocktheme/header", {
  title: "FSE Header",
  icon:{
    "src":"admin-tools",
    "background": "#f15025",
    "foreground": "#fff"
  },
  category: "text",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "FSE Header Placeholder")
  },
  save: function () {
    return null
  }
})
