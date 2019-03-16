let clap = new Audio('./sounds/clap.wav')
let crash = new Audio('./sounds/crash.wav')
let ride = new Audio('./sounds/ride.wav')
let kick = new Audio('./sounds/kick.wav')
let snare = new Audio('./sounds/snare.wav')
let percussion = new Audio('./sounds/percussion.wav')
let closedhi = new Audio('./sounds/closed-high-hat.wav')
let openhi = new Audio('./sounds/open-high-hat.wav')

let claptwo = new Audio('./sounds/clap-two.wav')
let crashtwo = new Audio('./sounds/crash-two.wav')
let ridetwo = new Audio('./sounds/ride-two.wav')
let kicktwo = new Audio('./sounds/kick-two.wav')
let snaretwo = new Audio('./sounds/snare-two.wav')
let percussiontwo = new Audio('./sounds/percussion-two.wav')
let closedhitwo = new Audio('./sounds/closed-high-hat-two.wav')
let openhitwo = new Audio('./sounds/open-high-hat-two.wav')

changeKits = () => {
  let kitOne = document.getElementById('button-holder-one')
  let kitTwo = document.getElementById('button-holder-two')
  let titleOne = document.getElementById('titleOne')
  let titleTwo = document.getElementById('titleTwo')
  if (kitOne.classList.contains('hidden')) {
    console.log('Two')
    kitTwo.classList.add('hidden')
    titleTwo.classList.add('hidden')
    kitOne.classList.remove('hidden')
    titleOne.classList.remove('hidden')
  } else if (kitTwo.classList.contains('hidden')) {
    console.log('One')
    kitTwo.classList.remove('hidden')
    titleTwo.classList.remove('hidden')
    kitOne.classList.add('hidden')
    titleOne.classList.add('hidden')
  }
}

document.onkeydown = function(e) {
  let kitOne = document.getElementById('button-holder-one')
  let kitTwo = document.getElementById('button-holder-two')
  if (kitTwo.classList.contains('hidden')) {
    switch (e.keyCode) {
      case 81:
        document.getElementById('Q').click()
        document.getElementById('Q').classList.add('buttonPressed')
        setTimeout(function() {
          document.getElementById('Q').classList.remove('buttonPressed')
        }, 200)
        //   clap.pause()
        //   clap.currentTime = 0
        //   clap.play()
        break
      case 87:
        document.getElementById('W').click()
        document.getElementById('W').classList.add('buttonPressed')
        setTimeout(function() {
          document.getElementById('W').classList.remove('buttonPressed')
        }, 200)
        //   crash.pause()
        //   crash.currentTime = 0
        //   crash.play()
        break
      case 69:
        document.getElementById('E').click()
        document.getElementById('E').classList.add('buttonPressed')
        setTimeout(function() {
          document.getElementById('E').classList.remove('buttonPressed')
        }, 200)
        //   ride.pause()
        //   ride.currentTime = 0
        //   ride.play()
        break
      case 82:
        document.getElementById('R').click()
        document.getElementById('R').classList.add('buttonPressed')
        setTimeout(function() {
          document.getElementById('R').classList.remove('buttonPressed')
        }, 200)
        //   kick.pause()
        //   kick.currentTime = 0
        //   kick.play()
        break
      case 84:
        document.getElementById('T').click()
        document.getElementById('T').classList.add('buttonPressed')
        setTimeout(function() {
          document.getElementById('T').classList.remove('buttonPressed')
        }, 200)
        //   snare.pause()
        //   snare.currentTime = 0
        //   snare.play()
        break
      case 89:
        document.getElementById('Y').click()
        document.getElementById('Y').classList.add('buttonPressed')
        setTimeout(function() {
          document.getElementById('Y').classList.remove('buttonPressed')
        }, 200)
        //   percussion.pause()
        //   percussion.currentTime = 0
        //   percussion.play()
        break
      case 85:
        document.getElementById('U').click()
        document.getElementById('U').classList.add('buttonPressed')
        setTimeout(function() {
          document.getElementById('U').classList.remove('buttonPressed')
        }, 200)
        //   closedhigh.pause()
        //   closedhigh.currentTime = 0
        //   closedhigh.play()
        break
      case 73:
        document.getElementById('I').click()
        document.getElementById('I').classList.add('buttonPressed')
        setTimeout(function() {
          document.getElementById('I').classList.remove('buttonPressed')
        }, 200)
        //   openhigh.pause()
        //   openhigh.currentTime = 0
        //   openhigh.play()
        break
    }
  } else if (kitOne.classList.contains('hidden')) {
    switch (e.keyCode) {
      case 81:
        document.getElementById('Q2').click()
        document.getElementById('Q2').classList.add('buttonTwoPressed')
        setTimeout(function() {
          document.getElementById('Q2').classList.remove('buttonTwoPressed')
        }, 200)
        //   clap.pause()
        //   clap.currentTime = 0
        //   clap.play()
        break
      case 87:
        document.getElementById('W2').click()
        document.getElementById('W2').classList.add('buttonTwoPressed')
        setTimeout(function() {
          document.getElementById('W2').classList.remove('buttonTwoPressed')
        }, 200)
        //   crash.pause()
        //   crash.currentTime = 0
        //   crash.play()
        break
      case 69:
        document.getElementById('E2').click()
        document.getElementById('E2').classList.add('buttonTwoPressed')
        setTimeout(function() {
          document.getElementById('E2').classList.remove('buttonTwoPressed')
        }, 200)
        //   ride.pause()
        //   ride.currentTime = 0
        //   ride.play()
        break
      case 82:
        document.getElementById('R2').click()
        document.getElementById('R2').classList.add('buttonTwoPressed')
        setTimeout(function() {
          document.getElementById('R2').classList.remove('buttonTwoPressed')
        }, 200)
        //   kick.pause()
        //   kick.currentTime = 0
        //   kick.play()
        break
      case 84:
        document.getElementById('T2').click()
        document.getElementById('T2').classList.add('buttonTwoPressed')
        setTimeout(function() {
          document.getElementById('T2').classList.remove('buttonTwoPressed')
        }, 200)
        //   snare.pause()
        //   snare.currentTime = 0
        //   snare.play()
        break
      case 89:
        document.getElementById('Y2').click()
        document.getElementById('Y2').classList.add('buttonTwoPressed')
        setTimeout(function() {
          document.getElementById('Y2').classList.remove('buttonTwoPressed')
        }, 200)
        //   percussion.pause()
        //   percussion.currentTime = 0
        //   percussion.play()
        break
      case 85:
        document.getElementById('U2').click()
        document.getElementById('U2').classList.add('buttonTwoPressed')
        setTimeout(function() {
          document.getElementById('U2').classList.remove('buttonTwoPressed')
        }, 200)
        //   closedhigh.pause()
        //   closedhigh.currentTime = 0
        //   closedhigh.play()
        break
      case 73:
        document.getElementById('I2').click()
        document.getElementById('I2').classList.add('buttonTwoPressed')
        setTimeout(function() {
          document.getElementById('I2').classList.remove('buttonTwoPressed')
        }, 200)
        //   openhigh.pause()
        //   openhigh.currentTime = 0
        //   openhigh.play()
        break
    }
  }
}

play = letter => {
  if (letter === 'Q') {
    clap.pause()
    clap.currentTime = 0
    clap.play()
  } else if (letter === 'W') {
    crash.pause()
    crash.currentTime = 0
    crash.play()
  } else if (letter === 'E') {
    ride.pause()
    ride.currentTime = 0
    ride.play()
  } else if (letter === 'R') {
    kick.pause()
    kick.currentTime = 0
    kick.play()
  } else if (letter === 'T') {
    snare.pause()
    snare.currentTime = 0
    snare.play()
  } else if (letter === 'Y') {
    percussion.pause()
    percussion.currentTime = 0
    percussion.play()
  } else if (letter === 'U') {
    closedhi.pause()
    closedhi.currentTime = 0
    closedhi.play()
  } else if (letter === 'I') {
    openhi.pause()
    openhi.currentTime = 0
    openhi.play()
  } else if (letter === 'Q2') {
    claptwo.pause()
    claptwo.currentTime = 0
    claptwo.play()
  } else if (letter === 'W2') {
    crashtwo.pause()
    crashtwo.currentTime = 0
    crashtwo.play()
  } else if (letter === 'E2') {
    ridetwo.pause()
    ridetwo.currentTime = 0
    ridetwo.play()
  } else if (letter === 'R2') {
    kicktwo.pause()
    kicktwo.currentTime = 0
    kicktwo.play()
  } else if (letter === 'T2') {
    snaretwo.pause()
    snaretwo.currentTime = 0
    snaretwo.play()
  } else if (letter === 'Y2') {
    percussiontwo.pause()
    percussiontwo.currentTime = 0
    percussiontwo.play()
  } else if (letter === 'U2') {
    closedhitwo.pause()
    closedhitwo.currentTime = 0
    closedhitwo.play()
  } else if (letter === 'I2') {
    openhitwo.pause()
    openhitwo.currentTime = 0
    openhitwo.play()
  }
}
