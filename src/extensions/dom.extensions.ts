declare global {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface HTMLElement {
        replaceClass(classOne: string, classTwo: string): void;
    }
}

HTMLElement.prototype.replaceClass = function (classOne, classTwo) {
    var el = this;

    el.classList.remove(classOne);
    el.classList.add(classTwo);
}

export {}