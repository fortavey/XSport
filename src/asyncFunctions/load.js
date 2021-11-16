const loadFunction = async () => {
  try {
    const res = await fetch('https://google.com')
    const data = await res.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

export default loadFunction
