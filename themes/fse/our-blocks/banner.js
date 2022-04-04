wp.blocks.registerBlockType("ourblocktheme/banner", {
  title: "Banner",
  icon:{
    "src":"admin-settings",
    "background": "#2196f3",
    "foreground": "#fff"
  },
  category: "text",
  attributes: {
    valueOne: {type: "string", default: "cat"},
    valueTwo: {type: "string", default: "red"}
  },
  edit: function (props) {
    function updateValueOne(event) {
      props.setAttributes({valueOne: event.target.value})
    }

    function updateValueTwo(event) {
      props.setAttributes({valueTwo: event.target.value})
    }

    return (
      <div>
        <input type="text" placeholder="valueOne" value={props.attributes.valueOne} onChange={updateValueOne} />
        <input type="text" placeholder="valueTwo" value={props.attributes.valueTwo} onChange={updateValueTwo} />
      </div>
    )
  },
  save: function (props) {
    return null
  }
})
