'use strict';

$( function () {
    var body = $("body");
    var sectionWrapper = $("#section-wrapper");
    var navPrimary = $("#nav-primary");
    var navPrimaryExpand = false;
    var heroSection = $("#section-hero");
    var navPrimaryHeight = navPrimary.outerHeight();
    var heroSectionHeight = heroSection.outerHeight();
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

        setHeroPosition();
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
    var setHeroPosition = function () {
        var heroLeft = "30px";
        var heroBottom = "30px";
        var heroTop = "auto";
        var maxWidth = sectionWrapper.outerWidth() - 10;
        var windowWidth = $( window ).width();

        if (windowWidth < 1200 ) {
            heroLeft = "15px";
        }

        if (navPrimaryExpand) {
            heroLeft = "264px";
        }

        if (sectionWrapper.outerHeight() + heroSection.outerHeight() > $( window ).height()) {
            heroTop = sectionWrapper.outerHeight() - 30;
            heroBottom = "auto";
        }

        var styles = {
            position: 'absolute',
            top: heroTop,
            bottom: heroBottom,
            left: heroLeft,
            "max-width": maxWidth,
            overflow: 'hidden'
        }
        
        heroSection.css( styles );
    }

    setHeroPosition();
    setWrapperMinHeight($( window ).height());
    setBodyMinHeight($( window ).height());

    $( window ).resize(function () {
        setHeroPosition($( window ).height(), navPrimaryHeight, heroSectionHeight);
        setWrapperMinHeight($( window ).height());
        setBodyMinHeight($( window ).height());
    });
});