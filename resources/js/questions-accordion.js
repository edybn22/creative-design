$( function() {
    $( "#accordion" ).accordion({heightStyle: 'content'});
   
 });
 $(window).load(function() {
    $("#accordion li:first-of-type .accordion-title").click(function () {
        console.log('item clicked!!')
    });
    $("#accordion li:first-of-type .accordion-title").trigger('click');
});

