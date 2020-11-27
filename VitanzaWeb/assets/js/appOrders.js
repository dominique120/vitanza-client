function traer() { 

    document.getElementById("tabla-listar").style.display = "block";
    document.getElementById("tabla-crear").style.display = "none";
  
   }
   // LISTAR
   
   fetch(proxyurl + urlOrders, {
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
  .then(ordenes => {
    tabla(ordenes);
    console.log(ordenes);
    
  });
  
  function tabla(ordenes) {

 
    contenido.innerHTML = ''
    for (let orden of ordenes) {


        if (orden.hasOwnProperty("DateDelivered") && orden.hasOwnProperty("Notes")) {
            contenido.innerHTML += `
            
        
           <tr>
                <th scope="row">${orden.OrderId_uuid.slice(-8)}</th>  
                <td>${orden.DatePlaced} </td> 
                <td>${orden.DateDelivered}</td>
                <td>${orden.Notes}</td>
                <td>${orden.Delivered ? "Entregado" : "No Entregado" }</td>
            </tr>
            
            `
        } 

        else if (orden.hasOwnProperty("DateDelivered") && !orden.hasOwnProperty("Notes")){
            contenido.innerHTML += `
            
        
            <tr>
                 <th scope="row">${orden.OrderId_uuid.slice(-8)}</th>  
                 <td>${orden.DatePlaced} </td> 
                 <td>${orden.DateDelivered}</td>
                 <td>No se registra</td>
                 <td>${orden.Delivered ? "Entregado" : "No Entregado" }</td>
             </tr>
             
             `
        }

        else if (orden.hasOwnProperty("Notes") && !orden.hasOwnProperty("DateDelivered")){
            contenido.innerHTML += `
            
        
            <tr>
                 <th scope="row">${orden.OrderId_uuid.slice(-8)}</th>  
                 <td>${orden.DatePlaced } </td>  
                 <td>No se registra</td>
                 <td>${orden.Notes}</td>
                 <td>${orden.Delivered ? "Entregado" : "No Entregado" }</td>
             </tr>
             
             `
        }

        else {
            contenido.innerHTML += `
            
        
            <tr>
                <th scope="row">${orden.OrderId_uuid.slice(-8)}</th>  
                <td>${orden.DatePlaced } </td>  
                 <td>No se registra</td>
                 <td>No se registra</td>
                 <td>${orden.Delivered ? "Entregado" : "No Entregado" }</td>
            </tr>
             
             `

        } 
    }
}
   
  // CREAR
   
   
  $(document).on("click", ".btn-crear", function (event) {
    console.log("abc");
  
  //event.preventDefault()
   
    var ProductName = document.getElementById('ProductName').value
    var ProductDescription = document.getElementById('ProductDescription').value
    var AvailableStock = document.getElementById('AvailableStock').value
    var Price = document.getElementById('Price').value 
  
  
    fetch(proxyurl + urlOrders, {
      method: 'POST', 
      body: JSON.stringify({ 
        ProductName: ProductName,
        ProductDescription: ProductDescription,
        AvailableStock: AvailableStock,
        Price: Price, 
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8', 
        'Access-Control-Allow-Origin': '*',
        'Authorization': "Bearer " + Auth_Bearer,
      },
    })
    .then((response) => response.json())  
      .then((json) => console.log(json));
      alert('Enviado');
      window.location.href='Orders.html';  
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
       proxyurl + urlOrders + "?id=" + _this, {
         method: 'DELETE',
         headers: {
           "Access-Control-Allow-Origin": "*",
           "Authorization": "Bearer " + Auth_Bearer,
         }
       });
       window.location.href='Orders.html';

   });