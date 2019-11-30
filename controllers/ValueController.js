const ClientController = require('./ClientController');
const HotelController = require('./HotelController');

let hotelList = new HotelController().hotelList;
let clientList = new ClientController().clientsList;

console.log(clientList);

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

    let type = client.clientType;

    let workDaysTotal = client.workDays * hotel.workDaysValue[type];
    
    let weekendDaysTotal = client.weekendDays * hotel.weekendDaysValue[type];

    let total = workDaysTotal + weekendDaysTotal;

    let hotelCost = {
        name: hotel.name,
        classification: hotel.classification,
        total
    }
    return hotelCost;

}

function compareHotelCosts(hotelCostsList){
    let betterValue = new Object;
    betterValue = hotelCostsList[0];

    for(let i of hotelCostsList){
       
        if(i.total < betterValue.total){
            betterValue = i;
        }else if(i.total == betterValue.total){

            if(i.classification > betterValue.classification){
                betterValue = i;
            }
        }
        
    }

    return betterValue;

}

let hotelCostsList = verifyHotelListCosts(clientList[0], hotelList);
let betterValue = compareHotelCosts(hotelCostsList);
console.log(hotelCostsList);
console.log(betterValue);
