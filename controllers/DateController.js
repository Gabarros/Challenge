
class DateController{

    verifyDayOfTheWeek(date){

        let dateObject = new Date(date);
        let day = dateObject.getDay();

        if(day == 0 || day == 6){
            // Final de semana
            // console.log('Final de semana ')
            return 1;
        }else{
            // Dia da semana
            // console.log('dia da semana')
            return 0;
        }

    }
}

module.exports = DateController;

