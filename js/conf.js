function backHome(){
    window.open("index.html", "_self");
}

document.getElementById('id_order').innerText = localStorage.getItem('orderId');
document.getElementById('total_amount').innerText = localStorage.getItem('totalAmount') + '€';
