function update() {
  const easy = document.querySelector('#easy .card')
  const medium = document.querySelector('#medium .card')
  const hard = document.querySelector('#hard .card')

  const { scrollTop } = document.documentElement

  if (scrollTop <= 937) {
    easy.classList.add('fade-in')
  }
  if (scrollTop >= 470) {
    medium.classList.add('fade-in')
  }
  if (scrollTop >= 1400) {
    hard.classList.add('fade-in')
  }
}

document.addEventListener('scroll', update)
update()
