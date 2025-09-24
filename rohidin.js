	
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
		    navText : ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
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
	        navText : ["<i class='bi bi-caret-left'></i>","<i class='bi bi-caret-right'></i>"],
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
  
  $(document).ready(function(){
	    $('.idr_04').owlCarousel({
	        items: 4,
	        nav: true,
	        dots: false,
	        loop :true,   
	        mouseDrag: true,
	        responsiveClass: true,
	        autoplay: false,
	        autoplayTimeout: 3000,
	        autoplayHoverPause: true,
	        navText : ["<i class='bi bi-chevron-double-left'></i>","<i class='bi bi-chevron-double-right'></i>"],
	        responsive: {
	            0:{
	              items: 1,
                nav: false,
	              dots: true,
	            },
	            480:{
	              items: 2,
                nav: false,
	              dots: true,
	            },
	            767:{
	              items: 3,
                nav: false,
	              dots: true,
	            },
	            992:{
	              items: 3,
                nav: false,
	              dots: true,
	            },
	            1200:{
	              items: 4
	            }
	        }
	    });
	});
  
  $(document).ready(function(){
	    $('.idr_05').owlCarousel({
	        items: 4,
	        nav: false,
	        dots: true,
	        loop :true, 
          center :true,  
	        mouseDrag: true,
	        responsiveClass: true,
          autoplay: true,
	        autoplayHoverPause: true,
	        //navText : ["<i class='bi bi-chevron-double-left'></i>","<i class='bi bi-chevron-double-right'></i>"],
	        responsive: {
	            0:{
	              items: 1,
                nav: false,
	              dots: true,
	            },
	            480:{
	              items: 2,
                nav: false,
	              dots: true,
	            },
	            767:{
	              items: 3,
                nav: false,
	              dots: true,
	            },
	            992:{
	              items: 2,
                nav: false,
	              dots: true,
	            },
	            1200:{
	              items: 2
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
      '<i class="bi bi-arrow-left-square text-white" aria-hidden="true"></i>',
      '<i class="bi bi-arrow-right-square text-white" aria-hidden="true"></i>'
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

})(jQuery); 
