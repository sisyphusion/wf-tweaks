/* open menu on PAGE LOAD */
/* paste BEFORE closing body tag */
<script>
$("document").ready(function() {
    if($( window ).width() > 768){ /*set page width px*/
    setTimeout(function() {
    $(".menu-button").trigger('click');
    },10);
    }});
</script>
