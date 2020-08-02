var targetElement = $0 || document.body;

function getArrowKeyDirection (keyCode) {
  return {
    37: 'left',
    39: 'right',
    38: 'up',
    40: 'down'
  }[keyCode];
}

function isArrowKey (keyCode) {
  return !!getArrowKeyDirection(keyCode);
}

targetElement.addEventListener('keydown', function (event) {
  var direction,
      keyCode = event.keyCode;

  if (isArrowKey(keyCode)) {
    direction = getArrowKeyDirection(keyCode);

    console.log(direction);
  }
});