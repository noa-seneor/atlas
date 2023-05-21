import { doApi , createMain} from "./countryManager.js";
import { declareEvents, home_arr } from "./eventsView.js";


const init = () => {
    declareEvents(doApi);
    createMain(home_arr);
}

init();