// Passing an array to a function


var getVisitorReport = function (visitorArray, dayInWeek) {
  var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};

var visitors = [354, 132, 210, 221, 481, 99, 150];


var report = getVisitorReport(visitors, 5);
console.log(report); 


var getMonthlyVisitorReport = function(monthArray, week, dayInWeek) {
  var weekArray = monthArray[week - 1];
  return getVisitorReport(weekArray, dayInWeek);
};


var week1 = [100, 200, 150, 250, 300, 180, 220];
var week2 = [110, 210, 160, 260, 310, 190, 230];
var week3 = [120, 220, 170, 270, 320, 200, 240];
var week4 = [130, 230, 180, 280, 330, 210, 250];

var month = [week1, week2, week3, week4];


var report1 = getMonthlyVisitorReport(month, 1, 1);
console.log(report1); 

var report2 = getMonthlyVisitorReport(month, 3, 4); 
console.log(report2);

var report3 = getMonthlyVisitorReport(month, 4, 7); 
console.log(report3); 




/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */