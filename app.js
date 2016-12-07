'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];
// var arrayLength = hoursOpen.length;

// var locationName = [];
// var minCustPerHour = [];
// var maxCustPerHour = [];
// var avgCookiesPerCust = [];
// var randCustPerHour = [];
// var cookiesPerHour = [];
// var totalDailyCookieSales = 0;

//This is the constructor function -- the mold //
var allStores=[];
function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust, domId){
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.domId = domId;
  this.randCustPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookieSales = 0;

  allStores.push(this);
  console.log(allStores);

  this.calcRandCustPerHour = function (){
    for (var i = 0; i < hoursOpen.length; i++) {
      var solution1 = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      this.randCustPerHour.push(Math.ceil(solution1));
    }
    console.log(this.randCustPerHour, 'customers per hour ');
  }
  this.calcCookiesPerHour = function () {
    this.calcRandCustPerHour();
    for (var i = 0; i < this.randCustPerHour.length; i++) {
      var solution2 = this.randCustPerHour[i] * this.avgCookiesPerCust;
      this.cookiesPerHour.push(Math.ceil(solution2));
      this.totalDailyCookieSales += (Math.ceil(solution2));
    }
    console.log(this.cookiesPerHour, 'cookies per hour ');
    console.log(this.totalDailyCookieSales, 'total daily cookie sales ');
  }
  // this.render = function() {
    this.calcCookiesPerHour();
  //   var CookieSalesList = document.getElementById(this.domId);
  //   for (var i = 0; i < hoursOpen.length; i++) {
  //     var liElement = document.createElement('li');
  //     liElement.textContent = hoursOpen[i] + ' ' + this.cookiesPerHour[i];
  //     CookieSalesList.appendChild(liElement);
  //   }
  //   var liTotalElement = document.createElement('li');
  //   liTotalElement.textContent = 'total ' + this.locationName + ' ' + this.totalDailyCookieSales;
  //   CookieSalesList.appendChild(liTotalElement);
  //   console.log(this.render, 'Rendering')
  // }
}
new Store('1st and Pike', 23, 65, 6.3, 'pike' );
new Store('Sea Tac Airport', 3, 23, 1.2, 'seatac');
new Store('Seattle Center', 11, 38, 3.7, 'seattlecenter');
new Store('Capitol Hill', 20, 38, 2.3, 'capitolhill');
new Store('Alki', 2, 16, 4.6, 'alki');

//Table begins//
var cookiesTable = document.getElementById('cookiesjs');

//This makes the row//
var trEl = document.createElement('tr');
var blankthEl = document.createElement('th');
trEl.appendChild(blankthEl);

//populates the row with hours//
for (var i = 0; i < hoursOpen.length; i++) {

  var thEl = document.createElement('th');
  thEl.textContent = hoursOpen[i];
  trEl.appendChild(thEl);
}
// //need to add the daily total location column//

var dailyTotalthEl = document.createElement('th');
dailyTotalthEl.textContent = 'Total Location';
trEl.appendChild(dailyTotalthEl);
cookiesTable.appendChild (trEl);

// populates the table with allStores//
for (var i = 0; i < allStores.length; i++) {
  var bodytrEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = allStores[i].locationName;
  bodytrEl.appendChild(tdEl);

    for (var x = 0; x < allStores[i].cookiesPerHour.length; x++) {
      var tdElData = document.createElement('td');
      tdElData.textContent = allStores[i].cookiesPerHour[x];
      bodytrEl.appendChild(tdElData);

    }
    cookiesTable.appendChild(bodytrEl);
}


//   thEl.textContent = totalDailyCookieSales[i]
// //need to add the store name column//
// for (var i = 0; i < array.length; i++) {
//
//   thEl.textContent = totalDailyCookieSales[i]
// }


//
