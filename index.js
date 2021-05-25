function calculate() {
    let taille = document.getElementById('taille').value
    let poids = document.getElementById('poids').value
    let wrapper = document.getElementById('wrapper')
    let result = document.createElement('div')
   
    console.log(wrapper)
    result.innerText = Math.floor(poids / (taille * taille))
    wrapper.appendChild(result)
}