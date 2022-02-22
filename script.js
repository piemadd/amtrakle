const Keyboard = window.SimpleKeyboard.default;

const myKeyboard = new Keyboard({
  onKeyPress: button => onKeyPress(button)
});

document.addEventListener('keydown', logKey);

const processKey = (() => {
    
})
