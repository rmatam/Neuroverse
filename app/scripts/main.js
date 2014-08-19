'use strict';

$( function () {
    var body = $("body");
    var sectionWrapper = $("#section-wrapper");
    var navPrimary = $("#nav-primary");
    var navPrimaryExpand = false;
    var heroSection = $("#section-hero");
    var navPrimaryHeight = navPrimary.outerHeight();
    // console.log("Nav height: " + navPrimaryHeight);
    var heroSectionHeight = heroSection.outerHeight();
    // console.log("Hero height: " + heroSectionHeight);
    var navExpandButton = $('#button-expand');
    var navSecondaryButton = $('#nav-secondary-button');
    var navSecondaryStatus = $('#nav-status');
    var navSecondary = $('#nav-secondary');
    var navChildren = $('#nav-secondary li');

    // Primary Navigation Bar
    navExpandButton.click(function ()  {
        navPrimary.toggleClass('expand');
        sectionWrapper.toggleClass('darken');

        if (navPrimary.hasClass('expand'))
        {
            navPrimaryExpand = true;
        }
        else
        {
            navPrimaryExpand = false;
        }

        setHeroPosition($( window ).height(), navPrimaryHeight, heroSectionHeight);
    });

    // Secondary Navigation Bar
    navSecondaryButton.click(function ()  {
        navSecondary.toggleClass('expand');

        if (navSecondary.hasClass('expand')) {
            navSecondaryStatus.text('-');
        }
        else {
            navSecondaryStatus.text('+');
        }
    });

    navChildren.each(function (index) {
        if ($(navChildren[index]).hasClass('active'))
        {
            navSecondaryButton.click();
        }
    });

    // Body Min Height
    var setBodyMinHeight = function (windowHeight) {
        body.css("min-height", windowHeight + "px");
    }

    // Wrapper Min Height
    var setWrapperMinHeight = function (windowHeight) {
        if (!body.hasClass("body-landing"))
        {
            sectionWrapper.css("min-height", windowHeight + "px");
        }
    }

    // Landing Page Resizing
    var setHeroPosition = function (windowHeight, navHeight, heroHeight) {
        // console.log($( window ).height());
        var heroLeft = "30px";
        var maxWidth = sectionWrapper.outerWidth() - 10;

        if (navPrimaryExpand) {
            var heroLeft = "260px";
        }

        var styles = {
            position: 'absolute',
            bottom: '30px',
            left: heroLeft,
            "max-width": maxWidth,
            overflow: 'hidden'
        }
        
        heroSection.css( styles );
    }

    setHeroPosition($( window ).height(), navPrimaryHeight, heroSectionHeight);
    setWrapperMinHeight($( window ).height());
    setBodyMinHeight($( window ).height());

    $( window ).resize(function () {
        setHeroPosition($( window ).height(), navPrimaryHeight, heroSectionHeight);
        setWrapperMinHeight($( window ).height());
        setBodyMinHeight($( window ).height());
    });
});