

window.onload = function(e) {
    renderList(document.body);
};


function renderList(root) {
    var elem = addDivTo(root);
    doXTimes(10, function (i) {
        addDivTo(elem).innerText = "foo: " + i;
    });
}

function doXTimes(numberOfIterations, thingToDo) {
    var i;
    for (i = 0; i < numberOfIterations; i++) {
        thingToDo(i);
    }
}

function addDivTo(rootElement) {
    var elem = document.createElement("div");
    rootElement.appendChild(elem); 
    return elem;
}