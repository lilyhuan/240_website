// modal https://getbootstrap.com/docs/4.0/components/modal/
// DOM https://www.w3schools.com/jsref/dom_obj_heading.asp
// looping https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
// jquery plug in? https://github.com/typeiii/jquery-csv https://stackoverflow.com/questions/1293147/javascript-code-to-parse-csv-data


$.ajax({
    url: 'projects.csv',
    dataType: 'text',
}).done(generate);

function generate(data) {
    // var allRows = data.split(/\r?\n|\r/); // ???
    var projects = new Array();
    // append data from csv into array somehow??
}

function renderCards(projects) {
    document.getElementById("projects").innerHTML = "";
    
    for(var i = 0; i < projects.length; i++) {
        var card = document.createElement("DIV");
        var logo = document.createElement("IMG");

        var body = document.createElement("DIV");
        var title = document.createElement("H5");


        card.className = "card";
        logo.setAttribute("src", projects[i]);
        logo.setAttribute("data-toggle", "modal"); // popups
        logo.setAttribute("data-target", projects[i]); //id to modal

        body.className = "card-body";
        title.createTextNode(projects[i]);
    }
}