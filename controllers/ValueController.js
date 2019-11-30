const ClientController = require('./ClientController');
const HotelController = require('./HotelController');

let hotelList = new HotelController().hotelList;

console.log(hotelList);

let testClient = {
    clientType: 'regular',
    workdays: 5,
    weekendDays: 2
}

function verifyHotelListCosts(client, hotelList){
    let hotelIndividualCosts = [];

    hotelList.forEach(hotel => {
        let hotelCost = calculateHotelCost(client, hotel);
        hotelIndividualCosts.push(hotelCost);
        
    });

    return hotelIndividualCosts;


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

function compareHotelCosts(hotelCostsList){
    let betterValue = new Object();
    for(let i of hotels){
        
    }

}

let hotelCostsList = verifyHotelListCosts(testClient, hotelList);
// compareHotelCosts(hotelCostsList);

console.log(hotelCostsList);
