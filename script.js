let adicionar = document.querySelector("#adicionar")
let anotacoes = document.querySelector('.anotacoes')

function handleAdicionar() {
  let input = document.querySelector("#inputUser")

  if (input.value === '') {
    alert('preencha o campo')
  } else {
    const anotacao = document.createElement("div")
    anotacao.classList.add('anotacao')

    const title = document.createElement("p")
    title.innerHTML = input.value

    anotacao.appendChild(title)

    const btn = document.createElement('button')
    btn.classList.add('delete')
    btn.innerHTML = 'Delete'

    anotacao.appendChild(btn)

    anotacoes.appendChild(anotacao)
  }

  let deletar = document.querySelectorAll('.anotacao')

  deletar.forEach((item) => {
    item.addEventListener('click', handleDelete)
  })

  input.value = ''
  input.focus()
}


function handleDelete(event) {
  event.currentTarget.remove()
}


adicionar.addEventListener("click", handleAdicionar)