function search() {
    var input = document.getElementById('search');
    input = input.value.toLowerCase();
    var x = document.getElementsByClassName('project');
    for (i = 0; i < x.length; i++) {
        var name = x[i].innerHTML.toLowerCase() //project 1
        console.log(name)
        // console.log(document.getElementById(name.replace(/ /g,'')))
        if (!name.includes(input)) {
            document.getElementById(name.replace(/ /g,'')).style.display = "none";
        }
        else {
            document.getElementById(name.replace(/ /g,'')).style.display = "initial";
        }
        console.log(document.getElementById(name.replace(/ /g,'')))
    }

}

