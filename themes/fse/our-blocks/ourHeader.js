wp.blocks.registerBlockType("ourblocktheme/ourHeader", {
  title: "Our Header",
  icon:{
    "src":"smiley",
    "background": "#f15025",
    "foreground": "#fff"
  },
  category: "text",

  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Header Placeholder")
  },
  
  save: function () {
    return null
  }
})
