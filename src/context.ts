import {Container} from "typedi";
import axios from "axios";

export const AXIOS_CLIENT = 'AXIOS_CLIENT';

export function initDiContext() {
    Container.set(AXIOS_CLIENT, axios.create())
}