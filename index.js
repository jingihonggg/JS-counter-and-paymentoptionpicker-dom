let a = 0;

document.querySelector("#increaseBtn").onclick = function () {
  document.querySelector("#countLabel").innerHTML = a++;
};

document.getElementById("resetBtn").onclick = function () {
  document.getElementById("countLabel").innerHTML = 0;
};

document.getElementById("decreaseBtn").onclick = function () {
  document.getElementById("countLabel").innerHTML = a--;
};

document.getElementById("myCheckBox").onclick = function(){
    if(document.getElementById("myCheckBox").checked){
        myCheckBoxLabel.innerHTML = "This shit is checked";
    }
    else {
        myCheckBoxLabel.innerHTML = "this shit aint checked";
    }
}

document.querySelector('#submitBtn').onclick = function(){
    let masterCard = document.getElementById("masterCard");
    let visaCard = document.querySelector("#visaCard")
    let americanExpress = document.querySelector("#americanExpressCard")

    if(masterCard.checked){
        document.querySelector('#cardPicked').innerHTML = 'you selected MasterCard';
    } else if (visaCard.checked){
        document.querySelector('#cardPicked').innerHTML  = 'you selected visa Card';
    } else if (americanExpress.checked){
        document.querySelector('#cardPicked').innerHTML = 'you picked american express card';
    } else {
        window.alert('you didnt pick any of the options');
    }
}

document.getElementById("resetBtn").onclick = function(){
    document.getElementById("cardPicked").innerHTML = " ";
}
