'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];
console.log(hoursOpen);
var arrayLength = hoursOpen.length;
console.log(arrayLength);
var arraySum =
console.log(arraySum)


var alki = {
  locationName: 'alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  randCustPerHour: [],
  cookiesPerHour: [],
  totalDailyCookieSales: 0,


  calcRandCustPerHour: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      var solution1 = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      this.randCustPerHour.push(Math.ceil(solution1));
    }
    console.log(this.randCustPerHour, 'customers per hour');
  },

  calcCookiesPerHour: function () {
    this.calcRandCustPerHour();
    for (var i = 0; i < this.randCustPerHour.length; i++) {
      var solution2 = this.randCustPerHour[i] * this.avgCookiesPerCust;
      this.cookiesPerHour.push(Math.ceil(solution2));
      this.totalDailyCookieSales += (Math.ceil(solution2));
    }
    console.log(this.cookiesPerHour, 'cookies per hour');
    console.log(this.totalDailyCookieSales, 'total daily cookie sales');
  },

  render: function(){
    this.calcCookiesPerHour();
    var alkiCookieSalesList = document.getElementById('alki');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hoursOpen[i] + ' ' + this.cookiesPerHour[i];
      alkiCookieSalesList.appendChild(liElement);
    }
    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'total: ' + this.totalDailyCookieSales;
    alkiCookieSalesList.appendChild(liTotalElement);
}
}
alki.render();
