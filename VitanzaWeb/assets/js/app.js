 let Auth_Bearer =
   "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXUyJ9.eyJleHAiOjE2MDY0NTYxMjcsImlhdCI6MTYwNjQyMDEyNywiaXNzIjoidnRzLXRlc3RpbmciLCJwYXNzd29yZCI6InBhc3N3b3JkIiwidXNlcm5hbWUiOiJ1c2VybmFtZSJ9.U6UJ79J1lCsR_9j2_ZUtJsGpWWFVWV9rSM7hSmhk2ZSBQkBsYqHiYxZDXINVoV9Na0cRe_r8cEhtZsYL7Af2Iw";
 const proxyurl = "https://cors-anywhere.herokuapp.com/";
 const urlCustomers = "http://190.238.243.118/vts/api/v1/customers";

 var contenido = document.querySelector('#contenido')

 function traer() {

  document.getElementById("tabla-listar").style.display = "block";
  document.getElementById("tabla-crear").style.display = "none";


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

 }
 // LISTAR


 function tabla(clientes) {
   console.log(clientes) 
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

 function crearForm() {


   document.getElementById("tabla-listar").style.display = "none";
   document.getElementById("tabla-crear").style.display = "block";

 };

 // DELETE


 $(document).on("click", ".btn-delete", function (event) {

   var _this = $(this).attr("data-id");
   console.log("id: ", _this);

   const response = fetch(
     "https://cors-anywhere.herokuapp.com/http://190.238.243.118/vts/api/v1/customers?id=" + _this, {
       method: 'DELETE',
       headers: {
         "Access-Control-Allow-Origin": "*",
         "Authorization": "Bearer " + Auth_Bearer,
       }
     });
 });