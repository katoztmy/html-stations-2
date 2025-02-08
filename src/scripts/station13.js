function changeBackgroundColor(e) {
  console.log(e.target.checked)
  const p = document.getElementById('text');
  if (e.target.checked) {
    p.style.backgroundColor = 'red'
  } else {
    p.style.backgroundColor = 'white'
  }
}

const input = document.getElementById('check');
input.addEventListener('click', changeBackgroundColor())