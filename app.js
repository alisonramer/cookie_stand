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
    console.log(this.randCustPerHour, 'customers per hour alki');
  },

  calcCookiesPerHour: function () {
    this.calcRandCustPerHour();
    for (var i = 0; i < this.randCustPerHour.length; i++) {
      var solution2 = this.randCustPerHour[i] * this.avgCookiesPerCust;
      this.cookiesPerHour.push(Math.ceil(solution2));
      this.totalDailyCookieSales += (Math.ceil(solution2));
    }
    console.log(this.cookiesPerHour, 'cookies per hour alki');
    console.log(this.totalDailyCookieSales, 'total daily cookie sales alki');
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
    liTotalElement.textContent = 'total Alki: ' + this.totalDailyCookieSales;
    alkiCookieSalesList.appendChild(liTotalElement);
  }
}
alki.render();

//First and Pike//
var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randCustPerHour: [],
  cookiesPerHour: [],
  totalDailyCookieSales: 0,


  calcRandCustPerHour: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      var solution1 = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      this.randCustPerHour.push(Math.ceil(solution1));
    }
    console.log(this.randCustPerHour, 'customers per hour first and pike');
  },

  calcCookiesPerHour: function () {
    this.calcRandCustPerHour();
    for (var i = 0; i < this.randCustPerHour.length; i++) {
      var solution2 = this.randCustPerHour[i] * this.avgCookiesPerCust;
      this.cookiesPerHour.push(Math.ceil(solution2));
      this.totalDailyCookieSales += (Math.ceil(solution2));
    }
    console.log(this.cookiesPerHour, 'cookies per hour first and pike');
    console.log(this.totalDailyCookieSales, 'total daily cookie sales first and pike');
  },

  render: function(){
    this.calcCookiesPerHour();
    var firstAndPikeCookieSalesList = document.getElementById('first and Pike');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hoursOpen[i] + ' ' + this.cookiesPerHour[i];
      firstAndPikeCookieSalesList.appendChild(liElement);
    }
    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'total first and pike: ' + this.totalDailyCookieSales;
    firstAndPikeCookieSalesList.appendChild(liTotalElement);
  }
}
firstAndPike.render();

var SeaTac = {
  locationName: 'SeaTac',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  randCustPerHour: [],
  cookiesPerHour: [],
  totalDailyCookieSales: 0,

  calcRandCustPerHour: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      var solution1 = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      this.randCustPerHour.push(Math.ceil(solution1));
    }
    console.log(this.randCustPerHour, 'customers per hour SeaTac');
  },

  calcCookiesPerHour: function () {
    this.calcRandCustPerHour();
    for (var i = 0; i < this.randCustPerHour.length; i++) {
      var solution2 = this.randCustPerHour[i] * this.avgCookiesPerCust;
      this.cookiesPerHour.push(Math.ceil(solution2));
      this.totalDailyCookieSales += (Math.ceil(solution2));
    }
    console.log(this.cookiesPerHour, 'cookies per hour SeaTac');
    console.log(this.totalDailyCookieSales, 'total daily cookie sales SeaTac');
  },

  render: function(){
    this.calcCookiesPerHour();
    var SeaTacCookieSalesList = document.getElementById('SeaTac');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hoursOpen[i] + ' ' + this.cookiesPerHour[i];
      SeaTacCookieSalesList.appendChild(liElement);
    }
    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'total SeaTac: ' + this.totalDailyCookieSales;
    SeaTacCookieSalesList.appendChild(liTotalElement);
  }
}
SeaTac.render();

var SeattleCenter = {
  locationName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  randCustPerHour: [],
  cookiesPerHour: [],
  totalDailyCookieSales: 0,


  calcRandCustPerHour: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      var solution1 = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      this.randCustPerHour.push(Math.ceil(solution1));
    }
    console.log(this.randCustPerHour, 'customers per hour Seattle Center');
  },

  calcCookiesPerHour: function () {
    this.calcRandCustPerHour();
    for (var i = 0; i < this.randCustPerHour.length; i++) {
      var solution2 = this.randCustPerHour[i] * this.avgCookiesPerCust;
      this.cookiesPerHour.push(Math.ceil(solution2));
      this.totalDailyCookieSales += (Math.ceil(solution2));
    }
    console.log(this.cookiesPerHour, 'cookies per hour Seattle Center');
    console.log(this.totalDailyCookieSales, 'total daily cookie sales SeattleCenter');
  },

  render: function(){
    this.calcCookiesPerHour();
    var SeattleCenterCookieSalesList = document.getElementById('Seattle Center');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hoursOpen[i] + ' ' + this.cookiesPerHour[i];
      SeattleCenterCookieSalesList.appendChild(liElement);
    }
    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'total Seattle Center: ' + this.totalDailyCookieSales;
    SeattleCenterCookieSalesList.appendChild(liTotalElement);
  }
}
SeattleCenter.render();

var CapitolHill = {
  locationName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  randCustPerHour: [],
  cookiesPerHour: [],
  totalDailyCookieSales: 0,


  calcRandCustPerHour: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      var solution1 = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      this.randCustPerHour.push(Math.ceil(solution1));
    }
    console.log(this.randCustPerHour, 'customers per hour in Capitol Hill');
  },

  calcCookiesPerHour: function () {
    this.calcRandCustPerHour();
    for (var i = 0; i < this.randCustPerHour.length; i++) {
      var solution2 = this.randCustPerHour[i] * this.avgCookiesPerCust;
      this.cookiesPerHour.push(Math.ceil(solution2));
      this.totalDailyCookieSales += (Math.ceil(solution2));
    }
    console.log(this.cookiesPerHour, 'cookies per hour in Capitol');
    console.log(this.totalDailyCookieSales, 'total daily cookie sales in Capitol Hill');
  },

  render: function(){
    this.calcCookiesPerHour();
    var CapitolHillCookieSalesList = document.getElementById('Capitol Hill');
    for (var i = 0; i < hoursOpen.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = hoursOpen[i] + ' ' + this.cookiesPerHour[i];
      CapitolHillCookieSalesList.appendChild(liElement);
    }
    var liTotalElement = document.createElement('li');
    liTotalElement.textContent = 'total Capitol Hill: ' + this.totalDailyCookieSales;
    CapitolHillCookieSalesList.appendChild(liTotalElement);
  }
}
CapitolHill.render();
