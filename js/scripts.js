//backend
  function CustomPizza (zasize,sauceone,saucetwo,saucethree,meatone,meattwo,meatthree,meatfour,veggieone,veggietwo,veggiethree,veggiefour){
    this.zasize = zasize;
    this.sauceone = sauceone;
    this.saucetwo = saucetwo;
    this.saucethree = saucethree;
    this.meatone = meatone;
    this.meattwo = meattwo;
    this.meatthree = meatthree;
    this.meatfour = meatfour;
    this.veggieone = veggieone;
    this.veggietwo = veggietwo;
    this.veggiethree = veggiethree;
    this.veggiefour = veggiefour;
  }
  CustomPizza.prototype.price = function (specialOne, specialTwo, specialThree,specialFour, specialFive, SpecialSix){
    return specialOne + specialTwo + specialThree + specialFour + specialFive + SpecialSix + this.zasize + this.sauceone + this.saucetwo + this.saucethree + this.meatone + this.meattwo + this.meatthree + this.meatfour + this.veggieone + this.veggietwo + this.veggiethree + this.veggiefour;
  }


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
    var newPizza = new CustomPizza(customSize,sauceRed,sauceBbq,sauceWhite,pepperoni,italian,bacon,meatBall,jalepeno,onion,bell,zuch)
    var newPrice = newPizza.price(hawaii, jack, heart, chicken, steve, health);
    console.log(newPrice);
});
});
