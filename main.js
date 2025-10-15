const particlesContainer = document.getElementById('particles')
const particleCount = 60

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div')
  particle.classList.add('particle')
  particle.style.setProperty('--x', Math.random())
  particle.style.left = `${Math.random() * 100}%`
  particle.style.animationDuration = `${15 + Math.random() * 10}s`
  particle.style.animationDelay = `${Math.random() * 5}s`
  particle.style.width = `${2 + Math.random() * 6}px`
  particle.style.height = particle.style.width

  // Randomize particle colors
  const colors = [
    'rgba(255, 138, 0, 0.8)',
    'rgba(229, 46, 113, 0.8)',
    'rgba(94, 94, 255, 0.8)',
    'rgba(0, 222, 255, 0.8)',
    'rgba(0, 255, 149, 0.8)',
  ]
  particle.style.background = colors[Math.floor(Math.random() * colors.length)]

  particlesContainer.appendChild(particle)
}

// Simulate loading progress
const progressBar = document.getElementById('progress-bar')
const loader = document.getElementById('loader')
const websiteFrame = document.getElementById('website-frame')
const completedText = document.getElementById('completed-text')

let progress = 0
const interval = setInterval(() => {
  progress += Math.random() * 8
  if (progress >= 100) {
    progress = 100
    clearInterval(interval)

    // Show completion text
    completedText.classList.add('show')

    // Hide loader and show website after a delay
    setTimeout(() => {
      loader.classList.add('hidden')
      websiteFrame.classList.add('visible')
    }, 1500)
  }
  progressBar.style.width = `${progress}%`
}, 300)
