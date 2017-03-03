//backend




//frontend
$(document).ready(function(){
  $("form#placeOrder").submit(function(event){
    event.preventDefault();
    var hawaii = parseInt($("#sizeHawian").val());
    var jack = parseInt($("#sizeJack").val());
    var heart = parseInt($("#sizeHeart").val());
    var chicken = parseInt($("#sizeChicken").val());
    var steve = parseInt($("#sizeSteve").val());
    var health = parseInt($("#sizeHealth").val());
    var customSize = parseInt($("input:radio[name=pizzaSize]:checked").val());
    var sauceRed = parseFloat($("#redSauce").val());
    var sauceBbq = parseFloat($("#bbq").val());
    var sauceWhite = parseFloat($("#whiteSauce").val());
    var pepperoni = parseFloat($("#pepperoni").val());
    var italian = parseFloat($("#italian").val());
    var bacon = parseFloat($("#bacon").val());
    var meatBall = parseFloat($("#meatBall").val());
    var jalepeno = parseFloat($("#jalepeno").val());
    var onion = parseFloat($("#onion").val());
    var bell = parseFloat($("#bellPepper").val());
    var zuch = parseFloat($("#zuchinni").val());
});
});
