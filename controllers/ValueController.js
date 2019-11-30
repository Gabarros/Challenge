const HotelController = require('./HotelController');
const ClientController = require('./ClientController');


let testClient = {
    clientType: 'regular',
    workdays: 5,
    weekendDays: 2
}


function calculateHotelCost(client, hotel){
    let type = client.clientType;
   
    let workdaysTotal = client.workdays * hotel.workdaysValue[type];
    
    let weekendDaysTotal = client.weekendDays * hotel.weekendDaysValue[type];

    let total = workdaysTotal + weekendDaysTotal;

    let hotelCost = {
        name: hotel.name,
        total
    }
    return hotelCost;

}

function compareHotelCosts(hotels){
    let betterValue = new Object();
    for(let i of hotels){
        if(i.cost)
    }

}

let value = calculateHotelCost(testClient, testHotel);
console.log(value.name);
