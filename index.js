

var price , crust_price, topping_price ;
var total = 0;
function Getpizza( name, size, crust, topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function(){
  $("button.proceed").click(function(event){
   var pname = $(".name option:selected").val();
   var psize = $("#size option:selected").val();
   var pcrust = $("#crust option:selected").val();
   var ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1300;
       console.log(price);
     break;
     case "medium":
       price = 950;
       console.log("The price is "+price);
     break;
     case "small":
       price = 700;
       console.log(price);
     default:
       console.log("undefined"); 
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 250;
      break;
      case "Stuffed":
        crust_price = 200;
      break;
      case "Gluten-free":
        crust_price = 230;
      break;
      default:
        console.log("undefined"); 
    }
    var topping_value = ptopping.length*70;
    console.log("toppings value" + topping_value);

    total = price + crust_price + topping_value;
    console.log(total);
    var checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    
    $("button.addPizza").click(function(){
      var pname = $(".name option:selected").val();
      var psize = $("#size option:selected").val();
      var pcrust = $("#crust option:selected").val();
      var ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
  
        var topping_value = ptopping.length*70;
        console.log("toppings value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      
      var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
      
      
//  User interface

    });
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").show();
      $("#addedprice").show();
      console.log("Your total bill is Kshs. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });


    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".order2 h2").hide();
      $(".delivery").show();
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      var deliveryamount= checkoutTotal+250;
      console.log("You will pay KShs. "+deliveryamount+" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+deliveryamount );
    });

    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      var deliveryamount= checkoutTotal+250;
      console.log("Your Bill is: "+deliveryamount);
      var person = $("input#name").val();
      var phone = $("input#phone").val();
      var location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallm").append("Hi "+ person+", We have received your order and it will be delivered to you within 45 Mins at "+location+ ". Amount payable KShs. "+deliveryamount);
        $("#totalbill").hide();
        $("#finallm").show();

      }
      else {
        alert("Kindly, fill in your delivery details!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });

});

$("#form").on("submit", function (event) {
  event.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("textarea#message").val();

  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(form.email.value)) {
    alert(
      "Hi " +
        name +
        ", we have received your message. Thank you for being our number one customer."
    );
  } else {
    alert("Please provide your correct email address!");
  }

  $("#form")[0].reset();
});