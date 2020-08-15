export const Apicall = () =>{
    return fetch(`https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572`,{
        method:"GET"
    }).then(response =>{
        return response.json();
    }).catch( error => console.log("error catched"))}


export const ipwhois = (IP) =>{
    return fetch(`http://ipwhois.app/json/${IP}`,{
        method:"GET"
    }).then(response =>{
        return response.json();
    }).catch( error => console.log("error catched"))}


