$(".catalogTile").hover(function(){
    $(this).find('img').attr("src", $(this).data('colorPhoto'))
},
function(){
    $(this).find('img').attr("src", $(this).data('bwPhoto'))
});