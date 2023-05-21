import Country from "./countryClass.js";

export const doApi = async (_input) => {
    let url = (`https://restcountries.com/v3.1/name/${_input}`);
    try {
        let resp = await fetch(url);
        if (resp.status==404)
            document.querySelector("#id_parent").innerHTML = `<h3 style="color: white; padding-top: 50px; width: 100%;" >Country ${_input} is not found </h3>`;
    else{
        let data = await resp.json();
        console.log(data)
        createContry(data);
    }


    }
    catch(err){
        console.log(err);
        alert("There problem, come back later");
      }
}

export const getNameByCode = async (_code) => {
    let url = (`https://restcountries.com/v3.1/alpha/${_code}`);
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data)
        let country = new Country("#id_parent", data[0]);
        console.log(country);
        return country.name;


    }
    catch(err){
        console.log(err);
        alert("There problem, come back later");
      }
}


export const createMain = (_arr) => {
document.querySelector("#id_parent").className = "col-md-10 col-sm-12 mx-auto p-5 row row-cols-lg-3 row-cols-md-2 justify-content-around"
document.querySelector("#id_parent").innerHTML = '';
   _arr.forEach(country_name =>
   getFlag(country_name)
   );
        
}

const getFlag = async (_country) => {
    let url = (`https://restcountries.com/v3.1/name/${_country}`);
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data)
        let country = new Country("#id_parent", data[0]);
        console.log(country);
        country.renderMain();


    }
    catch(err){
        console.log(err);
        alert("There problem, come back later");
      }
    
}

export const createCountryByCode = async (_input) => {
    let url = (`https://restcountries.com/v3.1/alpha/${_input}`);
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data)
        createContry(data);


    }
    catch(err){
        console.log(err);
        alert("There problem, come back later");
      }
}

const createContry = (_country) => {
    document.querySelector("#id_parent").innerHTML = "";

    if (_country.length <= 1){
        let country = new Country("#id_parent", _country[0]);
        country.render();
    }
    else {
        console.log(_country)
        console.log(_country.length)
        document.querySelector("#id_parent").className = "col-md-10 mx-auto p-5 row row-cols-lg-3 row-cols-md-2 justify-content-around"
        _country.forEach(c => new Country("#id_parent",c).renderMain())
    }
}