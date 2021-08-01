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

    if (!matchesSelector(e.target, 'a')) {
        return;
    }
    if (activeFilterMenuLink !== null) {
        activeFilterMenuLink.classList.remove('active-filter');
    }

    e.target.classList.add('active-filter');
    const filterValue = e.target.getAttribute('data-filter');
    iso.arrange({filter: filterValue});
});

// lightbox gallery
lightGallery(document.getElementById('js-photo-grid'), {
    controls: true
});

// for parralax
const rellax = new Rellax('.rellax');
