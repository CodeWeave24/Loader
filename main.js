// loading progress
const progressText = document.getElementById('progressText')
const statusText = document.getElementById('statusText')
const loadingScreen = document.getElementById('loadingScreen')
const websiteFrame = document.getElementById('websiteFrame')

let progress = 0
const statusMessages = [
  { text: 'Initializing system', progress: 10 },
  { text: 'Loading components', progress: 25 },
  { text: 'Optimizing performance', progress: 45 },
  { text: 'Preparing workspace', progress: 65 },
  { text: 'Almost there', progress: 85 },
  { text: 'Ready to weave', progress: 100 },
]

const loadingInterval = setInterval(() => {
  // Increment progress
  progress += Math.floor(Math.random() * 5) + 1
  if (progress > 100) progress = 100
  progressText.textContent = `${progress}%`

  // Update status message based on progress
  for (const message of statusMessages) {
    if (progress <= message.progress) {
      statusText.textContent = message.text
      break
    }
  }

  // loading completes
  if (progress === 100) {
    clearInterval(loadingInterval)

    // Show website and Hide loading screen
    setTimeout(() => {
      loadingScreen.classList.add('hide')
      websiteFrame.classList.add('show')

      // Focus the iframe
      setTimeout(() => {
        try {
          websiteFrame.contentWindow.focus()
        } catch (e) {
          // frame security exception
        }
      }, 100)
    }, 800) // delay before transition
  }
}, 100)

websiteFrame.onload = function () {}
