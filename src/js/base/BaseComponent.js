import $ from 'jquery';

class BaseComponent {
    constructor(element, options) {
        // environment
        this.env = window.location.origin.match(/localhost/) ? 'development' : 'production';
        this.isDevMode = this.env === 'development';
        this.isProdMode = this.env === 'production';

        if (!element) {
            if (this.isDevMode) throw new Error('No valid element provided.');

            return;
        }

        this.el = element;
        this.$el = $(element);

        this.$window = $(window);
        this.$document = $(document);

        this.options = options || this.getDefaultOptions();

        // event bus?
    }

    getDefaultOptions() {}
}

export default BaseComponent;
