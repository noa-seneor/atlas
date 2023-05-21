import { doApi, getNameByCode, createCountryByCode } from "./countryManager.js";

export default class Country{
    constructor(_parent, _item){
        this.parent = _parent;
        this.name = _item.name.common;
        this.pop = _item.population.toLocaleString();
        this.region = _item.region;
        this.languages = _item.languages;
        this.coin = Object.values(_item.currencies)[0];
        this.capital = _item.capital;
        this.borders= _item.borders;
        console.log(this.borders)
        this.flag = _item.flags.png;
        this.location = _item.latlng;

        this.code = _item.ccn3;
    }

    render(){
        document.querySelector(this.parent).className = `container col-lg-8 col-sm-10`;
        let div = document.createElement("div");
        document.querySelector(this.parent).append(div);
        div.className = "m-4 mx-auto p-4 overflow-hidden";
        div.style = "background:  rgba(255, 255, 255, 0.885); border-radius: 20px;"

        div.innerHTML = `
        <div class="imgFlag col-md-6 col-sm-10  float-md-start p-0">
        <img style="border-radius: 5px;" src="${this.flag}" alt="${this.name}" class="w-100 h-100 " >
        </div>
        <div class="text-center pt-4">
        <h1> ${this.name}</h1>
        <div> Population: ${this.pop} </div>
        <div> Region: ${this.region} </div>
        <div>Coin: ${this.coin.name + " " +  this.coin.symbol}</div>
        <div> Capital: ${this.capital} </div>
        
        <div> Languages: ${Object.values(this.languages).join(", ")} </div>
       
        </div>
        <div id="id_borders" class="col-12 mt-4 text-center"><strong>States with borders: </strong> </div>
       
       <iframe class="col-12 mt-4" style="border-radius: 5px;" height="400" src="https://maps.google.com/maps?q=${this.location[0]},${this.location[1]}&z=7&output=embed"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
       
         `
         if (this.borders) {
            this.borders.forEach(async (item) => {
                let name = await getNameByCode(item);
                let span = document.createElement("span");
                span.innerHTML = `<a href="#"> ${name}</a> `;
                document.querySelector("#id_borders").append(span);
                span.addEventListener("click", () => {
                  createCountryByCode(item);
                });
            });

      

    }
}

    renderMain(){
        let myDiv = document.createElement("div");
        myDiv.className = "box px-3 d-flex justify-content-center my-5 text-center";

        document.querySelector("#id_parent").append(myDiv);    
        myDiv.innerHTML += `
       <div class=" card preBox h-100" >
       <img style="border-radius: 12px;" src="${ this.flag}" class="bg-sucess p-2 card-img-top preImg shadow" transitiom="600ms" alt="${this.name}">
       <div class="card-body">
       <h5 class=" pnew card-text Mcard-text m-0 p-3"> ${this.name.toUpperCase()} </h5>
       </div>
       </div>
       `

       myDiv.addEventListener("click", () => {
        createCountryByCode(this.code);
    })

    }

}