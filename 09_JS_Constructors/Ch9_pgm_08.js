var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var dateString = this.startDate + " - (" + this.startTime + " - " + this.endTime + ")";
        console.log(this.title + ": " + dateString);
    };
};

var calEvent1 = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

calEvent1.showEvent(); // Output: Annual Review: 3/5/16 - (4.00pm - 5.00pm)

/* Further Adventures */
// 1) Add a second event.
var calEvent2 = new CalendarEvent(
    "Team Meeting",
    "3/6/16",
    "10.00am",
    "11.00am"
);

// 2) Call the showEvent method on your new calendar event.
calEvent2.showEvent(); // Output: Team Meeting: 3/6/16 - (10.00am - 11.00am)




/* Further Adventures
 *
 * 1) Add a second event.
 *
 * 2) Call the showEvent method on your
 *    new calendar event.
 *
 * 3) Update the showEvent method so that
 *    its output looks like this:
 *    Annual Review: 3/5/16 - (4.00pm - 5.00pm)
 *
 */