"use strict";
$(document).ready(function () {

});


const API_KEY = "5ca3dcfdc1cac241088a4966570c5bbc";

document.addEventListener("DOMContentLoaded", function () {
  var cityEl = document.querySelector(".city");
  var tempEl = document.querySelector(".temp");
  var feelsEl = document.querySelector(".feels");
  var form = document.querySelector(".search-box");
  var cityInput = document.querySelector("#cityInput");

  function showWeather(data) {
    cityEl.textContent = data.name;
    tempEl.textContent = data.main.temp + "°C";
    feelsEl.textContent = data.main.feels_like + "°C";
  }

  function getWeather(city) {
    var url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      encodeURIComponent(city) +
      "&appid=" +
      API_KEY +
      "&units=metric";

    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        showWeather(data);
      })
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var city = cityInput.value.trim();
    if (city) {
      getWeather(city);
      cityInput.value = "";
    } 
  });

});

