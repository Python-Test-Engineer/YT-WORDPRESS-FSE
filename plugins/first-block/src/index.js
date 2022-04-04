wp.blocks.registerBlockType("ourblocktheme/first-block", {
  title: "First Block",
  icon:{
    "src":"admin-settings",
    "background": "#006400",
    "foreground": "#fff"
  },
  category: "text",
  attributes: {
    valueOne: {type: "string"},
    valueTwo: {type: "string"}
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
        <input type="text" placeholder="value one..." value={props.attributes.valueOne} onChange={updateValueOne} />
        <input type="text" placeholder="value two.." value={props.attributes.valueTwo} onChange={updateValueTwo} />
      </div>
    )
  },
  save: function (props) {
    return null
  }
})
