const display = document.querySelector('#display');

function getLocation(){
    if(navigator.geolocation)
    {
         navigator.geolocation.watchPosition(showPosition);
    }
    else
    {
        display.innerHTML = 'Location service is not available on your Device!';
    }
}

function showPosition(position){
    display.innerHTML = 'Latitude: '+ position.coords.latitude + '<br/> Longitude: '+ position.coords.longitude;
}
