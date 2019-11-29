const Hotel = require('../models/Hotel');

class HotelController{

    constructor(){
        let hotelsList = [];
    }

    createNewHotel(name, classification, workweekDaysTax, weekendDays){

        let hotel = new Hotel(name, classification, workweekDaysTax, weekendDays);
        let name = hotel.name;


        this.hotelsList.push({name: hotel});
    }


}