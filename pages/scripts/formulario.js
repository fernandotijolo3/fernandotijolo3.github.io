function adicionarObjetoEncontrado(){
      let confirma = "Achado adicionado com sucesso!";
	  //nome
	  let nomeObjetoEnc = document.getElementById("nomeObjetoEnc")
	  let objeto = nomeObjetoEnc.value; // define valor significativo para a variavel nomeObjetoEnc, que é o input da linha 13 do html
	 document.getElementById("confirma").textContent = confirma;//coloca texto no html
	  if (!objeto) return alert("Digite o nome do objeto.");//impede que seja inputado objeto vazio
	  //local
	 let localObjetoEnc = document.getElementById("localObjetoEnc");
	 let local = localObjetoEnc.value;
	 if(!local) return alert("Digite o local encontrado.");
	 //descrição
	 let descObjetoEnc = document.getElementById("descObjetoEnc")
	 let descricao = descObjetoEnc.value
	 if(!descricao) return alert ("Digite a descrição do item.")
	 //data 
	 let dataEnc = document.getElementById("dataEnc")
	 let data1 = dataEnc.value
	 if(!data1) return alert ("Insira a data em que o item foi encontrado.")
	
	//lista
	 let listaObjetos = document.getElementById("listaObjetos") //cria e define valor para a variável listaObjetos, que é o ul do html
	 let novoObjeto = document.createElement("p")//cria e define valor para a variável novoObjeto, que no caso é um elemento p criado dentro do ul

	
	 novoObjeto.innerHTML = 
    "Nome do Item: " + objeto + "<br>" +
    "Descrição do Item: " + descricao + "<br>" +
    "Local encontrado: " + local + "<br>" +
    "Data em que o item foi encontrado: " + data1;
	 listaObjetos.appendChild(novoObjeto); //define onde o novo elemento aparece
	 novoObjeto.classList.add('item-enc'); //põe classe no elemento criado
	 nomeObjetoEnc.value = "" ; //esvazia o valor da variável nomeObjetoEnc, com a intenção de liberar espaço na barra de input de tarefa	
	 localObjetoEnc.value=""; //=^
	 descObjetoEnc.value="";//=^
	 dataEnc.value="";//=^
   }