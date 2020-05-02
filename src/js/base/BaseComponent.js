import $ from 'jquery';

class BaseComponent {
    constructor(element) {
        this.el = element;
        this.$el = $(element);

        this.$window = $(window);
        this.$document = $(document);

        // event bus?
    }
}

export default BaseComponent;
