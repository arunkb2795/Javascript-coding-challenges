let generate_btn = document.getElementById('generate-btn');
let generated_str = document.getElementById('generate-string');

generate_btn.onclick = () => {
  generated_str.innerText = '';
  let str = document.getElementById('string').value;
  let value = str.toLowerCase().indexOf('new') >= 0 ? str : `New! ${str}`;
  generated_str.innerText = value;
};
