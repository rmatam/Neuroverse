'use strict';

$( function () {
    var navButton = $('#nav-secondary-button');
    var navSecondary = $('#nav-secondary');
    var navChildren = $('#nav-secondary li');
    var navPrimary = $("#nav-primary");
    var heroSection = $("#section-hero");
    var navPrimaryHeight = navPrimary.outerHeight();
    var heroSectionHeight = heroSection.outerHeight();

    // Navigation bar
    navButton.click(function ()  {
        navSecondary.toggleClass('expand');
    });

    navChildren.each(function (index) {
        if ($(navChildren[index]).hasClass('active'))
        {
            navSecondary.addClass('expand');
        }
    });

    // Landing page resizing
    var setHeroPosition = function (windowHeight, navHeight, heroHeight) {
        if (windowHeight > navHeight + heroHeight) {
            heroSection.addClass("absolute");
        }
        else {
            heroSection.removeClass("absolute");
        }
    }

    setHeroPosition($( window ).height(), navPrimaryHeight, heroSectionHeight);

    $( window ).resize(function () {
        setHeroPosition($( window ).height(), navPrimaryHeight, heroSectionHeight);
    });
});