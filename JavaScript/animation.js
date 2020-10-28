
    train.onclick = function() {
    var start = Date.now();

     var timer = setInterval(function() {
        var timePassed = Date.now() - start;

        train.style.left = timePassed / 5 + 'px';

        if (timePassed > 6000) clearInterval(timer);

      }, 20);
     }
   