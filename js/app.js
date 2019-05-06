const boxRating = document.getElementById("boxRating");

        
const data = ()=>{
    const url = "https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json"
    fetch(url)
    .then(response => response.json()).then(data=> dataJson (data));


    const dataJson = (function (data) {
        let ratingFilter = [];
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (ratingFilter.indexOf(element.rating) === -1) {
                ratingFilter.push(element.rating);
            }
            //Devuelve un array de los valores de rating
            //1,0,2,3,4
            //console.log(ratingFilter);
            //Devuelve el array en orden 
            //0,1,2,3,4
            //console.log(ratingFilter.sort());
            //Se guarda el valor de ratingFilter y se envia como parametro a la funcion paintRatings
            paintRatings(ratingFilter.sort());    
        }
    });

    const paintRatings = function (ratingFilter) {
        let template = ``
        ratingFilter.forEach(rating => {
            //Recorre el array y devuelve 
            //0
            //1
            //2
            //3
            //4
            //console.log(rating);
            template += `<li  class="nav-item active">
            <a class="nav-link ratingId" href="#">${rating}</a>
          </li>`;

        });
        boxRating.innerHTML= template;     }
};

    
data();

  
  