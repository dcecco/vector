import Element from './element.js';
/**
* A circle is a basic geometric element with a position and radius.
*/
export default class A extends Element {
    /**
    * Constructs a link element with the provided href.
    */
    constructor(href) {
        let root = document.createElementNS('http://www.w3.org/2000/svg', 'a');
        root.setAttributeNS(null, 'href', href.toString());
        super(root);
    }
    // comment inherited from base class
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
        return this;
    }
    // comment inherited from base class
    getAttribute(name) {
        return this.root.getAttribute(name);
    }
}
//# sourceMappingURL=a.js.map