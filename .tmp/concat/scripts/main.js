'use strict';

$( function () {
    var navButton = $('#nav-secondary-button');
    var navSecondary = $('#nav-secondary');
    var navChildren = $('#nav-secondary li');

    navButton.click(function ()  {
        navSecondary.toggleClass('expand');
    });

    navChildren.each(function (index) {
        if ($(navChildren[index]).hasClass('active'))
        {
            navSecondary.addClass('expand');
        }
    });
});