import $ from 'jquery';

class BaseComponent {
    constructor(element, options) {
        if (!element) {
            if (mfGlide.env.isDevMode) throw new Error('No valid element provided.');

            return;
        }

        this.el = element;
        this.$el = $(element);

        this.$window = $(window);
        this.$document = $(document);

        this.options = options 
            ? Object.assign({}, this.getDefaultOptions(), options)
            : this.getDefaultOptions();

        // event bus?
    }

    getDefaultOptions() {}
}

export default BaseComponent;
