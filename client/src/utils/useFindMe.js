import React, {useState} from "react"
function useFindMe() {
    const [coord, setCoord] = useState()
      function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCoord({latitude, longitude})
      }
      function error() {
        console.log('Unable to retrieve your location');
      }
      if(!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
      } else {
        
            console.log('Locating…');
        navigator.geolocation.getCurrentPosition(success, error);
      }
      return {
          coord
      }
    }
    export default useFindMe;