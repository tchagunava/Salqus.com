
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//     document.getElementById("insights");
//     document.getElementById("insights").innerHTML = "INSIGHTS &#9652;";
//     if (insights.innerHTML === 'INSIGHTS &#9662;') {
//         insights.innerHTML = 'INSIGHTS &#9652;';
//     } else {
//         insights.innerHTML = 'INSIGHTS &#9662;';
//     }
// }


function myFunction() {
    // document.getElementById("insights").innerHTML = "INSIGHTS &#9652;";
    document.getElementById("myDropdown").classList.toggle("show");
    var x = document.getElementById("insights");

    if (x.innerText === "INSIGHTS ▾") {
        x.innerText = "INSIGHTS ▴";
    } else {
        x.innerText = "INSIGHTS ▾";
    }


}


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunctionlng() {
    document.getElementById("myDropdownlng").classList.toggle("show");
    var x = document.getElementById("language");

    if (x.innerText === "ENG ▾") {
        x.innerText = "ENG ▴";
    } else {
        x.innerText = "ENG ▾";
    }
}

function myFunctionlng1() {
    document.getElementById("myDropdownlng1").classList.toggle("show");
}



// function changeImage() {

//     if (document.getElementById("imgClickAndChange").src == "resources/icons/hovered/Group 3276.png") {
//         document.getElementById("imgClickAndChange").src = "resources/icons/Group 326.png";
//     }
//     else {
//         document.getElementById("imgClickAndChange").src = "resources/icons/Group 326.png";
//     }
// }

