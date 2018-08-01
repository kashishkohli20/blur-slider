let color = document.querySelector('#col');
let text = document.querySelector('.js');
let blur = document.querySelector('#blur');
let spacing = document.querySelector('#spacing')
const img = document.querySelector('img');

// function colChange(){
// 	imgBorder.style.borderColor = color.value;
// 	text.style.color = color.value;
// }
//
// function blurChange(){
// 	// const image = document.querySelector('img')
// 	const val = blur.value;
// 	console.log(val)
// 	img.style.filter = `blur(${val}px)`
// }
//
// function spaceChange(){
// 	const pad = spacing.value
// 	img.style.padding = `${pad}px`
// 	img.style.border = `${pad}px solid ${color}`
// }
//
// color.addEventListener('change', colChange)
// blur.addEventListener("change", blurChange)
// spacing.addEventListener('change', spaceChange)

function handleUpdate(){
	console.log(this.value)
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('change', handleUpdate))
