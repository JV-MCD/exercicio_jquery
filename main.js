const form = document.getElementById('form-tarefa');
const inputTarefa = document.querySelector('.tarefa');
const button = document.querySelector('.confirmar')
const listaCompleta = document.querySelector('.lista-tarefa')

let linha = []

form.addEventListener('submit',function(e){
e.preventDefault();

});

function adcionarNovaTarefa(){
    linha.push({
        valor: inputTarefa.value ,
        riscado : false
    })

    inputTarefa.value = '';

    mostrarTarefas();
};

button.addEventListener('click',adcionarNovaTarefa)


function mostrarTarefas (){

    let novaLi = ''

    linha.forEach(( task , index) => {
    
    novaLi = novaLi + `<li class='task ${task.riscado && "Feito"}' onclick = 'riscarItem(${index})'>${task.valor}</li>`
    })

listaCompleta.innerHTML = novaLi
}

function riscarItem(index){
    linha[index].riscado = !linha[index].riscado

    mostrarTarefas()
}