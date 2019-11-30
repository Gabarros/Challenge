const ClientController = require('./ClientController');
const HotelController = require('./HotelController');

let hotelList = new HotelController().hotelList;

// console.log(hotelList);

let testClient = {
    clientType: 'regular',
    workdays: 5,
    weekendDays: 2
}

function verifyHotelListCosts(client, hotelList){
    let hotelIndividualCosts = [];

    hotelList.forEach(hotel => {
        // console.log('Hotel:',hotel);
        let hotelCost = calculateHotelCost(client, hotel);
        hotelIndividualCosts.push(hotelCost);
        
    });

    return hotelIndividualCosts;
}


function calculateHotelCost(client, hotel){
    // console.log('hotel cost', hotel);

    let type = client.clientType;

   

    let workDaysTotal = client.workdays * hotel.workDaysValue[type];
    
    let weekendDaysTotal = client.weekendDays * hotel.weekendDaysValue[type];

    let total = workDaysTotal + weekendDaysTotal;

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

// console.log(hotelCostsList);
