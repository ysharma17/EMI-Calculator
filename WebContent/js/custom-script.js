// JavaScript source code

$(document).ready(function () {
    $("#top-search input").click(function () {
       $(this).val("");
    });

    $('#go').click(function () {
        window.location.replace("search.aspx?val=" + $('#search').val());
    });

    $('#search').keypress(function (e) {
        if (e.which == 13) {//Enter key pressed
            $('#go').click();//Trigger search button click event
        }
    });
    $.widget("custom.catcomplete", $.ui.autocomplete, {
        _renderMenu: function (ul, items) {
            var that = this,
              currentCategory = "";
            $.each(items, function (index, item) {
                if (item.category != currentCategory) {
                    ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                    currentCategory = item.category;
                }
                that._renderItemData(ul, item);
            });
        }
    });


});
// search  start

function ckBlank() {
    var txt = document.getElementById("search");
    var lbl = document.getElementById("lblErr");

    if (txt.value == "") {
        lbl.style.display = '';
        return false;
    }
    else {
        lbl.style.display = 'none';
        return true;
    }

}


$(function () {
    searchAutoComplete();
});

function searchAutoComplete() {
    $("#search").autocomplete({
        source: function (request, response) {
            $.ajax({
                //url: "http://173.193.213.198:8983/solr/PowerPortal/suggest?start=0&rows=100&fq=job_id:3&wt=json&json.wrf=?",
                url: "http://103.23.28.65:8983/solr/PowerPortal/terms?start=0&rows=100&fq=job_id:3&wt=json&terms.prefix=" + $("#search").val() + "&json.wrf=?",
                dataType: "jsonp",
                data: {
                    //q: request.term,
                    rows: 100
                },
                success: function (data) {
                    var source = [];
                    //if (data.spellcheck.suggestions.length > 0)
                    //    for (var i = 0; i < data.spellcheck.suggestions[1].suggestion.length; i++) {
                    //        source.push(data.spellcheck.suggestions[1].suggestion[i]);
                    //    }
                    if (data.terms.urltext.length > 0)
                        for (var i = 0; i < data.terms.urltext.length;) {
                            source.push(data.terms.urltext[i]);
                            i = i + 2;
                        }
                    response(source);
                }
            });
        },
        minLength: 0,
        //select: function (event, ui) {
        //    log(ui.item ?
        //      "Selected: " + ui.item.label :
        //      "Nothing selected, input was " + this.value);
        //},
        open: function (event, ui) {
            $('ul.ui-autocomplete').addClass("productSearch");
        },
        close: function (event, ui) {
            $('ul.ui-autocomplete').removeClass("productSearch");
        }
    });
}


/* End search script */
//left Flyout
//author: ?, I found this useful.
startList = function () {
    if (document.all && document.getElementById) {
        navRoot = document.getElementById("lfly");
        for (i = 0; i < navRoot.childNodes.length; i++) {
            node = navRoot.childNodes[i];
            if (node.nodeName == "LI") {
                node.onmouseover = function () {
                    this.className += " over";
                }
                node.onmouseout = function () {
                    this.className = this.className.replace(" over", "");
                }
            }
        }
    }
}
window.onload = startList;
//left Flyout End


(function ($) { $.fn.hoverIntent = function (f, g) { var cfg = { sensitivity: 7, interval: 100, timeout: 0 }; cfg = $.extend(cfg, g ? { over: f, out: g } : f); var cX, cY, pX, pY; var track = function (ev) { cX = ev.pageX; cY = ev.pageY; }; var compare = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) { $(ob).unbind("mousemove", track); ob.hoverIntent_s = 1; return cfg.over.apply(ob, [ev]); } else { pX = cX; pY = cY; ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); }, cfg.interval); } }; var delay = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); ob.hoverIntent_s = 0; return cfg.out.apply(ob, [ev]); }; var handleHover = function (e) { var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget; while (p && p != this) { try { p = p.parentNode; } catch (e) { p = this; } } if (p == this) { return false; } var ev = jQuery.extend({}, e); var ob = this; if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); } if (e.type == "mouseover") { pX = ev.pageX; pY = ev.pageY; $(ob).bind("mousemove", track); if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); }, cfg.interval); } } else { $(ob).unbind("mousemove", track); if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout(function () { delay(ev, ob); }, cfg.timeout); } } }; return this.mouseover(handleHover).mouseout(handleHover); }; })(jQuery);

//start drop down menu scripts @@@@@@
$(document).ready(function () {
    function megaHoverOver() {
        //	$(this).click( function(){

        $(this).find(".subnav").stop().fadeTo('', 1).show();
        $(this).find(".menuArrow").stop().fadeTo('', 1).show();
        //$(this + " .sub").css({zIndex:999999});
        //});
        $(this).find(".Menusubnav").stop().fadeTo('', 1).show();
        $(this).find(".Menusubnavabout").stop().fadeTo('', 1).show();
        $(this).find(".menuArrownav").stop().fadeTo('', 1).show();
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
            $(this).find(".subnav").css({ 'width': biggestRow });
            $(this).find(".row:last").css({ 'margin': '0' });

        } else { //If row does not exist...

            $(this).calcSubWidth();
            //Set Width
            $(this).find(".subnav").css({ 'width': rowWidth });
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
        $(this).find(".Menusubnav").stop().fadeTo('', 0, function () {
            $(this).hide();
        });
        $(this).find(".Menusubnavabout").stop().fadeTo('', 0, function () {
            $(this).hide();
        });
        $(this).find(".menuArrownav").stop().fadeTo('', 0, function () {
            $(this).hide();
        });
    }

    var config = {
        sensitivity: 1, // number = sensitivity threshold (must be 1 or higher)    
        interval: 100, // number = milliseconds for onMouseOver polling interval    
        over: megaHoverOver, // function = onMouseOver callback (REQUIRED)    
        timeout: 100, // number = milliseconds delay before onMouseOut    
        out: megaHoverOut // function = onMouseOut callback (REQUIRED)    
    };

    $("#menu ul li .subnav").css({ 'opacity': '0' });
    $("#menu ul li .menuArrow").css({ 'opacity': '0' });
    $("#menu > ul > li").hoverIntent(config);
    //$(".dashDetails > span").hoverIntent(config);
	
	
	
	
	
	
	
	
	
	
//// Reading more & Less
//var conHeight = $('.viewTabCont:visible:first-child .lt-content').height();
//
////alert(conHeight)
///* Leadership team Scroller */
//$(window).load(function () {
//    var divHeight = 420;
//    var posY;
//
//    $('.lt-main > div').css({ 'height': '420px', 'overflow': 'hidden', 'margin': '5px 7px' });
//    $('.viewTabCont:visible').addClass('leader');
//
//
//    $('.viewTabCont .back').fadeOut();
//
//    $('.leader .contReading').live('click', function () {
//        conHeight = $('.leader .lt-main .lt-content').height();
//        posY = Math.abs(conHeight - divHeight);
//        if (conHeight < divHeight && (marginTop >= posY && marginTop >= (posY + divHeight))) {
//            $(this).fadeOut();
//            $(this).next('.back').fadeIn();
//            return false;
//        } else {
//            marginTop += divHeight;
//            $('.leader .lt-main .lt-content').animate({ marginTop: -marginTop }, 500);
//            $(this).next('.back').fadeIn();
//            if (marginTop >= posY && marginTop <= (posY + divHeight)) {
//                $(this).fadeOut();
//                $(this).next('.back').fadeIn();
//            }
//        }
//    });
//
//    $('.leader .back').live('click', function () {
//        if (marginTop == 0) {
//            $(this).fadeOut();
//            $(this).prev('.contReading').fadeIn();
//            return false;
//        }
//        marginTop -= divHeight;
//        $('.leader .lt-main .lt-content').animate({ marginTop: -marginTop }, 500);
//        $(this).prev('.contReading').fadeIn();
//        if (marginTop == 0) {
//            $(this).fadeOut();
//            $(this).prev('.contReading').fadeIn();
//        }
//    });
//});
//

/* End Leadership team Scroller  */	
	
	
	
	
	
	
	
	
//*******popup code  ***
$(document).ready(function () {
    $("a.offer_pop").fancybox();
    $("a.moppop").fancybox({
        type: 'iframe',
        width: 595,
        height: 1000
    });
    $("a.EMIspop").fancybox({
        type: 'iframe',
        width: 785,
        height: 1000
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
	

    // hide #back-top first
$("#back-top").hide();

    // fade in #back-top
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 380) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});


    //Top header auto hide//
function TopshowDiv() {
    if ($(window).scrollTop() > 100) {
        $('.headertop').hide('fast');
    } else {
        $('.headertop').show('fast');
    }//);
}
$(window).scroll(TopshowDiv);
TopshowDiv();

    ////Nav bg Trans//////
$('.menublackbg').hide();
$("#menu").mouseenter(function () {
    $('.menublackbg').show();
});
$("#menu").mouseleave(function () {
    $('.menublackbg').hide();
});
	
	
	
	
	
});




//Script for fix to scroll quick link

$(document).ready(function() {
	var s = $(".qlinks");
	var pos = s.position();                    
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();

		if (windowpos >= pos.top) {
			s.addClass("stick");
		} else {
			s.removeClass("stick"); 
		}
	});
});		

$(document).ready(function() {
var s = $("ul#lfly");
var pos = s.position();
$(window).scroll(function () {
    var windowpos = $(window).scrollTop();

    if (windowpos >= pos.top) {
        s.addClass("lfly_stick");
    } else {
        s.removeClass("lfly_stick");
    }
});
});


/*********On Quick links click set position of .bodyright content*********/
$(window).load(function () {

    var quicklinks = window.location.hash;
    quicklinks = quicklinks.substr(1);

    if (quicklinks == 'QLcontFlt') {
        var topQuick = $('.bodyright').offset().top;
        topQuick = topQuick - $('#top-header').height() -25;
        $('body').animate({ scrollTop: topQuick });
    }
})

/*share pop up open close script for all template*/
//<![CDATA[ 
$(document).ready(function(){
$(".shareboximage").mouseenter(function(){
    clearTimeout($('#def').data('timeoutId'));
    $('#def').show(200);
}).mouseleave(function(){
    var timeoutId = setTimeout(function(){
        $('#def').hide(200);
    }, 650);
    $('#def').data('timeoutId', timeoutId); 
});

$("#def").mouseenter(function(){
    clearTimeout($('#def').data('timeoutId'));
}).mouseleave(function(){
    var timeoutId = setTimeout(function(){
        $('#def').hide(200);
    }, 650);
    $('#def').data('timeoutId', timeoutId); 
});

});//]]>  

