
function render(reactElement, root) {

    //This is the brute force method to render the returned html by the javascript function:-

    /*
    const newElement = document.createElement(reactElement.type)
    newElement.innerHTML = reactElement.Children
    newElement.setAttribute('href',reactElement.props.href)
    newElement.setAttribute('target', reactElement.props.target)
    root.appendChild(newElement)
    */
    
    //  optimized method to render:-
    
    const newElement = document.createElement(reactElement.type)
    newElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        if (prop ==='children') {    
            continue;
        }
        newElement.setAttribute(prop, reactElement.props[prop]);
        root.appendChild(newElement)
        
    }
}



const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target:"_blank"
    },
    Children:"click me to visit google"
}

const root = document.querySelector("#root")

render(reactElement,root)