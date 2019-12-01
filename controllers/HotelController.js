const Hotel = require('../models/Hotel')

class HotelController {
    hotelList = new Array;
   
    constructor() {
        
        let testHotel = {
            name: 'lakewood',
            classification: 3,
            workDaysValue: {
                regular: 110,
                rewards: 80
            },
            weekendDaysValue: {
                regular: 90,
                rewards: 80
            }
             
        }
        this.createHotel(testHotel);

        testHotel = {
            name: 'bridgewood',
            classification: 4,
            workDaysValue: {
                regular: 160,
                rewards: 110
            },
            weekendDaysValue: {
                regular: 60,
                rewards: 50
            }
        }

        this.createHotel(testHotel);

        testHotel = {
            name: 'ridgewood',
            classification: 5,
            workDaysValue: {
                regular: 220,
                rewards: 100
            },
            weekendDaysValue: {
                regular: 150,
                rewards: 40
            }
        }
        this.createHotel(testHotel);

    }

    createHotel({ name, classification, workDaysValue, weekendDaysValue }) {
  
        let hotel = new Hotel(name, classification, workDaysValue, weekendDaysValue);
        this.hotelList.push(hotel);
         
    }

    getHotelsList() {
        return this.hotelList;
    }
}

module.exports = HotelController;
