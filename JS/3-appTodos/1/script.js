var todos = JSON.parse(localStorage.getItem('list_todos')) || 
[["Estudar JS", "n"], ["Testar", "n"], ["Reportar bugs", "n"]];

var inputElement = document.getElementById('inptItem');
var listElement = document.getElementById('todoList');
var buttonElement = document.getElementById('btnAdicionar');

buttonElement.onclick = adicionar;
renderTodos();
function renderTodos(){
  var id = 0;
  listElement.innerHTML = '';
  for (item of todos){
    var linha= document.createElement('li');
    var texto = document.createTextNode(' - ' + item[0]);
    linha.setAttribute('id', 'l'+id);
  
    var excluir = document.createElement('Button');
    excluir.appendChild(document.createTextNode('Excluir'));
    excluir.setAttribute('id', id);
    excluir.setAttribute('onclick', 'acoes(this.id, "r")');
    excluir.style.color = '#f11';
    
    var done = document.createElement('button');
    done.appendChild(document.createTextNode('Done'));
    done.setAttribute('id', id);
    done.setAttribute('onclick', 'acoes(this.id, "d")');
    done.style.color = '#191';
    
    var doing = document.createElement('button');
    doing.appendChild(document.createTextNode('Doing'));
    doing.setAttribute('id', id);
    doing.setAttribute('onclick', 'acoes(this.id, "i")');
    doing.style.color = '#119';
    
    var reopen = document.createElement('button');
    reopen.appendChild(document.createTextNode('Reopen'));
    reopen.setAttribute('id', id);
    reopen.setAttribute('onclick', 'acoes(this.id, "o")');
    reopen.style.color = '#bb0';
    
    linha.appendChild(done);
    linha.appendChild(doing);
    linha.appendChild(reopen);
    linha.appendChild(excluir);
    linha.appendChild(texto);
    id++;
    
    listElement.appendChild(linha);
    switch (item[1]){
      case "d": 
        linha.style.color = '#191';
        break;
      case "i": 
        linha.style.color = '#119';
        break;
      case "o": 
        linha.style.color = '#bb0';
        break;
      case "n": 
        linha.style.color = '#000';
        break;
    }
  }
}
function adicionar(){
  var novoTodo = inputElement.value;
  todos.push([novoTodo, "n"]);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}
function acoes(id, action){
  switch (action){
    case "d": 
      todos[id][1] = "d";
      break;
      case "i": 
      todos[id][1] = "i";
      break;
      case "o": 
      todos[id][1] = "o";
      break;
    case "r": 
      todos.splice(id, 1);
      break;
    }
  console.log(todos);
  renderTodos();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('list_todos', JSON.stringify(todos));
}