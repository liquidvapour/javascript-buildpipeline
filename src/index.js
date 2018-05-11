window.onload = function(e) {
    var elem = document.createElement("div");
    document.body.appendChild(elem);
    var i;
    for (i = 0; i < 10; i++) {
        var child = document.createElement("div");
        child.innerText = "foo: " + i;
        elem.appendChild(child);
    }
};