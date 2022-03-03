
import "../../extensions/dom.extensions";

let sharethis = window.__sharethis__;

document.querySelector<HTMLElement>('.test')?.replaceClass("this", "that");

const inputValue = document.querySelector<HTMLInputElement>('input')?.value;

export { }