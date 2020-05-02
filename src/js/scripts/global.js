import $ from 'jquery';
import Sticky from '../components/sticky';

(function() {

    // set environment info
    const env = window.location.origin.match(/localhost/) ? 'development' : 'production';
    const isDevMode = env === 'development';
    const isProdMode = env === 'production';

    // initiate theme's namespace/global variable
    const mfGlide = window.mfGlide = window.mfGlide || { 
        env: { mode: env, isDevMode, isProdMode },
        components: {},
    };
    
    /** 
     * Create instances used on all pages 
     */ 

    // main nav bar
    const navEl = document.querySelector('nav.mf-sticky');
    mfGlide.components.stickyNav = new Sticky(navEl);

})();