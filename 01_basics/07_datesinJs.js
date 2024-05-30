// Dates

let date = new Date();
console.log(typeof date); //object
console.log(date); //2024-05-30T18:53:04.078Z
console.log(date.toJSON()); // 2024-05-30T18:59:05.976Z
console.log(date.toString()); //Thu May 30 2024 23:53:04 GMT+0500
console.log(date.toLocaleString()); //30/05/2024, 11:56:03 pm
console.log(date.toUTCString()); //Thu, 30 May 2024 18:56:43 GMT
console.log(date.toDateString()); //Thu May 30 2024
console.log(date.getDate()); // Date: 30
console.log(date.getFullYear()); // Year: 2024
console.log(date.getMonth()); // Month: 4

// Create Specific Date
let specificDate = new Date("2024-01-30"); //Month starts in js from : 0 - 11
let specificDateFormat2 = new Date(23, 1, 2024); //Month starts in js from : 0 - 11let
console.log(specificDate.toDateString()); //Tue Jan 30 2024
console.log(specificDateFormat2.toDateString()); //Mon Jul 16 1928

// TimeStamps
let timestamp = Date.now();
console.log(timestamp); //1643723400000
console.log(specificDate.getTime()); // Get millisecond value from specific date

// Get Value in seconds or convert milliseconds to seconds
console.log(Date.now() / 1000); // Seconds but in decimal
console.log(Math.floor(Date.now() / 1000)); // Seconds but in without decimal

// LocalString
let dateLocalString = new Date();
console.log(
  dateLocalString.toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  })
);
