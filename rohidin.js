/*scrolling banner*/
(function ($) {
  "use strict";

	 $(document).ready(function(){
		 $('.idr_01' ).owlCarousel({
		    items: 3,
		    nav: true,
		    loop :true,
		   
		    mouseDrag: true,
		    responsiveClass: true,
		    /*navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],*/
		    responsive: {
		        0:{
		          items: 1
		        },
		        480:{
		          items: 1
		        },
		        767:{
		          items: 2
		        },
		        992:{
		          items: 3
		        },
		        1200:{
		          items: 3
		        }
		    }
		  });
	 });

	$(document).ready(function(){
	    $('.idr_02').owlCarousel({
	        items: 4,
	        nav: true,
	        loop :true,
	       
	        mouseDrag: true,
	        responsiveClass: true,
	        navText : ["<i class='icofont-bubble-left'></i>","<i class='icofont-bubble-right'></i>"],
	        responsive: {
	            0:{
	              items: 1
	            },
	            480:{
	              items: 2
	            },
	            767:{
	              items: 3
	            },
	            992:{
	              items: 3
	            },
	            1200:{
	              items: 4
	            }
	        }
	    });
	});  

	$(document).ready(function(){
	    $('.idr_03').owlCarousel({
	        items: 4,
	        nav: true,
	        dots: false,
	        loop :true,
	       
	        mouseDrag: true,
	        responsiveClass: true,
	        autoplay: true,
	        autoplayTimeout: 3000,
	        autoplayHoverPause: true,
	        navText : ["<i class='icofont-scroll-left'></i>","<i class='icofont-scroll-right'></i>"],
	        responsive: {
	            0:{
	              items: 1
	            },
	            480:{
	              items: 2
	            },
	            767:{
	              items: 3
	            },
	            992:{
	              items: 3
	            },
	            1200:{
	              items: 4
	            }
	        }
	    });
	});  

	$(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;
 
  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="bi bi-arrow-left-square" aria-hidden="true"></i>',
      '<i class="bi bi-arrow-right-square" aria-hidden="true"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);
 
  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: true,
    nav: true,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
	autoplay: true,
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);
 
  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;
 
    //to disable loop, comment this block
    console.log(el);
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
 
    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    console.log(onscreen)
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();
    console.log(end);
    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }
 
  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }
 
  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});

$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 3; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            autoplay: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});


})(jQuery); 
