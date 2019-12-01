const ClientController = require('./ClientController');
const HotelController = require('./HotelController');


let hotelList = new HotelController().hotelList;


function verifyHotelListCosts(client, hotelList) {
    let hotelIndividualCosts = new Array();
    let hotelCost = 0;

    hotelList.forEach(hotel => {
        
        hotelCost = calculateHotelCost(client, hotel);
        hotelIndividualCosts.push(hotelCost);
     
    });
    
    return hotelIndividualCosts;
}


function calculateHotelCost(client, hotel) {
    let total = 0;
    let type = client.clientType;

    let workDaysTotal = client.workDays * hotel.workDaysValue[type];

    let weekendDaysTotal = client.weekendDays * hotel.weekendDaysValue[type];
    
    total = workDaysTotal + weekendDaysTotal;
    let hotelCost = {
        name: hotel.name,
        classification: hotel.classification,
        total
    }
    

    return hotelCost;
    
}

function compareHotelCosts(hotelCostsList) {
    let betterValue = new Object;
    betterValue = hotelCostsList[0];

    for (let i of hotelCostsList) {

        if (i.total < betterValue.total) {
            betterValue = i;
        } else if (i.total == betterValue.total) {
            if (i.classification > betterValue.classification) {
                betterValue = i;
            }
        }

    }

    return betterValue;
}

function evaluate(client) {
    let hotelCostsList = verifyHotelListCosts(client, hotelList);
    let betterValue = compareHotelCosts(hotelCostsList);
    console.log(`Saída: ${betterValue.name}, Valor: ${betterValue.total}, Classificação: ${betterValue.classification}`);
    
}

function processClientList(clientList){
    clientList.forEach(client=>{
        evaluate(client);
    });

}

exports.processClientList = processClientList;




