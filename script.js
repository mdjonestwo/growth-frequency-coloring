window.onload = function () {
  var px, py, isDown = false;
  var img = new Image,
      canvas = document.getElementById('canvasBottom'),
      canvasTop = document.getElementById('canvasTop'),
      ctx = canvas.getContext('2d'),
      ctxMouse = canvasTop.getContext('2d');

  canvasTop.onmousedown = function (e) {
      var pos = getXY(e);
      px = pos.x;
      py = pos.y;
      isDown = true;
  }

  canvasTop.onmouseup = function () {
      isDown = false;
  }

  canvasTop.onmousemove = function (e) {
      if (isDown) {
          var newPos = getXY(e);
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(newPos.x, newPos.y);
          ctx.stroke();
          px = pos.x;
          py = pos.y;
      }
  }

  function getXY(e) {
      var rect = canvasTop.getBoundingClientRect();
      return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
      };
  }
};
