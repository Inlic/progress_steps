const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  updateDOM()
})

prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  updateDOM()
})

function updateDOM() {
  setActive()
  const actives = document.querySelectorAll('.active')
  progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100 + '%')
  checkActive()
}

function setActive() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
}

function checkActive() {
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}