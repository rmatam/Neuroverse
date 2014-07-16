'use strict';

$( function () {
    var sectionWrapper = $("#section-wrapper");
    var navPrimary = $("#nav-primary");
    var heroSection = $("#section-hero");
    var navPrimaryHeight = navPrimary.outerHeight();
    // console.log("Nav height: " + navPrimaryHeight);
    var heroSectionHeight = heroSection.outerHeight();
    // console.log("Hero height: " + heroSectionHeight);
    var navExpandButton = $('#button-expand');
    var navSecondaryButton = $('#nav-secondary-button');
    var navSecondary = $('#nav-secondary');
    var navChildren = $('#nav-secondary li');

    // Primary Navigation Bar
    navExpandButton.click(function ()  {
        navPrimary.toggleClass('expand');
        sectionWrapper.toggleClass('darken');
    });

    // Secondary Navigation Bar
    navSecondaryButton.click(function ()  {
        navSecondary.toggleClass('expand');
    });

    navChildren.each(function (index) {
        if ($(navChildren[index]).hasClass('active'))
        {
            navSecondary.addClass('expand');
        }
    });

    // Landing Page Resizing
    var setHeroPosition = function (windowHeight, navHeight, heroHeight) {
        // console.log($( window ).height());

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