export default function useRotateCredential(inputRef, glowRef) {
  let bounds

  const rotateToMouse = (e) => {
    rotateToCard(e.clientX, e.clientY)
  }

  const rotateToTouch = (e) => {
    document.body.style.overflow = "hidden"
    rotateToCard(e.touches[0].clientX, e.touches[0].clientY)
  }

  const rotateToCard = (clientX, clientY) => {
    bounds = inputRef.current.getBoundingClientRect()
    const leftX = clientX - bounds.x
    const topY = clientY - bounds.y
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

    inputRef.current.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `
    glowRef.current.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `
  }

  const removeListener = (e) => {
    inputRef.current.style.transform = ""
    inputRef.current.style.background = ""
    glowRef.current.style.backgroundImage = ""
    document.body.style.overflow = ""
  }

  return { rotateToMouse, rotateToTouch, removeListener }
}
