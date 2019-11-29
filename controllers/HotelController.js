const Hotel = require('../models/Hotel');

class HotelController{

    createNewHotel(name, classification, workweekDaysTax, weekendDays){

        new Hotel(name, classification, workweekDaysTax, weekendDays);
    }
}