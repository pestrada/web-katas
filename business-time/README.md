## Business Time

It's often assumed that holidays start and end at midnight. In real business, this is not the case. For this task we are creating a function to add or subtract time, respecting a holiday.


You must implement `addBusinessTime(holiday, time, duration)`. This function returns a Date object calculated by adding duration to time, skipping over the holiday.
- `time` is a [`Date` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `duration` is an integer number of seconds, positive or negative
- `holiday` is an object: `{start: <Date>, end: <Date>}`
- You can assume the holiday ends after it starts
- Don't worry about timezones. Assume all dates are local time
- You can use Google for help

```js
function addBusinessTime(holiday, time, duration) {
  /*
    Your implementation
  */
  
  // Returns a Date object
}
```


An example execution of your function:
```js
// Christmas 2019, 9pm Dec 24th to 9pm Dec 25th
const holiday = {
  start: new Date('2019-12-24T21:00:00'),
  end: new Date('2019-12-25T21:00:00')
};

addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60) // returns 2019-12-01T01:00:00
addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60) // returns 2019-12-25T21:30:00
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1) // returns 2019-12-24T20:59:59

```