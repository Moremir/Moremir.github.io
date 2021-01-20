const qs = (selector) => document.querySelector(selector);

document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('transitionend', (e) => {
    e.target.classList.remove('playing')
  })
})

document.addEventListener('keydown', (e) => {
 const audio = qs(`audio[data-key="${e.keyCode}"]`)
 const keyBoard = qs(`.key-${e.keyCode}`)
  if (!audio) return;

  keyBoard.classList.add('playing')
  audio.play()
})
