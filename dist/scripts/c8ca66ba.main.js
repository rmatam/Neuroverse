"use strict";$(function(){var a=$("#section-wrapper"),b=$("#nav-primary"),c=$("#section-hero"),d=b.outerHeight(),e=c.outerHeight(),f=$("#button-expand"),g=$("#nav-secondary-button"),h=$("#nav-secondary"),i=$("#nav-secondary li");f.click(function(){b.toggleClass("expand"),a.toggleClass("darken")}),g.click(function(){h.toggleClass("expand")}),i.each(function(a){$(i[a]).hasClass("active")&&h.addClass("expand")});var j=function(a,b,d){a>b+d?c.addClass("absolute"):c.removeClass("absolute")};j($(window).height(),d,e),$(window).resize(function(){j($(window).height(),d,e)})});