alert()

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount= document.getElementById("amount").value;
    const convertedAmount =parseInt(amount);
    const pin= document.getElementById("addpin").value;
    const convertedPin =parseInt(pin)
})