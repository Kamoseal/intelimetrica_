ceroB = document.getElementById('ceroB');
oneB = document.getElementById('oneB');
twoB = document.getElementById('twoB');
threeB = document.getElementById('threeB');
fourB = document.getElementById('fourB');
info = document.getElementById('info');

//Name URL
const requesURL = 'https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json';
//creating object
const request = new XMLHttpRequest();
//application with open method
request.open('GET', requesURL);
//programming the responseType to JSON
request.responseType = 'json';
//it becomes second plane to JS by the send method
request.send();
//waiting for the response to restart from the server to handle it
request.onload = function() {
    const dataRestaurant = request.response;
    console.log(dataRestaurant);

    
    dataRestaurant.forEach(arrayRestaurant => {
       // console.log(arrayRestaurant);   
        const cero = arrayRestaurant.rating === 0;
        const one = arrayRestaurant.rating === 1; 
        const two = arrayRestaurant.rating === 2;
        const three = arrayRestaurant.rating === 3;
        const four = arrayRestaurant.rating === 4;
        const id = arrayRestaurant.id;
        const rating = arrayRestaurant.rating;
        const name = arrayRestaurant.name;
        const site = arrayRestaurant.contact.site;
        const email = arrayRestaurant.contact.email;
        const phone = arrayRestaurant.contact.phone;
        const street = arrayRestaurant.address.street;
        const city = arrayRestaurant.address.city;
        const state = arrayRestaurant.address.state;
        const lat = arrayRestaurant.address.location.lat;
        const ing = arrayRestaurant.address.location.ing; 
        templateCero = ``
        templateOne = ``
        templateTwo = ``
        templateThree = ``
        templateFour = ``
        
         function resultRaitignCero() {
            if (cero === true)
            //return arrayRestaurant;
            ceroB.addEventListener("click",function(e) {
                e.preventDefault();
                templateCero += `<p>${name}</p>
                <p>${city}</p>
                <p>${state}</p>
                <p>${street}</p>
                <p>${phone}</p>
                <p>${site}</p>
                <p>${email}</p>`;
                
                info.innerHTML = templateCero;
                console.log(templateCero);       
            })     
         }

         function resultRaitigOne() {   
            if (one === true)
            //return arrayRestaurant;
            oneB.addEventListener("click",function(e) {
                e.preventDefault();
                templateOne += `<div><p>${name}</p>
                <p>${city}</p>
                <p>${state}</p>
                <p>${street}</p>
                <p>${phone}</p>
                <p>${site}</p>
                <p>${email}</p></div>`;
                
                info.innerHTML = templateOne;
                console.log(templateOne);       
            })     
         }

         function resultRaitigTwo() {   
            if (two === true)
            //return arrayRestaurant;
            twoB.addEventListener("click",function(e) {
                e.preventDefault();
                templateTwo += `<div><p>${name}</p>
                <p>${city}</p>
                <p>${state}</p>
                <p>${street}</p>
                <p>${phone}</p>
                <p>${site}</p>
                <p>${email}</p></div>`;
                
                info.innerHTML = templateTwo;
                console.log(templateTwo);       
            })     
         }

         function resultRaitigThree() {   
            if (three === true)
            //return arrayRestaurant;
            threeB.addEventListener("click",function(e) {
                e.preventDefault();
                templateThree += `<div><p>${name}</p>
                <p>${city}</p>
                <p>${state}</p>
                <p>${street}</p>
                <p>${phone}</p>
                <p>${site}</p>
                <p>${email}</p></div>`;
                
                info.innerHTML = templateThree;
                console.log(templateThree);       
            })     
         }

         function resultRaitigFour() {   
            if (four === true)
            //return arrayRestaurant;
            fourB.addEventListener("click",function(e) {
                e.preventDefault();
                templateFour += `<div><p>${name}</p>
                <p>${city}</p>
                <p>${state}</p>
                <p>${street}</p>
                <p>${phone}</p>
                <p>${site}</p>
                <p>${email}</p></div>`;
                
                info.innerHTML = templateFour;
                console.log(templateFour);       
            })     
         }
        resultRaitignCero();
        resultRaitigOne();
        resultRaitigTwo();
        resultRaitigThree();
        resultRaitigFour();  
    }) 

    t =``
    let arrayBase = [];
    dataRestaurant.forEach(names => {
        const newArray = names.name; 
        arrayBase.push(newArray);    
    });
    arrayBase.sort();
    console.log(arrayBase);
    

    o = dataRestaurant.map(function(k) {
        l= k.name;
        console.log(
         Object.assign(k,{arrayBase:l})
         );
        
    }) 
    
} 
        
        
    
