// Copyright (c) 2022 Marcus Wehbi All rights reserved
// Created by: Marcus Wehbi
// Created on: May 2022
// This file contains the JS functions for index.html
"use strict"

/**
 * This function displays the number of even numbers in between two given numbers
 */
function displayCost() {
    // initialize variables
    // set to empty string
    let numbers = " ";
    // get minimum number
    let userMin = parseInt(document.getElementById('min').value);
    // get maximum number
    let userMax = parseInt(document.getElementById('max').value);
    // if the users min is greater than the max, or they are equal, tell them to change it as it does not make sense
    if (userMin > userMax) {
        numbers = "Your minimum should not be greater than your maximum, please change this!";
    } else if (userMin == userMax && userMin % 2 != 0) {
      // if the users min is equal to max and the number is odd, tell them to fix it
        numbers = "Your minimum should not be equal to your maximum, please change this!";
    }
    // while the users min is less than or equal to the max, and if the number is odd, add 1 to it
    while (userMin <= userMax) {
        if (userMin % 2 != 0) {
            // increment the counter by 1
            userMin = userMin + 1
        }
        // break the loop
        {
            break;
        }
    }
    // while users min is less than or equal to the max, add 2 to the number and display
    while (userMin <= userMax) {
        // build the string of numbers with a line break each time
        numbers = numbers + userMin + "<br>"
        // increment the counter by 2
        userMin = userMin + 2
    }
    // display even numbers between min and max
    document.getElementById('display-results').innerHTML = numbers
}