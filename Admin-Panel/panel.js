$(".box-title").click(function (e) { 
    e.preventDefault();
    $(".add").slideToggle();
    $(".edit").slideToggle();
    $(".delete").slideToggle();

});