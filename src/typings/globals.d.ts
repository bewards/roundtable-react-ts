declare global {

    // interface declaration merging: typescript will merge this interface definition together with the Window interface defined in lib.dom.d.ts
    interface Window {
        __sharethis__: object;
    }
}

export { }