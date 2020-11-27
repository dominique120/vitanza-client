 const proxyurl = "https://cors-anywhere.herokuapp.com/";
 const urlCustomers = "http://vts-alb-316342429.us-east-1.elb.amazonaws.com/vts/api/v1/customers";
 

 function traer() {

   

  document.getElementById("tabla-listar").style.display = "block";
  document.getElementById("tabla-crear").style.display = "none";

 }
 // LISTAR
 
 fetch(proxyurl + urlCustomers, {
  method: 'GET',
  dataType: "jsonp",
  crossDomain: true,
  cors: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Authorization": "Bearer " + Auth_Bearer,
  }
})
.then(response => response.json())
.then(clientes => {
  tabla(clientes)
  
});


 function tabla(clientes) {
   
   var contenido = document.querySelector('#contenido');
   console.log(clientes);
   for (let cliente of clientes) { 
     contenido.innerHTML += `

                   <tr>
                        <th scope="row">${cliente.FirstName}</th>
                        <td>${cliente.LastNames}</td>
                        <td>${cliente.District}</td>
                        <td>${cliente.PrimaryAddress}</td>
                        <td>${cliente.PrimaryPhone}</td>
                        <td>
                            
                            <a href="javascript:void(0);" class="btn-delete"  data-id="${cliente.ClientId_uuid}">Eliminar</a></td> 

                            </tr>
                    `
   }
 }
 
// CREAR

 
$(document).on("click", ".btn-crear", function (event) {
  console.log("abc");

//event.preventDefault()

  var FirstName = document.getElementById('FirstName').value
  var LastNames = document.getElementById('LastNames').value
  var District = document.getElementById('District').value
  var PrimaryAddress = document.getElementById('PrimaryAddress').value
  var PrimaryPhone = document.getElementById('PrimaryPhone').value


  fetch(proxyurl + urlCustomers, {
    method: 'POST', 
    body: JSON.stringify({
      FirstName: FirstName,
      LastNames: LastNames,
      District: District,
      PrimaryAddress: PrimaryAddress,
      PrimaryPhone: PrimaryPhone, 
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8', 
      'Access-Control-Allow-Origin': '*',
      'Authorization': "Bearer " + Auth_Bearer,
    },
  })
    .then((response) => {
      windows.loca
    })
    .then((json) => console.log(json))

});
  
 
  

 function crearForm() { 

   document.getElementById("tabla-listar").style.display = "none";
   document.getElementById("tabla-crear").style.display = "block";

 };

 // DELETE


 $(document).on("click", ".btn-delete", function (event) {

   var _this = $(this).attr("data-id");
   console.log("id: ", _this);

   const response = fetch(
     "https://cors-anywhere.herokuapp.com/" + urlCustomers + "?id=" + _this, {
       method: 'DELETE',
       headers: {
         "Access-Control-Allow-Origin": "*",
         "Authorization": "Bearer " + Auth_Bearer,
       }
     });
 });