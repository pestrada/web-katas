let addBusinessTime = (holiday, time, duration) => {
    let timeMillis = time.getTime();
    let newDate = new Date(timeMillis);
    let holidayStartMillis = holiday.start.getTime();
    let holidayEndMillis = holiday.end.getTime();
    newDate.setSeconds(newDate.getSeconds() + duration);

    if (newDate.getTime() >= holidayStartMillis && timeMillis <= holidayEndMillis) {
        if (duration < 0) {
            newDate = new Date(holidayStartMillis);
            newDate.setSeconds(newDate.getSeconds() + duration);
        } else {
            if (timeMillis < holidayStartMillis) {
                let offset = (holidayStartMillis - timeMillis) / 1000;
                newDate = new Date(holidayEndMillis);
                newDate.setSeconds(newDate.getSeconds() + offset);
            } else {
                newDate = new Date(holidayEndMillis);
                newDate.setSeconds(newDate.getSeconds() + duration);
            }
        }
    }

    return newDate;
};

let assertEquals = (expected, actual) => {
    if (expected.getTime() == actual.getTime()) {
        console.log(`returns: ${expected}, success!`);
        return true;
    }
    console.log(`[Expected: ${expected}, but it was [actual]: ${actual}`);
};

// Christmas 2019, 9pm Dec 24th to 9pm Dec 25th
const holiday = {
    start: new Date('2019-12-24T21:00:00'),
    end: new Date('2019-12-25T21:00:00')
};

let test1 = addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60); // returns 2019-12-01T01:00:00
let test2 = addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1); // returns 2019-12-25T21:00:01
let test3 = addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60); // returns 2019-12-25T21:30:00
let test4 = addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1); // returns 2019-12-25T21:00:01
let test5 = addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1); // returns 2019-12-24T20:59:59

assertEquals(new Date('2019-12-01T01:00:00'), test1);
assertEquals(new Date('2019-12-25T21:00:01'), test2);
assertEquals(new Date('2019-12-25T21:30:00'), test3);
assertEquals(new Date('2019-12-25T21:00:01'), test4);
assertEquals(new Date('2019-12-24T20:59:59'), test5);