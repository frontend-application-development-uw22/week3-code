class HTMLElement {
    constructor(tag, content) {
        this.tag = tag;
        this.content = content.toUpperCase();
    }

    render() {
        return `<${this.tag}>${this.content}</${this.tag}>`
    }
}

class DivElement extends HTMLElement {
    constructor(content) {
        super('div', content);
    }
}

const div = new DivElement('Hello world!');
console.log(div.render());