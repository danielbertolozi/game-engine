window.onload = () => {
    const text = document.createElement("span");
    const content = document.createTextNode("text");
    text.appendChild(content)
    document.getElementById("main").appendChild(text);
};