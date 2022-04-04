wp.blocks.registerBlockType("ourblocktheme/banner", {
  title: "Banner",
  icon:{
    "src":"smiley",
    "background": "#2196f3",
    "foreground": "#fff"
  },
  category: "text",
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent() {
  return  ( <div style={{background:'linen', height: '100px', padding:'20px', border: '2px solid black', borderRadius:'20px' }}> <h1 style={{color:'red'}}>EDITOR - This is from our block.</h1></div> )
}

function SaveComponent() {
  return null
}
 