import $ from 'jquery';

class BaseComponent {
    constructor(element, options) {
        if (!element) {
            throw new Error('No valid element provided.');
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
