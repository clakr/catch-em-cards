function update() {
  easy = document.querySelector('#easy .card')
  medium = document.querySelector('#medium .card')
  hard = document.querySelector('#hard .card')

  medRect = document.querySelector('#medium').getBoundingClientRect()

  const { scrollTop } = document.documentElement

  if (medRect.y <= medRect.height && medRect.y >= 0) {
    easy.classList.add('animate')
    hard.classList.remove('animate')
  }
  if (medRect.y <= Math.floor(medRect.height - medRect.height * 0.25)) {
    medium.classList.add('animate')
  }
  if (medRect.y <= Math.floor(0 - medRect.height * 0.25)) {
    hard.classList.add('animate')
    easy.classList.remove('animate')
  }
  if (medRect.y == 937 || medRect.y == -937) {
    medium.classList.remove('animate')
  }
}

document.addEventListener('scroll', update)
update()
