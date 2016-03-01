// JavaScript Document
// Global Variable
var marginTop = 0;

/* For Dynamic Link to Right Side */

function startSearch(event) {
    event.target.form.submit();
}

$(document).ready(function () {

    $("a[href*='zero-percent-consumer-duarable-finance']").attr('href', 'consumer-duarable-finance.aspx');
    $("a[href*='zero-percent-interest-lifestyle-finance']").attr('href', 'lifestyle-finance.aspx')

});

$(document).ready(function () {
    if ($('div').hasClass('leftMenu')) {
        //var script = document.createElement('script');
        //script.type = 'text/javascript';
        //script.src = 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js';
        //$('head').append(script);

        $('body').prepend('<div id="dMenu"><img src="images/sideMenuUpArrow.png" height="20" /></div>');
        $('.leftMenu ul').clone().insertAfter('#dMenu img:first-child');
        var ulHeight = $('#dMenu').innerHeight();
        $('#dMenu').css({ visibility: 'visible', width: '100px' });
        $('#dMenu').children('ul').hide();
    }

    $('body div#dMenu').live({
        mouseenter: function () {
            $('div#dMenu').animate({ width: 160 + 'px', height: ulHeight + 'px' }, 100, function () {
                $('#dMenu').children('ul').fadeIn(1000);
            });
        },
        mouseleave: function () {
            //$('#dMenu').children('ul').hide();
            $('div#dMenu').animate({ width: 100, height: 30 }, 100, function () {
                $('#dMenu').children('ul').hide();
            });

        }
    });


    //$('body').find('div#dMenu').hover(function () {
    //    //alert(ulHeight);
    //    $('div#dMenu').animate({ width: 180 + 'px', height: ulHeight + 'px' }, 100, "easeOutCirc"//);
    //        , function () {
    //        $('#dMenu').children('ul').fadeIn(1000);
    //    });
    //}, function () {
    //    $('#dMenu').children('ul').hide();
    //    $('div#dMenu').animate({ width: 40, height: 40 }, 100, "easeOutCirc");
    //});





});
/* End For Dynamic Link to Right Side */

$(document).ready(function () {


    try {
        var rightNavOffset = $('#rightScroller').offset().top;
    } catch (e) { }
    $(".tab-container .tab-content").hide();
    $(".tab-container .tab-content:first-child").show();

    $(".tab a").click(function () {
        var href = $(this).attr("title");
        $(".tab-container .tab-content").hide().removeClass('leader');

        $(".tab a").parent().removeClass("active");
        $(this).parent().addClass("active");
        $("#" + href).show().addClass('leader');

        marginTop = 0;
        //resetting the rest of content
        $('.tab-content .lt-content').css('margin-top', 0);
        $('.back').hide();
        $('.contReading').show();

        if ($('.tab a[title="property"]').parent().attr('class') == 'active') {
            $('.property').show();
            $('.property2').hide();
        }
        else {
            $('.property2').show();
            $('.property').hide();
        }
		if ($('.tab a[title="crisil"]').parent().attr('class') == 'active') {
            $('.crisil').show();
            $('.crisil2').hide();
        }
        else {
            $('.crisil2').show();
            $('.crisil').hide();
        }
    });


    $("#right h4").click(function () {
        $("#right h4").next("ul").slideUp();
        $(this).next("ul").slideDown();
    });

    $('.tabs').append('<div class="clear block"></div>');
    var tabHeight = $('.tabs .tab').height();
    var tabContainer = $('.tabs .tab-container .tab-content:visible').height();
    if (tabHeight < tabContainer) {
        $('.tabs .tab').css('height', tabContainer);
    }

    // Left Hand Side Nav Positions
    var tabOffset = 0;
    var winScrollTop = $(window).scrollTop();
    var mainTabOffset = 0;
    $('.tabs .tab ul li a').click(function () {
        $('.tabs .tab').removeAttr('style');
        var winHeightTabs = $(window).height();
        tabOffset = $(this).position().top;
        mainTabOffset = $('.tabs').offset().top;
        winScrollTop = $(window).scrollTop();

        var tabHeight2 = $('.tabs .tab').height();
        var tabContainer2 = $('.tabs .tab-container .tab-content:visible').height();
        // Assign the height to the div
        if (tabHeight2 < tabContainer2) {
            $('.tabs .tab').css('height', tabContainer2);
        }
        // checking the pos of Left Tabs
        if (winScrollTop > mainTabOffset) {
            $('.tabs .tab-container .tab-content:visible').animate({ marginTop: Math.abs(winScrollTop - mainTabOffset) });
        }
        $('#rightScroller').removeAttr('style');
        scrolling();
    });
    
    $(window).scroll(function () {
        /* this for dynamic link */
        if ($('div').hasClass('leftMenu')) {
            var leftMenuD = $('#right .leftMenu').innerHeight() + 100;
            winScrollTop = $(window).scrollTop();
            if (winScrollTop > leftMenuD) {
                $('body').find('div#dMenu').animate({ right: 0 }, 100);
            } else {
                $('body').find('div#dMenu').animate({ right: -100 });
            }
        }

        try {
            $('.tabs .tab-container .tab-content:visible').stop();
            //winScrollTop = $(window).scrollTop();

            if (winScrollTop > mainTabOffset && winScrollTop < (mainTabOffset + tabOffset)) {
                $('.tabs .tab-container .tab-content:visible').animate({ marginTop: Math.abs(winScrollTop - mainTabOffset) });
                //alert(winScrollTop + ' ' + mainTabOffset);
            } else if (winScrollTop < mainTabOffset) {
                $('.tabs .tab-container .tab-content:visible').animate({ marginTop: 0 });
            }
        } catch (e) { }
    });
    /// End of LHN Tab

    var footerId;
    /* Right Side Quick Links or frame Scroller */
    $(window).load(function () {
        if ($('div').hasClass('footerId')) {
            footerId = $('.footer').offset().top;
        } else { footerId = 0; }


        //	var hash = window.location.hash;
        //	hash = hash.substr(1);
        //	$('a[title="'+ hash +'"]').animate({ scrollTop: "300px" })

        //	alert($('#rightScroller').innerHeight());
        //	alert(footerId - $('#rightScroller').innerHeight());	

        /* Progress bar position setter */
        $(window).scroll(function () {
            scrolling();
        });

       
    });

    function scrolling() {
        $('#rightScroller').removeAttr('style');
        var leftMenu = $('.leftMenu').innerHeight() + 100;
        var myspan = $('#myspan').innerHeight();
        var rightDiv = $('#right').innerHeight();
        $('#rightScroller').stop();
        //	$('body').append("<div id='test' style='position:fixed; right:0; top:0;'></div>");
        //	$('#test').text($(window).scrollTop());

        //var actualRNOValue = rightNavOffset; 
        footerId = $('.footer').offset().top;
        if (myspan > rightDiv) {
            if (winScrollTop > rightNavOffset && (winScrollTop + $('#rightScroller').height() + 20) < footerId) {
                $('#rightScroller').css({ position: 'fixed', top: '0px', width: '230px' });

            } else if ((winScrollTop + $('#rightScroller').innerHeight() + 20) > footerId) {
                $('#rightScroller').removeAttr('style');
                $('#rightScroller').css({ position: 'absolute', top: footerId - ($('#rightScroller').innerHeight() + 155), width: '230px' });
            } else {
                $('#rightScroller').removeAttr('style');
            }
        } else {
            $('#rightScroller').removeAttr('style');
        }
    }

    /* End scroller */

    ///// Grab the input files
    $('[WaterMark]').each(function () {
        $(this).addClass('watermark');/*.val($(this).attr('WaterMark'))*/
        $(this).focus(function () { if ($(this).val() == $(this).attr('WaterMark')) { $(this).removeClass('watermark').val(''); } });
        $(this).keypress(function () {
            $(this).next('label').hide();
        });
        $(this).blur(function () {
            if ($.trim($(this).val()) == '') {
                $(this).next('label').animate({ opacity: 1 }, 500, function () { /*$(this).prev('input').addClass('watermark').val($(this).attr('WaterMark'));*/ }).show();
                /*$(this).prev("div.tool").fadeOut();*/

            } else {
                $(this).next('label').hide();
                /*$(this).removeClass('error');
				$(this).prev("div.tool").fadeOut();*/
            }
        });



    });

    $('input:text').each(function () {
        //	  		var text = $(this).val();
        //			var label = "<label>" + text + "</label>";
        //			
        //		   	$(this).parent().append(label);	
        //			$(this).val('');
    });

    $('input:text').focusout(function () {
        if ($(this).val() == '') {
            //$(this).val($(this).attr('watermark'));
            $(this).next('label').animate({ opacity: 1 }, 500).fadeIn().text($(this).attr('watermark'));
        }
    });

    $(".inputDiv label").click(function () {

        $(this).prev("input").val('').focus();
        $(this).animate({ opacity: 0.25 }, 500);
    });

    /////////// End of Input Feilds ////////////////

    /* Find the same href */
    var loc = window.location.toString().split("/");
    loc = loc[loc.length - 1];
    loc = loc.split('#')[0];
    loc = loc.split('?')[0];

    $("a[href=\"" + loc + "\"]").addClass("selected");

    /* Right Hand Side Collapsable code */
    $('.leftMenu h3').click(function () {

        if ($(this).next('ul').is(':visible')) {
            $(this).next('ul').slideUp(function () {
                $(".leftMenu h3").addClass('active');
                rightNavOffset = $('#rightScroller').offset().top;
            });
        } else {
            $(this).next('ul').slideDown(function () {
                $(".leftMenu h3").removeClass('active');
                rightNavOffset = $('#rightScroller').offset().top;
            });
        }


    });

    /* Hiding EMI Simulator Link from Quick Link  */
    if (loc == 'what-we-do-portfolio-in-summary.aspx' || loc == 'what-we-do.aspx') {
        $('#emisemu').css("display", "none");
    }
    /*  else{
        $('#emisemu').css("display", "block");
    }*/
    /* read more next div show */
    $('.rm-next strong').click(function () {
        if ($(this).html() == 'Read More') {
            $(this).html('Hide');
        } else {
            $(this).html('Read More');
        }
        $(this).parent().toggleClass('open').next().slideToggle();

    });

    var htmlVal = $('.moreLoanAccount a').text();
    $('.moreLoanAccount a').click(function () {
        if ($(this).html() == htmlVal) {
            $(this).html('Show less Loan Account');
        } else {
            $(this).html(htmlVal);
        }

        $(this).toggleClass('active').parent().prev('div.more').slideToggle();

    });



    ///////////////////*  Top Menu  *///////////////////////////

    (function ($) { $.fn.hoverIntent = function (f, g) { var cfg = { sensitivity: 7, interval: 100, timeout: 0 }; cfg = $.extend(cfg, g ? { over: f, out: g } : f); var cX, cY, pX, pY; var track = function (ev) { cX = ev.pageX; cY = ev.pageY; }; var compare = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) { $(ob).unbind("mousemove", track); ob.hoverIntent_s = 1; return cfg.over.apply(ob, [ev]); } else { pX = cX; pY = cY; ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); }, cfg.interval); } }; var delay = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); ob.hoverIntent_s = 0; return cfg.out.apply(ob, [ev]); }; var handleHover = function (e) { var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget; while (p && p != this) { try { p = p.parentNode; } catch (e) { p = this; } } if (p == this) { return false; } var ev = jQuery.extend({}, e); var ob = this; if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); } if (e.type == "mouseover") { pX = ev.pageX; pY = ev.pageY; $(ob).bind("mousemove", track); if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); }, cfg.interval); } } else { $(ob).unbind("mousemove", track); if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout(function () { delay(ev, ob); }, cfg.timeout); } } }; return this.mouseover(handleHover).mouseout(handleHover); }; })(jQuery);

    //start drop down menu scripts @@@@@@
    $(document).ready(function () {
        function megaHoverOver() {
            $(this).children(".subnav").stop().fadeTo('', 1).show();
            $(this).children(".menuArrow").stop().fadeTo('', 1).show();
            //$(this + " .sub").css({zIndex:999999});

            //Calculate width of all ul's
            (function ($) {
                jQuery.fn.calcSubWidth = function () {
                    rowWidth = 0;
                    //Calculate row
                    $(this).find("ul").each(function () {
                        rowWidth += $(this).width();
                    });
                };
            })(jQuery);

            if ($(this).find(".row").length > 0) { //If row exists...
                var biggestRow = 0;
                //Calculate each row
                $(this).find(".row").each(function () {
                    $(this).calcSubWidth();
                    //Find biggest row
                    if (rowWidth > biggestRow) {
                        biggestRow = rowWidth;
                    }
                });
                //Set width
                //$(this).find(".subnav").css({ 'width': biggestRow });
                //$(this).find(".row:last").css({ 'margin': '0' });

            } else { //If row does not exist...

                $(this).calcSubWidth();
                //Set Width
                //$(this).find(".subnav").css({ 'width': rowWidth });
            }
        }
        function megaHoverOut() {
            //$(this + " a").removeClass("selected");
            $(this).find(".subnav").stop().fadeTo('', 0, function () {
                $(this).hide();
            });
            $(this).find(".menuArrow").stop().fadeTo('', 0, function () {
                $(this).hide();
            });
        }
        var config = {
            sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)    
            interval: 0, // number = milliseconds for onMouseOver polling interval    
            over: megaHoverOver, // function = onMouseOver callback (REQUIRED)    
            timeout: 100, // number = milliseconds delay before onMouseOut    
            out: megaHoverOut // function = onMouseOut callback (REQUIRED)    
        };

        $(".header ul li .subnav").css({ 'opacity': '0' });
        $(".header ul li .menuArrow").css({ 'opacity': '0' });
        $(".header ul li").hoverIntent(config);

    });

    /////////////////////////////**** End Top Menu **********//////////////////////////


    ///////////////////////////******** search input box *********//////////////////////
    $("#txtSearch").autocomplete(
            "process_search.aspx",
                {
                    cacheLength: "1",
                    selectFirst: false,
                    matchSubset: false
                }
            );


});


/* Smooth scroller */
$(function(){
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});
/* End Smooth Scroller */


// Reading more & Less
var conHeight = $('.tab-content:visible:first-child .lt-content').height();
/* Leadership team Scroller */
$(window).load(function () {
    var divHeight = 420;
    var posY;
    $('.lt-main > div').css({ 'height': '420px', 'overflow': 'hidden', 'margin': '5px 7px' });
    $('.tab-content:visible').addClass('leader');
    

    $('.tab-content .back').fadeOut();

    $('.leader .contReading').live('click', function () {
        
        conHeight = $('.leader .lt-main .lt-content').height();
        posY = Math.abs(conHeight - divHeight);
        if (conHeight < divHeight && (marginTop >= posY && marginTop >= (posY + divHeight))) {
            $(this).fadeOut();
            $(this).next('.back').fadeIn();
            return false;
        } else {
            marginTop += divHeight;
            $('.leader .lt-main .lt-content').animate({ marginTop: -marginTop }, 500);
            $(this).next('.back').fadeIn();
            if (marginTop >= posY && marginTop <= (posY + divHeight)) {
                $(this).fadeOut();
                $(this).next('.back').fadeIn();
            }
        }
    });

    $('.leader .back').live('click', function () {
        if (marginTop == 0) {
            $(this).fadeOut();
            $(this).prev('.contReading').fadeIn();
            return false;
        }
        marginTop -= divHeight;
        $('.leader .lt-main .lt-content').animate({ marginTop: -marginTop }, 500);
        $(this).prev('.contReading').fadeIn();
        if (marginTop == 0) {
            $(this).fadeOut();
            $(this).prev('.contReading').fadeIn();
        }
    });
});


/* End Leadership team Scroller  */

/* Start Fancy box V2.0.6 pack js*/
/*! fancyBox v2.0.6 fancyapps.com | fancyapps.com/fancybox/#license */
(function (s, l, d, t) {
    var m = d(s), q = d(l), a = d.fancybox = function () { a.open.apply(this, arguments) }, u = !1, k = l.createTouch !== t, o = function (a) { return "string" === d.type(a) }, n = function (b, c) { c && o(b) && 0 < b.indexOf("%") && (b = a.getViewport()[c] / 100 * parseInt(b, 10)); return Math.round(b) + "px" }; d.extend(a, {
        version: "2.0.5", defaults: {
            padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, autoSize: !0, autoResize: !k, autoCenter: !k, fitToView: !0, aspectRatio: !1, topRatio: 0.5, fixed: !1, scrolling: "auto",
            wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, keys: { next: [13, 32, 34, 39, 40], prev: [8, 33, 37, 38], close: [27] }, tpl: {
                wrap: '<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"' +
                (d.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>", swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>', error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>', next: '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'
            }, openEffect: "fade", openSpeed: 300, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 300, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 300, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic",
            prevSpeed: 300, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: { speedIn: 0, speedOut: 300, opacity: 0.8, css: { cursor: "pointer" }, closeClick: !0 }, title: { type: "float" } }
        }, group: {}, opts: {}, coming: null, current: null, isOpen: !1, isOpened: !1, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (b, c) {
            a.close(!0); b && !d.isArray(b) && (b = b instanceof d ? d(b).get() : [b]); a.isActive = !0; a.opts = d.extend(!0, {}, a.defaults, c); d.isPlainObject(c) && c.keys !== t && (a.opts.keys = c.keys ?
            d.extend({}, a.defaults.keys, c.keys) : !1); a.group = b; a._start(a.opts.index || 0)
        }, cancel: function () { a.coming && !1 === a.trigger("onCancel") || (a.coming = null, a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onabort = a.imgPreload.onerror = null)) }, close: function (b) {
            a.cancel(); a.current && !1 !== a.trigger("beforeClose") && (a.unbindEvents(), !a.isOpen || b && !0 === b[0] ? (d(".fancybox-wrap").stop().trigger("onReset").remove(), a._afterZoomOut()) : (a.isOpen = a.isOpened =
            !1, d(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), a.transitions[a.current.closeMethod]()))
        }, play: function (b) {
            var c = function () { clearTimeout(a.player.timer) }, e = function () { c(); a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed)) }, f = function () { c(); d("body").unbind(".player"); a.player.isActive = !1; a.trigger("onPlayEnd") }; if (a.player.isActive || b && !1 === b[0]) f(); else if (a.current && (a.current.loop ||
            a.current.index < a.group.length - 1)) a.player.isActive = !0, d("body").bind({ "afterShow.player onUpdate.player": e, "onCancel.player beforeClose.player": f, "beforeLoad.player": c }), e(), a.trigger("onPlayStart")
        }, next: function () { a.current && a.jumpto(a.current.index + 1) }, prev: function () { a.current && a.jumpto(a.current.index - 1) }, jumpto: function (b) { a.current && (b = parseInt(b, 10), 1 < a.group.length && a.current.loop && (b >= a.group.length ? b = 0 : 0 > b && (b = a.group.length - 1)), a.group[b] !== t && (a.cancel(), a._start(b))) }, reposition: function (b,
        c) { var e; a.isOpen && (e = a._getPosition(c), b && "scroll" === b.type ? (delete e.position, a.wrap.stop(!0, !0).animate(e, 200)) : a.wrap.css(e)) }, update: function (b) {
            a.isOpen && (u || setTimeout(function () { var c = a.current, e = !b || b && "orientationchange" === b.type; if (u && (u = !1, c)) { if (!b || "scroll" !== b.type || e) c.autoSize && "iframe" !== c.type && (a.inner.height("auto"), c.height = a.inner.height()), (c.autoResize || e) && a._setDimension(), c.canGrow && "iframe" !== c.type && a.inner.height("auto"); (c.autoCenter || e) && a.reposition(b); a.trigger("onUpdate") } },
            200), u = !0)
        }, toggle: function () { a.isOpen && (a.current.fitToView = !a.current.fitToView, a.update()) }, hideLoading: function () { q.unbind("keypress.fb"); d("#fancybox-loading").remove() }, showLoading: function () { a.hideLoading(); q.bind("keypress.fb", function (b) { 27 === b.keyCode && (b.preventDefault(), a.cancel()) }); d('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body") }, getViewport: function () {
            return {
                x: m.scrollLeft(), y: m.scrollTop(), w: k && s.innerWidth ? s.innerWidth : m.width(), h: k && s.innerHeight ?
                s.innerHeight : m.height()
            }
        }, unbindEvents: function () { a.wrap && a.wrap.unbind(".fb"); q.unbind(".fb"); m.unbind(".fb") }, bindEvents: function () {
            var b = a.current, c = b.keys; b && (m.bind("resize.fb orientationchange.fb" + (b.autoCenter && !b.fixed ? " scroll.fb" : ""), a.update), c && q.bind("keydown.fb", function (b) {
                var f; f = b.target || b.srcElement; if (!b.ctrlKey && !b.altKey && !b.shiftKey && !b.metaKey && (!f || !f.type && !d(f).is("[contenteditable]"))) f = b.keyCode, -1 < d.inArray(f, c.close) ? (a.close(), b.preventDefault()) : -1 < d.inArray(f, c.next) ?
                (a.next(), b.preventDefault()) : -1 < d.inArray(f, c.prev) && (a.prev(), b.preventDefault())
            }), d.fn.mousewheel && b.mouseWheel && 1 < a.group.length && a.wrap.bind("mousewheel.fb", function (b, c) { var d = b.target || null; if (0 !== c && (!d || 0 === d.clientHeight || d.scrollHeight === d.clientHeight && d.scrollWidth === d.clientWidth)) b.preventDefault(), a[0 < c ? "prev" : "next"]() }))
        }, trigger: function (b, c) {
            var e, f = c || a[-1 < d.inArray(b, ["onCancel", "beforeLoad", "afterLoad"]) ? "coming" : "current"]; if (f) {
                d.isFunction(f[b]) && (e = f[b].apply(f, Array.prototype.slice.call(arguments,
                1))); if (!1 === e) return !1; f.helpers && d.each(f.helpers, function (c, e) { if (e && d.isPlainObject(a.helpers[c]) && d.isFunction(a.helpers[c][b])) a.helpers[c][b](e, f) }); d.event.trigger(b + ".fb")
            }
        }, isImage: function (a) { return o(a) && a.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i) }, isSWF: function (a) { return o(a) && a.match(/\.(swf)((\?|#).*)?$/i) }, _start: function (b) {
            var c = {}, e = a.group[b] || null, f, g, i; if (e && (e.nodeType || e instanceof d)) f = !0, d.metadata && (c = d(e).metadata()); c = d.extend(!0, {}, a.opts, { index: b, element: e }, d.isPlainObject(e) ?
                e : c); d.each(["href", "title", "content", "type"], function (b, g) { c[g] = a.opts[g] || f && d(e).attr(g) || c[g] || null }); "number" === typeof c.margin && (c.margin = [c.margin, c.margin, c.margin, c.margin]); c.modal && d.extend(!0, c, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { css: { cursor: "auto" }, closeClick: !1 } } }); a.coming = c; if (!1 === a.trigger("beforeLoad")) a.coming = null; else {
                    g = c.type; b = c.href || e; g || (f && (g = d(e).data("fancybox-type"), g || (g = (g = e.className.match(/fancybox\.(\w+)/)) ?
                    g[1] : null)), !g && o(b) && (a.isImage(b) ? g = "image" : a.isSWF(b) ? g = "swf" : b.match(/^#/) && (g = "inline")), g || (g = f ? "inline" : "html"), c.type = g); if ("inline" === g || "html" === g) { if (c.content || (c.content = "inline" === g ? d(o(b) ? b.replace(/.*(?=#[^\s]+$)/, "") : b) : e), !c.content || !c.content.length) g = null } else b || (g = null); "ajax" === g && o(b) && (i = b.split(/\s+/, 2), b = i.shift(), c.selector = i.shift()); c.href = b; c.group = a.group; c.isDom = f; switch (g) {
                        case "image": a._loadImage(); break; case "ajax": a._loadAjax(); break; case "inline": case "iframe": case "swf": case "html": a._afterLoad();
                            break; default: a._error("type")
                    }
                }
        }, _error: function (b) { a.hideLoading(); d.extend(a.coming, { type: "html", autoSize: !0, minWidth: 0, minHeight: 0, padding: 15, hasError: b, content: a.coming.tpl.error }); a._afterLoad() }, _loadImage: function () { var b = a.imgPreload = new Image; b.onload = function () { this.onload = this.onerror = null; a.coming.width = this.width; a.coming.height = this.height; a._afterLoad() }; b.onerror = function () { this.onload = this.onerror = null; a._error("image") }; b.src = a.coming.href; (b.complete === t || !b.complete) && a.showLoading() },
        _loadAjax: function () { a.showLoading(); a.ajaxLoad = d.ajax(d.extend({}, a.coming.ajax, { url: a.coming.href, error: function (b, c) { a.coming && "abort" !== c ? a._error("ajax", b) : a.hideLoading() }, success: function (b, c) { "success" === c && (a.coming.content = b, a._afterLoad()) } })) }, _preloadImages: function () { var b = a.group, c = a.current, e = b.length, f, g, i, h = Math.min(c.preload, e - 1); if (c.preload && !(2 > b.length)) for (i = 1; i <= h; i += 1) if (f = b[(c.index + i) % e], g = f.href || d(f).attr("href") || f, "image" === f.type || a.isImage(g)) (new Image).src = g }, _afterLoad: function () {
            a.hideLoading();
            !a.coming || !1 === a.trigger("afterLoad", a.current) ? a.coming = !1 : (a.isOpened ? (d(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), a.transitions[a.current.prevMethod]()) : (d(".fancybox-wrap").stop().trigger("onReset").remove(), a.trigger("afterClose")), a.unbindEvents(), a.isOpen = !1, a.current = a.coming, a.wrap = d(a.current.tpl.wrap).addClass("fancybox-" + (k ? "mobile" : "desktop") + " fancybox-type-" + a.current.type + " fancybox-tmp " + a.current.wrapCSS).appendTo("body"),
            a.skin = d(".fancybox-skin", a.wrap).css("padding", n(a.current.padding)), a.outer = d(".fancybox-outer", a.wrap), a.inner = d(".fancybox-inner", a.wrap), a._setContent())
        }, _setContent: function () {
            var b = a.current, c = b.content, e = b.type, f = b.minWidth, g = b.minHeight, i = b.maxWidth, h = b.maxHeight; switch (e) {
                case "inline": case "ajax": case "html": b.selector ? c = d("<div>").html(c).find(b.selector) : c instanceof d && (c.parent().hasClass("fancybox-inner") && c.parents(".fancybox-wrap").unbind("onReset"), c = c.show().detach(), d(a.wrap).bind("onReset",
                function () { c.appendTo("body").hide() })); b.autoSize && (f = d('<div class="fancybox-wrap ' + a.current.wrapCSS + ' fancybox-tmp"></div>').appendTo("body").css({ minWidth: n(f, "w"), minHeight: n(g, "h"), maxWidth: n(i, "w"), maxHeight: n(h, "h") }).append(c), b.width = f.width(), b.height = f.height(), f.width(a.current.width), f.height() > b.height && (f.width(b.width + 1), b.width = f.width(), b.height = f.height()), c = f.contents().detach(), f.remove()); break; case "image": c = b.tpl.image.replace("{href}", b.href); b.aspectRatio = !0; break; case "swf": c =
                b.tpl.swf.replace(/\{width\}/g, b.width).replace(/\{height\}/g, b.height).replace(/\{href\}/g, b.href); break; case "iframe": c = d(b.tpl.iframe.replace("{rnd}", (new Date).getTime())).attr("scrolling", b.scrolling).attr("src", b.href), b.scrolling = k ? "scroll" : "auto"
            } if ("image" === e || "swf" === e) b.autoSize = !1, b.scrolling = "visible"; "iframe" === e && b.autoSize ? (a.showLoading(), a._setDimension(), a.inner.css("overflow", b.scrolling), c.bind({
                onCancel: function () { d(this).unbind(); a._afterZoomOut() }, load: function () {
                    a.hideLoading();
                    try { this.contentWindow.document.location && (a.current.height = d(this).contents().find("body").height()) } catch (b) { a.current.autoSize = !1 } a[a.isOpen ? "_afterZoomIn" : "_beforeShow"]()
                }
            }).appendTo(a.inner)) : (a.inner.append(c), a._beforeShow())
        }, _beforeShow: function () { a.coming = null; a.trigger("beforeShow"); a._setDimension(); a.wrap.hide().removeClass("fancybox-tmp"); a.bindEvents(); a._preloadImages(); a.transitions[a.isOpened ? a.current.nextMethod : a.current.openMethod]() }, _setDimension: function () {
            var b = a.wrap, c =
            a.inner, e = a.current, f = a.getViewport(), g = e.margin, i = 2 * e.padding, h = e.width, j = e.height, r = e.maxWidth + i, k = e.maxHeight + i, l = e.minWidth + i, m = e.minHeight + i, p; f.w -= g[1] + g[3]; f.h -= g[0] + g[2]; o(h) && 0 < h.indexOf("%") && (h = (f.w - i) * parseFloat(h) / 100); o(j) && 0 < j.indexOf("%") && (j = (f.h - i) * parseFloat(j) / 100); g = h / j; h += i; j += i; e.fitToView && (r = Math.min(f.w, r), k = Math.min(f.h, k)); if (e.aspectRatio) { if (h > r && (h = r, j = (h - i) / g + i), j > k && (j = k, h = (j - i) * g + i), h < l && (h = l, j = (h - i) / g + i), j < m) j = m, h = (j - i) * g + i } else h = Math.max(l, Math.min(h, r)), j = Math.max(m,
            Math.min(j, k)); h = Math.round(h); j = Math.round(j); d(b.add(c)).width("auto").height("auto"); c.width(h - i).height(j - i); b.width(h); p = b.height(); if (h > r || p > k) for (; (h > r || p > k) && h > l && p > m;) j -= 10, e.aspectRatio ? (h = Math.round((j - i) * g + i), h < l && (h = l, j = (h - i) / g + i)) : h -= 10, c.width(h - i).height(j - i), b.width(h), p = b.height(); e.dim = { width: n(h), height: n(p) }; e.canGrow = e.autoSize && j > m && j < k; e.canShrink = !1; e.canExpand = !1; if (h - i < e.width || j - i < e.height) e.canExpand = !0; else if ((h > f.w || p > f.h) && h > l && j > m) e.canShrink = !0; a.innerSpace = p - i -
            c.height()
        }, _getPosition: function (b) { var c = a.current, e = a.getViewport(), f = c.margin, d = a.wrap.width() + f[1] + f[3], i = a.wrap.height() + f[0] + f[2], h = { position: "absolute", top: f[0] + e.y, left: f[3] + e.x }; c.autoCenter && c.fixed && !b && i <= e.h && d <= e.w && (h = { position: "fixed", top: f[0], left: f[3] }); h.top = n(Math.max(h.top, h.top + (e.h - i) * c.topRatio)); h.left = n(Math.max(h.left, h.left + 0.5 * (e.w - d))); return h }, _afterZoomIn: function () {
            var b = a.current, c = b ? b.scrolling : "no"; if (b && (a.isOpen = a.isOpened = !0, a.wrap.addClass("fancybox-opened"),
            a.inner.css("overflow", "yes" === c ? "scroll" : "no" === c ? "hidden" : c), a.trigger("afterShow"), a.update(), (b.closeClick || b.nextClick) && a.inner.css("cursor", "pointer").bind("click.fb", function (c) { if (!d(c.target).is("a") && !d(c.target).parent().is("a")) a[b.closeClick ? "close" : "next"]() }), b.closeBtn && d(b.tpl.closeBtn).appendTo(a.skin).bind("click.fb", a.close), b.arrows && 1 < a.group.length && ((b.loop || 0 < b.index) && d(b.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (b.loop || b.index < a.group.length - 1) && d(b.tpl.next).appendTo(a.outer).bind("click.fb",
            a.next)), a.opts.autoPlay && !a.player.isActive)) a.opts.autoPlay = !1, a.play()
        }, _afterZoomOut: function () { var b = a.current; a.wrap.trigger("onReset").remove(); d.extend(a, { group: {}, opts: {}, current: null, isActive: !1, isOpened: !1, isOpen: !1, wrap: null, skin: null, outer: null, inner: null }); a.trigger("afterClose", b) }
    }); a.transitions = {
        getOrigPosition: function () {
            var b = a.current, c = b.element, e = b.padding, f = d(b.orig), g = {}, i = 50, h = 50; !f.length && b.isDom && d(c).is(":visible") && (f = d(c).find("img:first"), f.length || (f = d(c))); f.length ?
            (g = f.offset(), f.is("img") && (i = f.outerWidth(), h = f.outerHeight())) : (b = a.getViewport(), g.top = b.y + 0.5 * (b.h - h), g.left = b.x + 0.5 * (b.w - i)); return g = { top: n(g.top - e), left: n(g.left - e), width: n(i + 2 * e), height: n(h + 2 * e) }
        }, step: function (b, c) { var e = c.prop, d, g; if ("width" === e || "height" === e) d = Math.ceil(b - 2 * a.current.padding), "height" === e && (g = (b - c.start) / (c.end - c.start), c.start > c.end && (g = 1 - g), d -= a.innerSpace * g), a.inner[e](d) }, zoomIn: function () {
            var b = a.wrap, c = a.current, e = c.openEffect, f = "elastic" === e, g = d.extend({}, c.dim,
            a._getPosition(f)), i = d.extend({ opacity: 1 }, g); delete i.position; f ? (g = this.getOrigPosition(), c.openOpacity && (g.opacity = 0), a.outer.add(a.inner).width("auto").height("auto")) : "fade" === e && (g.opacity = 0); b.css(g).show().animate(i, { duration: "none" === e ? 0 : c.openSpeed, easing: c.openEasing, step: f ? this.step : null, complete: a._afterZoomIn })
        }, zoomOut: function () {
            var b = a.wrap, c = a.current, d = c.openEffect, f = "elastic" === d, g = { opacity: 0 }; f && ("fixed" === b.css("position") && b.css(a._getPosition(!0)), g = this.getOrigPosition(), c.closeOpacity &&
            (g.opacity = 0)); b.animate(g, { duration: "none" === d ? 0 : c.closeSpeed, easing: c.closeEasing, step: f ? this.step : null, complete: a._afterZoomOut })
        }, changeIn: function () { var b = a.wrap, c = a.current, d = c.nextEffect, f = "elastic" === d, g = a._getPosition(f), i = { opacity: 1 }; g.opacity = 0; f && (g.top = n(parseInt(g.top, 10) - 200), i.top = "+=200px"); b.css(g).show().animate(i, { duration: "none" === d ? 0 : c.nextSpeed, easing: c.nextEasing, complete: a._afterZoomIn }) }, changeOut: function () {
            var b = a.wrap, c = a.current, e = c.prevEffect, f = { opacity: 0 }; b.removeClass("fancybox-opened");
            "elastic" === e && (f.top = "+=200px"); b.animate(f, { duration: "none" === e ? 0 : c.prevSpeed, easing: c.prevEasing, complete: function () { d(this).trigger("onReset").remove() } })
        }
    }; a.helpers.overlay = {
        overlay: null, update: function () { var a, c; this.overlay.width("100%").height("100%"); d.browser.msie || k ? (a = Math.max(l.documentElement.scrollWidth, l.body.scrollWidth), c = Math.max(l.documentElement.offsetWidth, l.body.offsetWidth), a = a < c ? m.width() : a) : a = q.width(); this.overlay.width(a).height(q.height()) }, beforeShow: function (b) {
            this.overlay ||
            (b = d.extend(!0, {}, a.defaults.helpers.overlay, b), this.overlay = d('<div id="fancybox-overlay"></div>').css(b.css).appendTo("body"), b.closeClick && this.overlay.bind("click.fb", a.close), a.current.fixed && !k ? this.overlay.addClass("overlay-fixed") : (this.update(), this.onUpdate = function () { this.update() }), this.overlay.fadeTo(b.speedIn, b.opacity))
        }, afterClose: function (a) { this.overlay && this.overlay.fadeOut(a.speedOut || 0, function () { d(this).remove() }); this.overlay = null }
    }; a.helpers.title = {
        beforeShow: function (b) {
            var c;
            if (c = a.current.title) c = d('<div class="fancybox-title fancybox-title-' + b.type + '-wrap">' + c + "</div>").appendTo("body"), "float" === b.type && (c.width(c.width()), c.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(parseInt(c.css("margin-bottom"), 10))), c.appendTo("over" === b.type ? a.inner : "outside" === b.type ? a.wrap : a.skin)
        }
    }; d.fn.fancybox = function (b) {
        var c = d(this), e = this.selector || "", f, g = function (g) {
            var h = this, j = f, k; !g.ctrlKey && !g.altKey && !g.shiftKey && !g.metaKey && !d(h).is(".fancybox-wrap") &&
            (g.preventDefault(), g = b.groupAttr || "data-fancybox-group", k = d(h).attr(g), k || (g = "rel", k = h[g]), k && "" !== k && "nofollow" !== k && (h = e.length ? d(e) : c, h = h.filter("[" + g + '="' + k + '"]'), j = h.index(this)), b.index = j, a.open(h, b))
        }, b = b || {}; f = b.index || 0; e ? q.undelegate(e, "click.fb-start").delegate(e, "click.fb-start", g) : c.unbind("click.fb-start").bind("click.fb-start", g); return this
    }; d(l).ready(function () { a.defaults.fixed = d.support.fixedPosition || !(d.browser.msie && 6 >= d.browser.version) && !k })
})(window, document, jQuery);
/*@@@@@ END Fancy box V2.0.6 pack js @@@@@*/



//*******popup code  ***
$(document).ready(function () {
    $("a#donate").bind("click", function () {
        $("#donate_form").submit()
    });

    $("a#single_1").fancybox();
    $("a#single_2").fancybox({
        'zoomOpacity': true,
        'overlayShow': false,
        'zoomSpeedIn': 500,
        'zoomSpeedOut': 500
    });

    $("a#single_3").fancybox({
        'overlayShow': false,
        'zoomSpeedIn': 600,
        'zoomSpeedOut': 400,
        'easingIn': 'easeOutBack',
        'easingOut': 'easeInBack'
    });

    $("a.largepop").fancybox({
        'hideOnContentClick': false,
        'frameWidth': 800,
        'frameHeight': 600
    });

    $("a.videoPop").fancybox({
        'hideOnContentClick': false,
        'frameWidth': 350,
        'frameHeight': 200
    });


});

//*******popup code  ***
$(document).ready(function () {
    $("a.offer_pop").fancybox();
    $("a.moppop").fancybox({
        type: 'iframe',
        width: 595,
        height: 1000
    });
	$("a.socialspop").fancybox({
        type: 'iframe',
        width: 400,
        height: 200
    });
    $("a.quicklinks").fancybox({
        type: 'iframe',
        width: 600,
        height: 600
    });
    $("a.videod").fancybox({
        type: 'iframe',
        width: 605,
        height: 505
    });

    $("a.account").fancybox({
        width: 500,
        height: 150
    });

    $("a.custom").fancybox({
        'hideOnContentClick': false,
        'frameWidth': 800,
        'frameHeight': 450
    });



    $("a.popsmall").fancybox({
        'hideOnContentClick': false,
        'frameWidth': 700,
        'frameHeight': 320
    });


    $("a.winner").fancybox({
        'hideOnContentClick': false,
        'frameWidth': 700,
        'frameHeight': 430
    });

    $("a.compare").fancybox({
        'hideOnContentClick': false,
        'frameWidth': 720,
        'frameHeight': 485
    });

    $("a.formh").fancybox({
        'hideOnContentClick': false,
        'frameWidth': 560,
        'frameHeight': 580
    });
    $("a.phoneapi").fancybox({
        type: 'iframe',
        width: 500,
        height: 325
    });
    $("a.phoneapi2").fancybox({
        type: 'iframe',
        width: 500,
        height: 100
    });

    $("#imggallery").click(function () {
        $.fancybox([
            'http://farm5.static.flickr.com/4044/4286199901_33844563eb.jpg',
            'http://farm3.static.flickr.com/2687/4220681515_cc4f42d6b9.jpg',
            {
                'href': 'http://farm5.static.flickr.com/4005/4213562882_851e92f326.jpg',
                'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            }
        ], {
            'padding': 0,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'type': 'image',
            'changeFade': 0

        });
    });

});
/* popup code end */



$(document).ready(function () {
    $(".rdt-no").click(function () {
        $(".loan-account").hide();

        $(".dob").hide();
        $(".loan-account input:text, .dob select").each(function () {
            $(this).attr('disabled', 'disabled');
        });

    });
    $(".rdt-yes").click(function () {
        $(".loan-account").show();
        $(".dob").show();
        $(".loan-account input:text, .dob select").each(function () {
            $(this).removeAttr('disabled');
        });


    });

    $('#fancy_close,#fancy_overlay').live('click', function () {
        alert('firing');
        $(window).live('scroll');
    });

    $("[href='#top']").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
        return false;
    });

    $('.socialLinks a span.socialFacebook2, .socialLinks a span.socialLinkedin2, .socialLinks a span.socialTweeter2').css('opacity', '0');

    $('.socialLinks a span.socialFacebook2, .socialLinks a span.socialLinkedin2, .socialLinks a span.socialTweeter2').hover(function () {
        $(this).css('opacity', '1');
    }, function () {
        $(this).css('opacity', '0');
    });

});


//				//// Cookie set for Welcome PopUp =====
//				$(document).ready(function(){
//				
//				try{
//				
//				//Start cookie jquery scripts @@@@@@@@@@@@@@@@@ 
//				jQuery.cookie = function(name, value, options) {
//					if (typeof value != 'undefined') { // name and value given, set cookie
//						options = options || {};
//						if (value === null) {
//							value = '';
//							options.expires = -1;
//						}
//						var expires = '';
//						if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
//							var date;
//							if (typeof options.expires == 'number') {
//								date = new Date();
//								date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
//							} else {
//								date = options.expires;
//							}
//							expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
//						}
//						// CAUTION: Needed to parenthesize options.path and options.domain
//						// in the following expressions, otherwise they evaluate to undefined
//						// in the packed version for some reason...
//						var path = options.path ? '; path=' + (options.path) : '';
//						var domain = options.domain ? '; domain=' + (options.domain) : '';
//						var secure = options.secure ? '; secure' : '';
//						document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
//					} else { // only name given, get cookie
//						var cookieValue = null;
//						if (document.cookie && document.cookie != '') {
//							var cookies = document.cookie.split(';');
//							for (var i = 0; i < cookies.length; i++) {
//								var cookie = jQuery.trim(cookies[i]);
//								// Does this cookie string begin with the name we want?
//								if (cookie.substring(0, name.length + 1) == (name + '=')) {
//									cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//									break;
//								}
//							}
//						}
//						return cookieValue;
//					}
//				};	
//					
//					var welcomePop = '<div id="welcome" style="width: 800px; display:none;"><div style="float:left;display:block">';
//					welcomePop +='<h2>Welcome to the refreshed website of Bajaj Finserv Lending.</h2>';
//					welcomePop +='<ol style="list-style-type:lower-alpha;">';
//					welcomePop += '<li>You can now pay your EMIs online by selecting &quot;<strong><a id="tftftf" href="pay-your-emi.aspx" >Pay Your EMI</a></strong>&quot; from the <strong>&quot;Payments&quot; </strong>link  located on the top right corner of the page</li>'
//					welcomePop +='<li>You can also pay your overdue charges online by selecting &quot;<strong><a onclick="$.fancybox.close();" href="https://www.billdesk.com/pgidsk/pgmerc/bajfinarrs/BAJFINARRSDetails.jsp" target="_blank">Pay Overdue Charges</a></strong>&quot; from the &quot;<strong>Payments</strong>&quot; link located on the top right corner of the page</li>';
//					welcomePop +='<li>Send us your feedback/queries by selecting &quot;<strong>Complaints and Compliment</strong>s&quot; from the &quot;<strong>Reach us</strong>&quot; link located on the top right corner of the page</li></ol></div></div>';
//					
//					
//					
//					
//				}catch(e){}
//					
//					// Welcome PopUp Scripts
//					if($.cookie('CookiePop') != 'setPop'){	
//						$.cookie("CookiePop", "setPop", { expires: 1 });
//						//alert('Testing PopUp');
//						$('body').append(welcomePop);
//						$('body').append('<a class="welcome" href="#welcome"></a>');
//						
//						$(".welcome").fancybox().trigger('click');
//						
//						return false;
//						//$("[href=http://bfl.interfacesoftwares.com/welcome.html?iframe]").fancybox().trigger('click');
//				//		$.fancybox({
//				//			'href' : 'http://bfl.interfacesoftwares.com/welcome.html'		   
//				//		});
//					}
//					
//				}); //// End Cookies
//				
//				
//				
$(document).ready(function () {
    var hash = window.location.hash;
    hash = hash.substr(1).split('?')[0];
    $('a[title="' + hash + '"]').click();
    $("html, body").animate({ scrollTop: "0px" });
});



/*
$(function () {
    var today = new Date();
    var friday = new Date("March 15, 2013 18:00:00");
    var Sunday = new Date("March 17, 2013 9:00:00");

    if (today > friday && today < Sunday) {
        $("body").find('a[href*="bajajfinance"]').attr('href', 'undermaintenance.aspx');
        $("body").find('a[onclick*="mysite.bajajfinservlending.in"]').removeAttr("onclick").attr({ href: 'undermaintenance.aspx', target: '_blank' });
    }
});
*/
