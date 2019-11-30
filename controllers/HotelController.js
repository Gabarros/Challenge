const Hotel = require('../models/Hotel')

class HotelController {

    constructor() {
        let hotelsList = [];

        let testHotel = {
            name: 'lakewood',
            classification: 3,
            workdaysValue: {
                regular: 110,
                rewards: 80
            },
            weekendDaysValue: {
                'regular': 90,
                'rewards': 80
            }

        }

        let testHotel2 = {
            name: 'bridgewood',
            classification: 3,
            workdaysValue: {
                regular: 160,
                rewards: 110
            },
            weekendDaysValue: {
                'regular': 60,
                'rewards': 50
            }

        }

        let testHotel3 = {
            name: 'ridgewood',
            classification: 3,
            workdaysValue: {
                regular: 220,
                rewards: 100
            },
            weekendDaysValue: {
                'regular': 150,
                'rewards': 40
            }

        }
    }

    static createHotel(name, classification, workweekDaysTax, weekendDays) {

        let hotel = new Hotel(name, classification, workweekDaysTax, weekendDays);

        this.hotelsList.push(hotel);
    }

    static getHotelsList() {
        return this.hotelsList;
    }


}

module.exports = HotelController;