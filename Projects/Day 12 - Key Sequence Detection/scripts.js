const pressed = [];
const code = 'chris';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(0, pressed.length - code.length);
  console.log(pressed);
  pressed.join('').includes(code) && cornify_add();
});