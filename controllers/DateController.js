
class DateController{

    verifyDayOfTheWeek(date){

        let dateObject = new Date(date);
        let day = dateObject.getDay();
        
        if(day == 0 || day == 6){
            // Final de semana
            
            return 'weekend';
        }else{
            // Dia da semana
            
            return 'workday';
        }

    }
}

module.exports = DateController;

