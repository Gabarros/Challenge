
class DateController{

    verifyDayOfTheWeek(date){

        let dateObject = new Date(date);
        let day = dateObject.getDay();

        if(day == 0 || day == 6){
            // Final de semana
            console.log('Final de semana ')
        }else{
            // Dia da semana
            console.log('dia da semana')
        }

    }
}

module.exports = DateController;

let date = new DateController();

date.verifyDayOfTheWeek("01Dec2019")