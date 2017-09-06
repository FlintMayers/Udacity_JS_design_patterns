var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {

    //array of cats
    var cats = ['Princess', 'Tom', 'Couple', 'Pirate', 'Amnesty'];

    var select = document.getElementById('cats');

    for(var i = 0; i < cats.length; i++){
      //generate select options from cat names
      select.options[select.options.length] = new Option(cats[i], 'cat' + i);

      //display selected cat and hide all the others
      select.addEventListener('change', function(){
          for(var i = 0; i < cats.length; i++){
            var catId = 'cat' + i;
            var cat = document.getElementById(catId);
            cat.style.display = 'none';
          }

          var currentCat = document.getElementById(this.value);
          currentCat.style.display = 'block';
      });

      //create a unique container for each cat:)
      var catDiv = document.createElement('div');
      catDiv.setAttribute('id', 'cat' + i);
      catDiv.setAttribute('class', 'catContainer');
      document.body.appendChild(catDiv);

      //prints the names
      var title = document.createElement("h1");
      var titleText = document.createTextNode(cats[i]);
      title.appendChild(titleText);
      catDiv.appendChild(title);

      //prints the counter
      var counter = document.createElement('h2');
      var counterText = document.createTextNode("0");
      counter.appendChild(counterText);
      catDiv.appendChild(counter);

      // prints the photos
      var catPhoto = document.createElement("img");
      catPhoto.src = './img/cat' + i + '.jpg';
      catDiv.appendChild(catPhoto);

      //increment counter after clicking cat photo
      catPhoto.addEventListener('click', (function(currentCounter){
        return function(){
            var currentValue = parseInt(currentCounter.innerHTML);
            currentCounter.innerHTML = currentValue + 1;
        }
      })(counter));

    }

});
