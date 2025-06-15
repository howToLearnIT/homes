import { Injectable } from "@angular/core";
import { HOUSE_LIST } from "../constants";
import { House } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class HouseService {
    private readonly houseList = HOUSE_LIST;

    getHouseList(): House[] {
        return this.houseList;
    }

    getHouseById(id: number): House | undefined {
        return this.houseList.find(({id: currentId}) => currentId === id);
    }
}