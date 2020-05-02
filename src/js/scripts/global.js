import $ from 'jquery';
import Sticky from '../components/sticky';

// create instances used on all pages
(function() {
    
    // main nav bar
    const navEl = document.querySelector('nav.mf-sticky');
    const stickyNav = new Sticky(navEl);

})();