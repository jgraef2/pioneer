var snakevideo = document.getElementById('snakevideo');
var totalDistance = 0;
var lastSeenAt = {x: null, y: null};

// ---- Accelerate: ----
var accelamount = 0.0001;

$(document).mousemove(function(event) {
    if(lastSeenAt.x) {
        totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - event.clientY, 2) + Math.pow(lastSeenAt.x - event.clientX, 2));

      // snakevideo.currentTime = totalDistance*accelamount;

    }
    lastSeenAt.x = event.clientX;
    lastSeenAt.y = event.clientY;
});
