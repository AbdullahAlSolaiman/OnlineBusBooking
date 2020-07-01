// listen to the click, once clicked, perform getUserName function.

document.getElementById("getUser")
.addEventListener('click', getUsername);

document.getElementById("getRoute")
.addEventListener('click', getRoutesInfo);


document.getElementById("login")
.addEventListener('submit', doLogin);

function getUsername(){

    fetch("users.json")
    .then((response_from_api) => response_from_api.json() )
    .then((data_from_json) => {

        //console.log(data_from_json)
        let output = '<h2>Users I got </h2>';
        data_from_json.forEach(function(user){

            output += `

            <ul>
            <li>UserId: ${user.id}</li>
            <li>UserName: ${user.name}</li>
            </ul>  
            `;
            document.getElementById("outputUsers").innerHTML = output;
        })
    })  
}


function getRoutesInfo(){

    fetch("routes.json")
    .then((response_from_api) => response_from_api.json() )
    .then((data_from_json) => {

        //console.log(data_from_json)
        let output = '<h2>Routes I got </h2>';
        

        // we loop through each route in the json file
        data_from_json.forEach(function(route){

            output += `
            Route No. ${route.id}
            <ul>
            <li>From: ${route.origin}</li>
            <li>To: ${route.destination}</li>
            <li>Date: ${route.date}</li>
            <li>Capacity: ${route.capacity}</li>
            
            </ul>  
            `;
            document.getElementById("outputRoutes").innerHTML = output;
        })
    })  
}


function doLogin(theEvent){
    theEvent.preventDefault();

    let title = document.getElementById("username").value;
    let body = document.getElementById("password").value;
    console.log("test");
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers: {
            'Accept' : 'application/json text/plain, */',
            'Content-type' : 'application/json'
        },
     body: JSON.stringify({title:title, body:body})
    })
    .then((response_from_api) => response_from_api.json())
    .then(data_from_json => {
        console.log("test");
        console.log(data_from_json);
        window.location.replace("dashboard.html");

    })

}