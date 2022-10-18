

// doc elements
var painting_info_nav;
var pin1;
var pin2;
var pin3;
var pin4;
var pin5;
var pin6;
var pin7;
var pin8;

// styling
var pin_selected_bg_clr = "#C01E1E";
var pin_selected_clr = "#E8E8E8";


function init_doc_elems(){
    pin1 = document.querySelector('.pin1');
    pin2 = document.querySelector('.pin2');
    pin3 = document.querySelector('.pin3');
    pin4 = document.querySelector('.pin4');

    pin5 = document.querySelector('.pin5');
    pin6 = document.querySelector('.pin6');
    pin7 = document.querySelector('.pin7');
    pin8 = document.querySelector('.pin8');

}

window.onload = function () {
    init_doc_elems();

    pin1.addEventListener('click', () => change_pin(1));
    pin2.addEventListener('click', () => change_pin(2));
    pin3.addEventListener('click', () => change_pin(3));
    pin4.addEventListener('click', () => change_pin(4));
    
    pin5.addEventListener('click', () => change_pin(5));
    pin6.addEventListener('click', () => change_pin(6));
    pin7.addEventListener('click', () => change_pin(7));
    pin8.addEventListener('click', () => change_pin(8));

}

function change_pin(pin_no){
    for (let i = 1; i < 9; i++){
        let pin = document.querySelector('.pin' + i);
        let pin_body = document.querySelector('.pin' + i + 'b');

        if (pin_no == i){

            pin.classList.add("pin_selected");
            pin.classList.remove("pin_unselected");
            pin_body.style.display = 'block';
        } else {
            pin.classList.add("pin_unselected");
            pin.classList.remove("pin_selected");
            pin_body.style.display = 'none';
        }
    }
}
