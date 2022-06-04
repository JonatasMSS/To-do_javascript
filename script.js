//Coleta de elementos dentro de lista UL
var listDivision = document.getElementById('todo-itens');
var button = document.getElementById('Add');
button.addEventListener('click',todoCreator);

//Função de criação de TODO
function todoCreator(){
    var inputData = document.getElementById('todoInput').value;
    let dataFormat = "<li><input type='checkbox'class='check'>"+"<label>"+inputData+"</label></li>";
    //Modificando HTML
    listDivision.innerHTML += dataFormat;
    
}
