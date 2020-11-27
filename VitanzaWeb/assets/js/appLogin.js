 $(document).on("click", ".btn-login", function (event) {
     console.log("abc");

     //event.preventDefault()

     var username = document.getElementById('username').value
     var password = document.getElementById('password').value


     fetch(urlAuth, {
             method: 'POST',
             body: JSON.stringify({
                 username: username,
                 password: password,
             }),
             headers: {
                 'Content-type': 'application/json; charset=UTF-8',
                 'Access-Control-Allow-Origin': '*',
             },
         })
         .then(response => response.json())
         .then(key => {  
            const ApiKey = key.jwt;
            console.log("Esto es Key:  " + key.jwt);
            console.log("Esto es ApiKey:  " + ApiKey);

            window.localStorage.setItem('Key', ''+ApiKey+'');
            alert('Enviado');
            window.location.href='/VitanzaWeb/Index.html';

         });
  


 });
