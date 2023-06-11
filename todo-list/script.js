const button = document.querySelector('.input-b')
const input = document.querySelector('.input-t')
const listaCompleta = document.querySelector('.list-lista')

let minhaListaDeItens = []

function adicionarNovaTarega() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false

    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = 
        novaLi + 
        ` 
        
        <li class="task-a ${item.concluida && 'done'}">
            <img src="./img/check.png" alt="tarefa-feita" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/bin.png" alt="lixeira" onclick="deletarItem(${posicao})">
        </li>
        
        `

    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('listas', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)
    

    mostrarTarefas()
}

function regarregarTela() {
    const tarefaLocalStorage = localStorage.getItem('listas')
    
    if(tarefaLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefaLocalStorage)
}
    mostrarTarefas()

}

regarregarTela()
button.addEventListener('click', adicionarNovaTarega)
