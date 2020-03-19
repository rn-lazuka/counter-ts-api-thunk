import axios from "axios";
import {ICurrentValue} from "../entities/entities";


const instance = axios.create({
    baseURL: "http://localhost:3004/counter"
});

export const api = {
    getCurrentValue() {
        return instance.get("").then(res => {
            return res.data.currentValue
        })
    },
    incCurrentValue(newValue:ICurrentValue) {
        return instance.put("",newValue).then(res => {
            return res.data.currentValue
        })
    }
}