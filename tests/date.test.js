const DateController = require('../controllers/DateController');
let date = new DateController();

test('pass a weekend date and get weekend as response', () => {
    expect(date.verifyDayOfTheWeek('01Dec19')).toBe('weekend');
    expect(date.verifyDayOfTheWeek('30Nov19')).toBe('weekend');
    
});

test('pass a workday date and get workday as response', () => {
    expect(date.verifyDayOfTheWeek('04Dec19')).toBe('workday');
    expect(date.verifyDayOfTheWeek('02Dec19')).toBe('workday');
    
});