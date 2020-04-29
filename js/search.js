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

function tableSearch() {
    var input, filter, table, tr, td, i, txtValue;
    
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("bugTable");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }