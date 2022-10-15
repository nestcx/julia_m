

// document elements
var navbar;
var n1;
var n2;
var n3;
var n4;


// state
var page = 1;

// styling
var nav_selected_bg = "#F0F0F0";
var red_trim = "#C01E1E";
var nav_unselected_clr = "#474747";

function init_doc_elems(){
    navbar = document.querySelector('.navbar');
    n1 = document.querySelector('.n1');
    n2 = document.querySelector('.n2');
    n3 = document.querySelector('.n3');
    n4 = document.querySelector('.n4');
}

window.onload = function () {
    init_doc_elems();

    n1.addEventListener('click', () => change_page(1));
    n2.addEventListener('click', () => change_page(2));
    n3.addEventListener('click', () => change_page(3));
    n4.addEventListener('click', () => change_page(4));
}

function change_page(page_no){

    // loop through each nav/page
    for (let i = 1; i < 5; i++){

        let p = document.querySelector('.p' + i);
        let n = document.querySelector('.n' + i);
        let nt = document.querySelector('.nt' + i);

        if (page_no == i){
            n.style.backgroundColor = nav_selected_bg;
            nt.style.color = red_trim;
            console.log(n.innerHtml);
            p.style.display = "block";
        } else {
            n.style.backgroundColor = '#FFFFFF';
            nt.style.color = nav_unselected_clr;
            p.style.display = "none";
        }
    }
}