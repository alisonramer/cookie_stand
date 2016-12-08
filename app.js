'use strict';

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global variables linking to HTML

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];
var allStores = [];
var cookiesTable = document.getElementById('cookiesjs');
var store_form = document.getElementById('store_form');

//This is the constructor function (the mold) //

function Store(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust){
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randCustPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookieSales = 0;

  this.calcRandCustPerHour = function (){
    for (var i = 0; i < hoursOpen.length; i++) {
      this.randCustPerHour.push(Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour));
    console.log(this.randCustPerHour, 'customers per hour ');
  }
}
  this.calcCookiesPerHour = function () {
    this.calcRandCustPerHour();
    for (var j = 0; j < this.randCustPerHour.length; j++) {
      this.cookiesPerHour.push(Math.ceil(this.avgCookiesPerCust * this.randCustPerHour[j]))
      //cookies daily total//
      this.totalDailyCookieSales +=
      this.cookiesPerHour[j]
    }
    console.log(this.cookiesPerHour, 'cookies per hour ');
    console.log(this.totalDailyCookieSales, 'total daily cookie sales ');
  }
  this.render = function() {
    var storeRow = document.createElement('tr')
    var dataCell = document.createElement('td');
    dataCell.textContent = this.locationName;
    storeRow.appendChild(dataCell);

    for (var i = 0; i < hoursOpen.length; i++) {
      dataCell = document.createElement('td');
      dataCell.textContent = this.cookiesPerHour[i];
      storeRow.appendChild(dataCell);
    }
    dataCell = document.createElement('td');
    dataCell.textContent = this.totalDailyCookiesSold;
    storeRow.appendChild(dataCell);
    cookiesTable.appendChild(storeRow);
  }

  this.calcCookiesPerHour();
}

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('Sea Tac Airport', 3, 23, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// Push stores to allstore array
allStores.push(firstAndPike);
allStores.push(seaTacAirport);
allStores.push(seattleCenter);
allStores.push(capitolHill);
allStores.push(alki);

//Table begins//
function header(){
//This makes the row header//
  var trEl = document.createElement('tr');
  var blankthEl = document.createElement('th');
  trEl.appendChild(blankthEl);

  //populates the row header with hours//
  for (var i = 0; i < hoursOpen.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hoursOpen[i];
    trEl.appendChild(thEl);
  }
  // need to add the daily total location column//
  var dailyTotalthEl = document.createElement('th');
  dailyTotalthEl.textContent = 'Total';
  trEl.appendChild(dailyTotalthEl);
  cookiesTable.appendChild (trEl);
}


function storeRow() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}


function footerRow(){
//creates total data and pins it to the footerRow//
  var footerRow = document.createElement('tr');
  var totalData = document.createElement('td');
  totalData.textContent = 'totals'
  footerRow.appendChild(totalData);

  for (var i = 0; i < allStores[1].totalDailyCookieSales.length; i++) {

    for (var x = 0; x < allStores.length; x++) {
      allStores += allStores[x].totalDailyCookieSales[x];

    }
    totalData = document.createElement('td');
    totalData.textContent = allStores;
    footerRow.appendChild(totalData);
  }
}
  // footerRow();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function handleSubmit(event) {
  console.log('log_of_event');
  event.preventDefault();

  var store_name = event.target.store_name.value;
  var estimate_cookies_min = event.target.estimate_cookies_min.value;
  var estimate_cookies_max = event.target.estimate_cookies_max.value;
  var estimate_customers = event.target.estimate_customers.value;

  if (!store_name || !estimate_cookies_min ||!estimate_cookies_max || !estimate_customers) {
    return alert('Fields cannot be empty!');
  }

  var store = new Store(store_name, estimate_cookies_min, estimate_cookies_max, estimate_customers);

  allStores.push(store);

  cookiesTable.innerHTML = '';
  console.log('location');

  header();
  storeRow();
  footerRow();
}

header();
storeRow();
footerRow();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for comment submission form
store_form.addEventListener('submit', handleSubmit);
