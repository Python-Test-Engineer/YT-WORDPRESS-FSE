<?php
while(have_posts()) {
    the_post();
?>
<div>
  <div>
    <p><?php the_title(); ?></p>
    <p><?php the_content(); ?></p>
</div>
<?php
}  
?>
    