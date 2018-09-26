var leftItem = document.getElementById('item0'),
    rightItem = document.getElementById('item1');

;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){

  leftItem.style.transform = "rotate(-" + window.pageYOffset/100 + "deg)";
  rightItem.style.transform = "rotate(" + window.pageYOffset/100 + "deg)";
})
