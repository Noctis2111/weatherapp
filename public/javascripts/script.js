var mymap = L.map('worldmap', 
      {
       center: [48.866667, 2.333333],//cordonner de Paris
       zoom: 4 // niveau de zoom de 0 a 19
      }
      );


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);


var customIcon = L.icon({
  iconUrl: '../images/leaf-green.png',
  shadowUrl: '../images/leaf-shadow.png',
  iconSize:   [38, 95], 
  shadowSize:  [50, 64], 

  iconAnchor:  [22, 94], 
  shadowAnchor: [4, 62], 
    
  popupAnchor: [-3, -76]
});


var ville = document.getElementsByClassName('city');
for  (var i = 0 ; i< ville.length; i++){
    
    console.log("viiiiiiile",ville[i].dataset.cityname)
    console.log("viiiiiiile",ville[i].dataset.lon)
    L.marker([ville[i].dataset.lat,ville[i].dataset.lon],{icon: customIcon}).addTo(mymap).bindPopup(ville[i].dataset.cityname);
}




/*var customIcon = L.icon({
  iconUrl: 'leaf-green.png',
  shadowUrl: 'leaf-shadow.png',

  iconSize:   [38, 95], 
  shadowSize:  [50, 64], 

  iconAnchor:  [22, 94], 
  shadowAnchor: [4, 62], 
    
  popupAnchor: [-3, -76]
});*/
/*L.marker([48.858370, 2.294481]).addTo(mymap).bindPopup('La Tour Eiffel');*/


/*var circle = L.circle(
  [48.858370, 2.294481], 
  {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.2,
  radius: 500
  }
 ).addTo(mymap);



var polygon = L.polygon([
  [48.858370, 2.294481],
  [48.873791, 2.295027],
  [48.865633, 2.321235]
]).addTo(mymap);*/



mymap.on('click',function onMapClick(e){
    console.log(e.latlng);
    
    L.marker([e.latlng.lat,e.latlng.lng]).addTo(mymap)
})
