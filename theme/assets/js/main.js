 // init Isotope
  const elem = document.querySelector('.gallery-gird');
  const iso = new Isotope(elem, {
    // options
    itemSelector: '.gallery-grid__item',
    layoutMode: 'fitRows'
  });


 const filterMenu = document.querySelector(".gallery-filter-menu");

   filterMenu.addEventListener("click", function (e) {
     e.preventDefault();
     const activeFilterMenuLink = document.querySelector(".gallery-filter-menu a.active-filter");

     if ( !matchesSelector(e.target, 'a') ) {
       return;
     }
     if(activeFilterMenuLink !== null) {
       activeFilterMenuLink.classList.remove('active-filter');
     }

     e.target.classList.add('active-filter');
     const filterValue = e.target.getAttribute('data-filter');
     iso.arrange({ filter: filterValue });
   });

 // $('.gallery-filter-menu').on( 'click', 'a', function() {
 //   const filterValue = $(this).attr('data-filter');
 //   iso.isotope({ filter: filterValue });
 // });

  // bind filter button click
  // $(".gallery-filter-menu").on("click", "a", function(e) {
  //   e.preventDefault();
  //
  //   var filterValue = $(this).attr("data-filter");
  //   $grid.isotope({ filter: filterValue });
  //
  //   $(".gallery-filter-menu a").removeClass("active");
  //   $(this).addClass("active");
  // });

