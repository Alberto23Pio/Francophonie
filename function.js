
//------------- CAMBIO CLASSE ALLO SCROLL -------------
window.addEventListener('scroll', function() {  

    if(window.scrollY > 500) {
        document.body.classList.add('jeux-down')
    } else {
        this.document.body.classList.remove('jeux-down')
    }
} )
window.addEventListener('scroll', function() {  

    if(window.scrollY > 1500) {
        document.body.classList.add('mars-down')
    } else {
        this.document.body.classList.remove('mars-down')
    }
} )

//----------- CAMBIO CLASSE AL CLICK --------------
let b1 = document.querySelector('.b-s-1');    
let b2 = document.querySelector('.b-s-2');

b1.addEventListener("click", function() {   //al click di item
    b1.classList.toggle('b-1-c');  //panel avrà la classe active
    b2.classList.toggle('b-2-c'); //sec1 avrà la classe sec1_j
});


b2.addEventListener("click", function() {   //al click di item
    b1.classList.toggle('b-1-c');  //panel avrà la classe active
    b2.classList.toggle('b-2-c'); //sec1 avrà la classe sec1_j
});