//backend
  function CustomPizza (zasize,sauceone,saucetwo,saucethree,meatone,meattwo,meatthree,meatfour,veggieone,veggietwo,veggiethree,veggiefour, anotherPizza){
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
    this.anotherPizza = [];
  }
  function SpecialPizza(specialOne, specialTwo, specialThree,specialFour, specialFive, specialSix){
    this.specialOne = specialOne;
    this.specialTwo = specialTwo;
    this.specialThree = specialThree;
    this.specialFour = specialFour;
    this.specialFive = specialFive;
    this.specialSix = specialSix
  }
  CustomPizza.prototype.blockChoices = function(){
    if ((this.zasize === 0) && ((this.sauceone !== 0) || (this.saucetwo !== 0) || (this.saucethree !== 0) ||
    (this.meatone !== 0) || (this.meattwo !== 0) || (this.meatthree !== 0) || (this.meatfour !== 0) || (this.veggieone !== 0) || (this.veggietwo !== 0) ||
    (this.veggiethree !== 0) || (this.veggiefour !==0))){
      $("#placeOrder").show();
      $(".orderConformation").hide();
      alert("Please pick a size if you would like a custom pizza");
    }
  }
  CustomPizza.prototype.prntCustom = function(){
   if (this.zasize === 6){
     $("#customOrder").append("Small custom pizza with ");
   }else if (this.zasize === 9){
     $("#customOrder").append("Medium custom pizza with ");
   }else if (this.zasize === 12){
     $("#customOrder").append("Large custom pizza with ");
   };
   if (this.sauceone === 1){
     $("#customOrder").append("red sauce, ");
   }else if(this.sauceone === 1.5){
     $("#customOrder").append("extra saucy red sauce, ");
   };
   if (this.saucetwo === 1){
     $("#customOrder").append("BBQ sauce, ");
   }else if(this.saucetwo === 1.5){
     $("#customOrder").append("extra saucy BBQ sauce, ");
   };
   if (this.saucethree === 1){
     $("#customOrder").append("white sauce, ");
   }else if(this.saucethree === 1.5){
     $("#customOrder").append("extra saucy white sauce, ");
   };
   if(this.meatone === 1){
     $("#customOrder").append("pepperoni, ");
   }else if(this.meatone === 1.5){
     $("#customOrder").append("loaded up with pepperoni, ");
   };
   if(this.meattwo === 1){
     $("#customOrder").append("itailian sausage, ");
   }else if(this.meattwo === 1.5){
     $("#customOrder").append("loaded to the top with italian sausage, ");
   };
   if(this.meatthree === 1){
     $("#customOrder").append("bacon, ");
   }else if(this.meatthree === 1.5){
     $("#customOrder").append("so much bacon you could make a new pig, ");
   };
   if(this.meatfour === 1){
     $("#customOrder").append("meatball, ");
   }else if(this.meatfour === 1.5){
     $("#customOrder").append("piled high with meatballs, ");
   };
   if(this.veggieone === .5){
     $("#customOrder").append("jalepeno, ");
   }else if (this.veggieone === 1){
     $("#customOrder").append("a boat load of jalepenos, ");
   };
   if(this.veggietwo === .5){
     $("#customOrder").append("onion, ");
   }else if (this.veggietwo === 1){
     $("#customOrder").append("an extra helping of onions, ");
   };
   if(this.veggiethree === .5){
     $("#customOrder").append("bell peppers, ");
   }else if (this.veggiethree === 1){
     $("#customOrder").append("a liberty bell full of bell peppers, ");
   };
   if(this.veggiefour === .5){
     $("#customOrder").append("zuchinni, ");
   }else if (this.veggiefour === 1){
     $("#customOrder").append("a bunch  of zuchinni, ");
   };
    if(this.zasize !== 0){
      $("#customOrder").append("and topped with our five cheese blend." + "<br>");
    };
  }
  SpecialPizza.prototype.prntSpecial= function(){
    $("#pizzasOrdered").empty();
    if (this.specialOne !== 0){
      $("#pizzasOrdered").prepend("<li>" + "Hawian Biden" + "</li>");
    };
    if (this.specialTwo !== 0){
      $("#pizzasOrdered").prepend("<li>" + "Cracker Jack Smack" + "</li>");
    };
    if (this.specialThree !== 0){
      $("#pizzasOrdered").prepend("<li>" + "Fat Jack Heart Attack" + "</li>");
    };
    if (this.specialFour !== 0){
      $("#pizzasOrdered").prepend("<li>" + "Finger Lickin' BBQ Chicken" + "</li>");
    };
    if (this.specialFive !== 0){
      $("#pizzasOrdered").prepend("<li>" + "Steezy Steve's Pepperoni and Cheese" + "</li>");
    };
    if (this.specialSix !== 0){
      $("#pizzasOrdered").prepend("<li>" + "If A Pizza Could Be Healthy" + "</li>");
    };
  }
  CustomPizza.prototype.price = function (specialOne, specialTwo, specialThree,specialFour, specialFive, specialSix){
    var priceAdd = specialOne + specialTwo + specialThree + specialFour + specialFive + specialSix + this.zasize + this.sauceone + this.saucetwo + this.saucethree + this.meatone + this.meattwo + this.meatthree + this.meatfour + this.veggieone + this.veggietwo + this.veggiethree + this.veggiefour;
    return priceAdd;
  };
  var tax = function(pizzaPrice){
    var longTax = pizzaPrice * .065;
    return longTax;
  };
  var addTax = function(price,tax){
    var decimals = price + tax
    return decimals.toFixed(2);
  };
  var prntTotals = function(newPrice, newTax, newTotal){
    $("#listPrices").empty();
    $("#listPrices").append("<li>" + "Total: $" + newPrice.toFixed(2) + "</li>");
    $("#listPrices").append("<li>" + "Tax: $" + newTax.toFixed(2) + "</li>");
    $("#listPrices").append("<li>" + "Total with tax: $" + newTotal + "</li>");
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
    var newSpecialPizza = new SpecialPizza(hawaii, jack, heart, chicken, steve, health);
    var newPizza = new CustomPizza(customSize,sauceRed,sauceBbq,sauceWhite,pepperoni,italian,bacon,meatBall,jalepeno,onion,bell,zuch);
    var newPrice = newPizza.price(hawaii, jack, heart, chicken, steve, health);
    var newTax = tax(newPrice);
    var newTotal = addTax(newPrice, newTax);
    newSpecialPizza.prntSpecial();
    prntTotals(newPrice, newTax, newTotal);
    $("#placeOrder").hide();
    $(".orderConformation").show();
    newPizza.prntCustom();
    newPizza.blockChoices();
  });
  $("#done").click(function(event){
  event.preventDefault();
  $("#listPrices").show();
  });
  $("#morePizza").click(function(event){
    event.preventDefault();
    $("#secondPizza").prepend('<div class="row">'+
      '<div class="col-sm-3">'+
          '<div class="radio">'+
            '<label>'+
              '<input type="radio" name="pizzaSize" value="0" checked>' +
              'Nevermind my original order looks good' +
            '</label>'+
          '</div>' +
        '</div>' +
      '<div class="col-sm-3">' +
        '<div class="radio">' +
          '<label>' +
            '<input type="radio" name="pizzaSize" value="6">' +
            'Small $7' +
          '</label>' +
        '</div>' +
      '</div>' +
      '<div class="col-sm-3">' +
        '<div class="radio">' +
          '<label>' +
            '<input type="radio" name="pizzaSize" value="9">' +
            'Medium $10' +
          '</label>' +
        '</div>' +
      '</div>' +
      '<div class="col-sm-3">' +
          '<div class="radio">' +
            '<label>' +
              '<input type="radio" name="pizzaSize" value="12">' +
              'Large $13' +
            '</label>' +
          '</div>' +
      '</div>' +
     '</div>' +
    "<h3>You'e the boss choose a Sauce!</h3>" +
    '<div class="row">' +
      '<div class="col-sm-4">' +
        '<div class="customChoice">' +
          '<select class="form-group" id="redSauce">' +
            '<option value="0">Choose amount</option>' +
            '<option value="1">Normal</option>' +
            '<option value="1.5">Saucey! + .50</option>' +
          '</select>' +
          '<h2>Red Sauce</h2>' +
        '</div>' +
      '</div>' +
      '<div class="col-sm-4">' +
        '<div class="customChoice">' +
          '<select class="form-group" id="bbq">' +
            '<option value="0">Choose amount</option>' +
            '<option value="1">Normal</option>' +
            '<option value="1.5">Saucey! + .50</option>' +
          '</select>' +
          '<h2>BBQ Sauce</h2>' +
        '</div>' +
      '</div>' +
      '<div class="col-sm-4">' +
        '<div class="customChoice">' +
          '<select class="form-group" id="whiteSauce">' +
            '<option value="0">Choose amount</option>' +
            '<option value="1">Normal</option>' +
            '<option value="1.5">Saucey! + .50</option>' +
          '</select>' +
          '<h2>White Sauce</h2>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<h3>Did someone say meat?</h3>' +
    '<div class="row">' +
      '<div class="col-sm-3">' +
        '<div class="customChoice">' +
          '<select class="form-group" id="pepperoni">' +
            '<option value="0">More you say?</option>' +
            '<option value="1">Normal + $1</option>' +
            '<option value="1.5">Loaded + $1.5</option>' +
          '</select>' +
          '<h2 class="pizzaName">Pepperoni</h2>' +
        '</div>' +
      '</div>' +
      '<div class="col-sm-3">'+
        '<div class="customChoice">'+
          '<select class="form-group" id="italian">'+
            '<option value="0">More you say?</option>'+
            '<option value="1">Normal + $1</option>'+
            '<option value="1.5">Loaded + $1.50</option>'+
          '</select>'+
          '<h2 class="pizzaName">Italian Sausage</h2>'+
        '</div>'+
      '</div>'+
      '<div class="col-sm-3">'+
        '<div class="customChoice">'+
          '<select class="form-group" id="bacon">'+
            '<option value="0">More you say?</option>'+
            '<option value="1">Normal + $1</option>'+
            '<option value="1.5">Loaded + $1.50</option>'+
          '</select>'+
          '<h2>Bacon</h2>'+
        '</div>'+
      '</div>'+
      '<div class="col-sm-3">'+
        '<div class="customChoice">'+
          '<select class="form-group" id="meatBall">'+
            '<option value="0">More you say?</option>'+
            '<option value="1">Normal + $1</option>'+
            '<option value="1.5">Loaded + $1.50</option>'+
          '</select>'+
          '<h2>MeatBall</h2>'+
        '</div>'+
      '</div>'+
    '</div>'+
    "<h3>Don't forget your veggies!</h3>"+
    '<div class="row">'+
      '<div class="col-sm-3">'+
        '<div class="customChoice">'+
          '<select class="form-group" id="jalepeno">'+
            '<option value ="0">More you say?</option>'+
            '<option value=".5">Normal + .50</option>'+
            '<option value="1">Loaded + 1</option>'+
          '</select>'+
          '<h2 class="pizzaName">Jalepeno</h2>'+
        '</div>'+
      '</div>'+
      '<div class="col-sm-3">'+
        '<div class="customChoice">'+
          '<select class="form-group" id="onion">'+
            '<option value="0">More you say?</option>'+
            '<option value=".5">Normal + .50</option>'+
            '<option value="1">Loaded + 1</option>'+
          '</select>'+
          '<h2>Onion</h2>'+
        '</div>'+
      '</div>'+
      '<div class="col-sm-3">'+
        '<div class="customChoice">'+
          '<select class="form-group" id="bellPepper">'+
            '<option value="0">More you say?</option>'+
            '<option value=".5">Normal + .50</option>'+
            '<option value="1">Loaded + 1</option>'+
          '</select>'+
          '<h2>Bell Pepper</h2>'+
        '</div>'+
      '</div>'+
      '<div class="col-sm-3">'+
        '<div class="customChoice">'+
          '<select class="form-group" id="zuchinni">'+
            '<option value="0">More you say?</option>'+
            '<option value=".5">Normal + .50</option>'+
            '<option value="1">Loaded + 1</option>'+
          '</select>'+
          '<h2>Zuchinni</h2>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<button type="submit">Place Order</button>');
    $("#morePizza").hide();
  });
});
