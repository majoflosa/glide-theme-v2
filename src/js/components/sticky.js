import $ from 'jquery';
import BaseComponent from '../base/BaseComponent';

class Sticky extends BaseComponent {
    constructor(element, options) {
        super(element, options);

        this.topOffset = this.$el.offset() && this.$el.offset().top;
        
        this.events();
    }

    events() {
        this.$window.on('scroll', () => this.setStickyClass());
    }

    /** = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
     *  Event handlers
     * = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

    /**
     * Sets sticky class on element if its position is past its sticky point.
     */
    setStickyClass() {
        const { stickyClass, stickyPointOffset: offset } = this.options;
        const scrolled = this.$window.scrollTop();
        const isSticky = scrolled > this.topOffset + offset;

        this.$el.toggleClass(stickyClass, isSticky);
    }

    /** = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
     *  Default options
     * 
     * BaseComponent will automatically set these options on the instance if no 
     * options argument is provided
     * = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
    getDefaultOptions() {
        return {
            stickyPointOffset: 0,
            stickyClass: 'sticky'
        };
    }
}

export default Sticky;
