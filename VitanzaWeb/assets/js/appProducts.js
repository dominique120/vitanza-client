function traer() { 

    document.getElementById("tabla-listar").style.display = "block";
    document.getElementById("tabla-crear").style.display = "none";
  
   }
   // LISTAR
   
   fetch(proxyurl + urlProducts, {
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
  .then(productos => {
    tabla(productos);
    console.log(productos);
    
  });
  
  function tabla(productos) {
 
     
    contenido.innerHTML = ''
    for (let producto of productos) {
        contenido.innerHTML += `
            
        
           <tr>
                <th scope="row">${producto.ProductId_uuid.slice(-8)}</th>  
                <td>${producto.ProductName } </td> 
                <td>${producto.ProductDescription}</td> 
                <td>${producto.AvailableStock}</td>
                <td>${producto.Price}</td> 
                <td>
                            
                <a href="javascript:void(0);" class="btn-delete"  data-id="${producto.ProductId_uuid}">Eliminar</a></td> 

                </tr>
            
            `
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
  
  
    fetch(proxyurl + urlProducts, {
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
      window.location.href='Products.html';  
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
       proxyurl + urlProducts + "?id=" + _this, {
         method: 'DELETE',
         headers: {
           "Access-Control-Allow-Origin": "*",
           "Authorization": "Bearer " + Auth_Bearer,
         }
       });
       window.location.href='Products.html';

   });