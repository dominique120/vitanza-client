 $(document).on("click", ".btn-login", function (event) {
     console.log("abc");

     //event.preventDefault()

     var username = document.getElementById('username').value
     var password = document.getElementById('password').value


     fetch(proxyurl + urlAuth, {
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

            urlIndex = "https://isil-ep05-grupo06.s3.amazonaws.com/Index.html",
            window.location.href=urlIndex;

         });
  


 });
