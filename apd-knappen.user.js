/*********************************************************************************
* MIT License
*
* Copyright (c) 2022 Fabian Gillholm
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
*     The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
*    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
**********************************************************************************/

// ==UserScript==
// @name         APD-knappen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a convenience button to the frånvarotavla
// @author       Fabian Gillholm
// @match        http://franvarohlm.internal.im.se/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=im.se
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // SETTINGS (change these)
    const name = 'Your name here';  // Required - Must match your name as it is on the Frånvarotavla
    const status = 'APD';           // Required - No need to change this
    const message = '';             // Optional

    // CODE (don't change this)
    let newButton = $('<button/>',
    {
        text: 'APD',
        class: 'btn-lg btn-primary text-bold float-left',
        style: 'margin-left: 10px;',
        click: function () {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;

            // Find form elements
            let selectName = $("form select option").filter(function(i, e) { return $(e).text() == name});
            let selectStatus = $("form select option").filter(function(i, e) { return $(e).text() == status});
            let inputMessage = $("input[name='extraComment']");
            let inputFromDate = $("input[name='fromDate']");
            let inputToDate = $("input[name='toDate']");
            let buttonSubmit = $(".btn.btn-primary");

            // Set input values
            selectName.prop('selected', true);
            selectStatus.prop('selected', true);
            inputMessage.val(message);
            inputFromDate.val(today);
            inputToDate.val(today);

            // "Touch" the inputs so Angular knows what's up
            triggerAngularInputField(selectName.parent());
            triggerAngularInputField(selectStatus.parent());
            triggerAngularInputField(inputMessage);
            triggerAngularInputField(inputFromDate);
            triggerAngularInputField(inputToDate);
            
            // Submit the form
            buttonSubmit.click();
        }
    });

    newButton.insertAfter("button[data-target='#exampleModal'");

    function triggerAngularInputField(field) {
        console.log(field);
        let createEvent = function(name) {
            let event = document.createEvent('Event');
            event.initEvent(name, true, true);
            return event;
        }

        field.get(0).dispatchEvent(createEvent('focus'));
        field.get(0).dispatchEvent(createEvent('change'));
        field.get(0).dispatchEvent(createEvent('input'));
        field.get(0).dispatchEvent(createEvent('blur'));
    }
})();
