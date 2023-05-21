export let home_arr = ['israel', 'usa', 'thailand', 'france','united kingdom'];
import { createMain } from "./countryManager.js";

export const declareEvents = (doApi) => {
    let id_input = document.querySelector("#id_input")
    let btn_Search = document.querySelector("#id_search_btn");
    let home_btn = document.querySelector("#id_logo");
   
    let USA = document.querySelector(`#id_usa`);
    USA.addEventListener("click", () => {
        doApi("usa");
    })
    let ISRAEL = document.querySelector(`#id_israel`);
    ISRAEL.addEventListener("click", () => {
        doApi('israel');
    })
    let UK = document.querySelector(`#id_uk`);
    UK.addEventListener("click", () => {
        doApi("united kingdom");
    })
    let FRANCE = document.querySelector(`#id_france`);
    FRANCE.addEventListener("click", () => {
        doApi("france");
    })
    let THAILAND = document.querySelector(`#id_thailand`);
    THAILAND.addEventListener("click", () => {
        doApi("thailand");
    })

   
    home_btn.addEventListener("click", () => {
        createMain(home_arr);
    })

    id_input.addEventListener("keypress", (e) => {
        
        if (e.key == 'Enter'){
            console.log("ICI");
        
            doApi(id_input.value);
        }

    })
    btn_Search.addEventListener("click", () => {
        
        console.log("PAR LA")
        doApi(id_input.value);
    })

   
}