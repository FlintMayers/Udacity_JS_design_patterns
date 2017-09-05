var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {

    function clicker(cat, counter, number){
      cat.addEventListener('click', function(){
        number++;
        counter.innerHTML = number;
      });
    }

    //kitty1 data
    var kitty1 = document.getElementById('kitty');
    var counter1 = document.getElementById('counter');
    var number1 = counter.innerHTML;
    var name = document.getElementById('name');
    name.innerHTML = 'Princess';

    // kitty2 data
    var kitty2 = document.getElementById('kitty2');
    var counter2 = document.getElementById('counter2');
    var number2 = counter2.innerHTML;
    var name2 = document.getElementById('name2');
    name2.innerHTML = 'Toruk';


    
    clicker(kitty1, counter1, number1);
    clicker(kitty2, counter2, number2);

});
