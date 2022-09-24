const delay = (ms = 150) =>
  new Promise((resolve) => {
    resolve(setTimeout(null, ms))
  })
export default delay
