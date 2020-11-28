 
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const urlCustomers = "http://vts-alb-316342429.us-east-1.elb.amazonaws.com/vts/api/v1/customers";
const urlProducts = "http://vts-alb-316342429.us-east-1.elb.amazonaws.com/vts/api/v1/products";
const urlOrders = "http://vts-alb-316342429.us-east-1.elb.amazonaws.com/vts/api/v1/orders";

const urlAuth = "http://vts-alb-316342429.us-east-1.elb.amazonaws.com/vts/api/v1/auth";
let Auth_Bearer = window.localStorage.getItem('Key');
 

if (window.localStorage.getItem('Key') === true) {

    document.getElementById("login").style.display = "none";  
 
} 