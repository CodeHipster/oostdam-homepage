
  (function () { 

    function animationListenerClosure(){
      var iteration = 0;
      var animationListener = function AnimationListener(e) {
        // Do not run on each second iteration, as that is the inverse animation which we want in the same position.
        console.log(iteration)
        iteration++;
        if(iteration % 2 === 0){
          return
        }

        var element = e.target
        var parent = element.parentElement;
        var x = parent.offsetWidth - element.offsetWidth
        var y = parent.offsetHeight - element.offsetHeight

        x = (x < 0)? 0 : x * Math.random()
        y = (y < 0)? 0 : y * Math.random()

        x = parent.offsetLeft + x;
        y = parent.offsetTop + y;

        element.style.left = x+'px'
        element.style.top = y+'px'
      }
      return animationListener;
    }

    // handle animation events


    var fingerprints = document.querySelectorAll(".fingerprint");
    console.log(fingerprints)
    fingerprints.forEach(fp => {  
      var listener = animationListenerClosure()
      fp.addEventListener("animationstart", listener, false);
      fp.addEventListener("animationiteration", listener, false);
    });   

   })();