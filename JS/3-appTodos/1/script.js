var itens = ["Estudar JS", "Testar", "Reportar bugs"];
var id = 0;
for (var i = 0; i < itens.length; i++){
  adcItem(itens[i]);
};

function adcItem(vItem){
  var linha= document.createElement('li');
  var item = document.createTextNode(vItem );
  linha.setAttribute('id', 'l'+id);
  
  
  var excluir = document.createElement('Button');
  var txtexcl = document.createTextNode('Excluir');
  excluir.appendChild(txtexcl);
  excluir.setAttribute('id', id);
  excluir.setAttribute('onclick', 'acoes(this.id, "r")');
  excluir.style.color = '#f11';
  
  var done = document.createElement('button');
  var txtdone = document.createTextNode('Done');
  done.appendChild(txtdone);
  done.setAttribute('id', id);
  done.setAttribute('onclick', 'acoes(this.id, "d")');
  done.style.color = '#191';
  
  var doing = document.createElement('button');
  var txtdoing = document.createTextNode('Doing');
  doing.appendChild(txtdoing);
  doing.setAttribute('id', id);
  doing.setAttribute('onclick', 'acoes(this.id, "i")');
  doing.style.color = '#119';
  
  var reopen = document.createElement('button');
  var txtreopen = document.createTextNode('Reopen');
  reopen.appendChild(txtreopen);
  reopen.setAttribute('id', id);
  reopen.setAttribute('onclick', 'acoes(this.id, "o")');
  reopen.style.color = '#bb0';
  
  linha.appendChild(done);
  linha.appendChild(doing);
  linha.appendChild(reopen);
  linha.appendChild(excluir);
  linha.appendChild(item);
  id++;
  
  var lista = document.getElementsByTagName('ul')[0];
  var itens = document.getElementsByTagName('li');
  lista.insertBefore(linha, itens[itens.length]);
}
function adicionar(){
  var novo = document.getElementById('item');
  adcItem(novo.value);
}
function acoes(id, action){
  var alterar = document.getElementById("l"+id);
  switch (action){
    case "d": 
      alterar.style.color = '#191';
      break;
    case "i": 
      alterar.style.color = '#119';
      break;
    case "o": 
      alterar.style.color = '#bb0';
      break;
    case "r": 
      alterar.parentNode.removeChild(alterar);
      break;
  }
}