function customRender(element,root){
    // const domElement = document.createElement(element.type);
    // domElement.innerHTML = element.children;
    // domElement.href = element.props.href;
    // domElement.target = element.props.target;
    // root.appendChild(domElement);
    // console.log("Done");

    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
        if(prop === "children"){
            continue;
        }

        domElement.setAttribute(prop,element.props[prop]);
    }
    root.appendChild(domElement);
}



const root = document.querySelector("#root");
const element = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "Click me to visit google"
}
customRender(element,root);