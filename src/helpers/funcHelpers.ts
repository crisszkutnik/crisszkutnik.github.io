function scrollTo(css_selector: string) {
    let elem: HTMLElement = document.querySelector(css_selector);
    if(elem) 
        window.scrollTo(0, elem.offsetTop + 1);
    else
        console.log("Error. Element " + css_selector + " not found.");
}

export { scrollTo };