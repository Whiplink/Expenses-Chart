const bars = document.querySelectorAll('.graph-container > div > div')

fetch('./data.json')
.then(res => res.json())
.then(data => {
  for(let i = 0; i < data.length; i++) {
    const compute = x => `${x/60*100}%`
    bars[i].style.height = compute(data[i].amount)
    bars[i].addEventListener('mouseover', () => {
      const div = document.createElement('div')
      div.textContent = `$${data[i].amount}`
      div.classList.add('hover')
      bars[i].appendChild(div)
      bars[i].div = div
    })
    bars[i].addEventListener('mouseout', () => {
      bars[i].removeChild(bars[i].div)
    })
  }
})
const date = new Date()
const day = date.getDay()-1 < 0? 6: date.getDay()-1
bars[day].style.backgroundColor = "hsl(186, 34%, 60%)"