//  background gradient source code: https://codepen.io/lsammarco/pen/waMpJw
$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #d0e9f2, #86a3bf, #b5d93f)');
  });



// MECHA MECCA & shop disappear
var mechamecca = document.getElementById("mechamecca");
var shop = document.getElementById("shop");
var columns1 = document.querySelector(".columns1");
var columns2 = document.querySelector(".columns2");
var header = document.querySelector(".header");
var footer = document.getElementById("footer");

var bonsai = document.getElementById("bonsai");
var tulip = document.getElementById("tulip");
var anenome = document.getElementById("anenome");
var birds = document.getElementById("birds");
var plant = document.getElementById("plant");
var lotus = document.getElementById("lotus");

shop.addEventListener("click", shopping);

function shopping() {
  header.remove();
  shop.remove();
  mechamecca.remove();
  columns1.style.height = "44vh";
  columns1.style.transition = "height 1s";
  columns1.style.paddingTop = "0";
  columns1.style.margin = "0";
  columns2.style.height = "44vh";
  columns2.style.transition = "height 1s";
  columns2.style.paddingTop = "0";
  columns2.style.padding = "0";
  columns2.style.margin = "0";
  footer.style.display = "flex";
  footer.style.justifyContent = "space-between";
  footer.style.margin = "1%";
  checkout.style.display = "block";
  checkout.style.cursor = "pointer";

  bonsai.style.display = "block";
  bonsai.style.textAlign = "center";
  tulip.style.display = "block";
  tulip.style.textAlign = "center";
  anenome.style.display = "block";
  anenome.style.textAlign = "center";
  birds.style.display = "block";
  birds.style.textAlign = "center";
  plant.style.display = "block";
  plant.style.textAlign = "center";
  lotus.style.display = "block";
  lotus.style.textAlign = "center";
}

// SCROLL TO FORM
var checkout = document.getElementById("checkout");
var personalinfo = document.getElementById("personalinfo");
checkout.addEventListener("click", checkOut);

function checkOut() {
  document.body.style.overflow = "visible";
  personalinfo.scrollIntoView({block: "start", behavior: "smooth"});
}

// SCROLL
// https://codepen.io/alvarotrigo/pen/VwWMjVp
(function(){
    init();

    var g_containerInViewport;
    function init(){
        setStickyContainersSize();
        bindEvents();
    }

    function bindEvents(){
        window.addEventListener("wheel", wheelHandler);        
    }

    function setStickyContainersSize(){
        document.querySelectorAll('.sticky-container').forEach(function(container){
            const stikyContainerHeight = container.querySelector('main').scrollWidth;
            container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
        });
    }

    function isElementInViewport (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }

    function wheelHandler(evt){
        
        const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
            return isElementInViewport(container);
        })[0];

        if(!containerInViewPort){
            return;
        }

        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if(g_canScrollHorizontally){
            containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
        }
    }
})();

//  RECEIPT
var quantity1 = document.getElementById("quantity1");
var quantity2 = document.getElementById("quantity2");
var quantity3 = document.getElementById("quantity3");
var quantity4 = document.getElementById("quantity3");
var quantity5 = document.getElementById("quantity3");
var quantity6 = document.getElementById("quantity3");

quantity1.addEventListener("change", subtotal);
quantity2.addEventListener("change", subtotal);
quantity3.addEventListener("change", subtotal);
quantity4.addEventListener("change", subtotal);
quantity5.addEventListener("change", subtotal);
quantity6.addEventListener("change", subtotal);

function subtotal() {
    var price = document.getElementById("price").value;
    var qt1 = parseFloat(quantity1.value);
    total1 = qt1 * parseFloat(price);

    var qt2 = parseFloat(quantity2.value);
    total2 = qt2 * parseFloat(price);

    var qt3 = parseFloat(quantity3.value);
    total3 = qt3 * parseFloat(price);

    subtotal = total1 + total2 + total3;
    document.getElementById("subtotal").innerHTML= "The subtotal is " + "$" + subtotal + " million";

    grandTotal = total1 + total2 + total3 + parseFloat(4.95);
    document.getElementById("grandtotal").innerHTML = "The grand total is " + "$" + grandTotal + " million";
}

//access the first form object
let obj = document.forms[1];

// add an eventlistener (submit event) to the form object (collecting all of the names and values for all form elements)
obj.addEventListener("submit", function(e) {
// to stop form from submitting to new page (stays anchored on the same page so you can see the output)
    e.preventDefault();
    // get how many elements in the form
    let len = obj.elements.length;
    let text =  "<div id='thanks'> Thanks for your purchase today and here is your receipt: </div>";

    for (let i=0; i < len -2; i++) {
        // if input is empty
        if ((obj.elements[i].value == "") || (obj.elements[i].value == null)) {
            alert("Make sure to input " + obj.elements[i].name);
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor="black";
            obj.elements[i].style.color="white";
            return;
        }

        // if there is a value, and this is the phone number then make sure it has 10 digits 
        else if ((i == 3) && (obj.elements[i].value.length != 10)) {
            alert("Make sure to input 10 digits for " + obj.elements[i].name);
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor="black";
            obj.elements[i].style.color="white";
            return;
        }

        // if there is a value, and this is zipcode then make sure it's has 5 digits 
        else if ((i == 5) && (obj.elements[i].value.length != 5)) {
            alert("Make sure to input 5 digits for " + obj.elements[i].name);
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor="black";
            obj.elements[i].style.color="white";
            return;
        }


        // if there is a value, and this is the 4th element (email) then make sure it's has an '@' the email (validating the email)
        else if ((i == 2) && (obj.elements[i].value.indexOf("@") == -1)) {
            alert("Your email should include the '@' for this " + obj.elements[i].name);
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor="black";
            obj.elements[i].style.color="white";
            return;
        }

        // if there is a value, and this is the 4th element (email) then make sure it's has a '.'' in the email (validating the email)
        else if ((i == 2) &&  (obj.elements[i].value.indexOf(".") == -1)){
            alert("Your email should include the '.' for this " + obj.elements[i].name);
            obj.elements[i].focus();
            obj.elements[i].select();
            obj.elements[i].style.backgroundColor="black";
            obj.elements[i].style.color="white";            
            return;
        }

        else  {
            text += "<p>";
            text += obj.elements[i].name;
            text += ": ";
            text += obj.elements[i].value;
            text += "<p>";
        }
    }

    // open an new document and place the output (receipt inside this new document)
    document.getElementById("receiptResult").innerHTML= text;
});

// SCROLL TO RECEIPT
var check = document.getElementById("check");
var receiptResult = document.getElementById("result");
check.addEventListener("click", checkResult);

function checkResult() {
    receiptResult.scrollIntoView({block: "start", behavior: "smooth"});
}


