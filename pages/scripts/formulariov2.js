function adicionarObjetoPerdido(){
      let confirma = "Perdido adicionado com sucesso!";
	  //nome
	  let nomeObjetoPrd = document.getElementById("nomeObjetoPrd")
	  let objeto = nomeObjetoPrd.value; 
	 document.getElementById("confirma").textContent = confirma;
	  if (!objeto) return alert("Digite o nome do objeto.");
	  //local
	 let localObjetoPrd = document.getElementById("localObjetoPrd");
	 let local = localObjetoPrd.value;
	 if(!local) return alert("Digite o local encontrado.");
	 //descrição
	 let descObjetoPrd = document.getElementById("descObjetoPrd")
	 let descricao = descObjetoPrd.value
	 if(!descricao) return alert ("Digite a descrição do item.")
	 //data 
	 let dataPrd = document.getElementById("dataPrd")
	 let data1 = dataPrd.value
	 if(!data1) return alert ("Insira a data em que o item foi perdido.")
	
	//lista
	 let listaObjetos = document.getElementById("listaObjetos")
	 let novoObjeto = document.createElement("p")

	
	 novoObjeto.innerHTML = 
    "Nome do Item: " + objeto + "<br>" +
    "Descrição do Item: " + descricao + "<br>" +
    "Local perdido: " + local + "<br>" +
    "Data em que o item foi perdido: " + data1;
	 listaObjetos.appendChild(novoObjeto); 
	 novoObjeto.classList.add('item-enc'); 
	 nomeObjetoPrd.value = "" ; 	
	 localObjetoPrd.value=""; 
	 descObjetoPrd.value="";
	 dataPrd.value="";
   }