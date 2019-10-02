
///// SVG EFFECTS FOR BUTTON BG LINES /////

        var animData = {
                container: document.getElementById('container'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'https://labs.nearpod.com/bodymovin/demo/2016/data.json'
            };
            var anim = bodymovin.loadAnimation(animData);

        function svgeffects() {

          var sendbtn2 = document.getElementById("sendbtn2");

        	// Get the Object by ID
        	var a = document.getElementById("buttonbglines");
        	// Get the SVG document inside the Object tag
        	var svgDoc = a.contentDocument;
        	// Get one of the SVG items by ID;
        	var svgItem = svgDoc.getElementById("Mask_Group_201");
        	// Set the colour to something else
        	svgItem.setAttribute("fill", "#5D0000");

          sendbtn2.addEventListener('mouseover', function(){
          svgItem.setAttribute("fill", "#F9423A");
          })
          sendbtn2.addEventListener('mouseout', function(){
          svgItem.setAttribute("fill", "#5D0000");
          })

        };

/// TEXT ROTATE /////

        var TxtRotate = function(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 8) || 200;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
        };

        TxtRotate.prototype.tick = function() {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];

          if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

          var that = this;
          var delta = 20 - Math.random() * 20;

          if (this.isDeleting) { delta /= 2; }

          if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 30;
          }

          setTimeout(function() {
            that.tick();
          }, delta);
        };

///// MASTER WINDOW ON LOAD  /////
        window.onload = function() {
          var elements = document.getElementsByClassName('txt-rotate');
          for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
          }
          // INJECT CSS
          var css = document.createElement("style");
          css.type = "text/css";
          css.innerHTML = ".txt-rotate > .wrap { border-bottom: 0.05em solid #FFF9F5; padding-bottom: 5px }";
          document.body.appendChild(css);

          function svgeffects();
        };
