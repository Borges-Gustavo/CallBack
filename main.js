// const notas = [4, 7, 9, 2, 10];

// const aprovados = notas.filter(n => n >= 7);
// console.log(aprovados); 

// function aprovadosDobro (VetorAprovados){
//     for(let i = 0;i<aprovados.length;i++){
//      console.log(aprovados[i]*2)
//     }
// }

// aprovadosDobro(aprovados)











// function somar(n1, n2) { 
//     return n1 + n2; 
// } 
// function executarOperacao(a, b, operacaoCallback) { 
//     return operacaoCallback(a, b); 
// } 
// console.log(executarOperacao(10, 5, somar));
// //exemplo para compreensão
// function subtrair (n1,n2){
//     return n1-n2
// }

// console.log(executarOperacao(10,5,subtrair))


//2

// function formatarNome(nome) {
//   return "Aluno: " + nome;
// }

// function processarLista(lista, callback ) {
//     return lista.map (callback)
// }

// const alunos = ["Ana", "Carlos", "Beatriz"];

// const alunosFormatados = processarLista(alunos, formatarNome);

// console.log(alunosFormatados)






//3


// function baixarArquivo(nomeArquivo, callbackFinal) {
//   console.log("Iniciando download...");
  
//   setTimeout(function() {
//     callbackFinal("Download de " + nomeArquivo + " concluído!");
//   }, 1000);
// }
// baixarArquivo("aula1.pdf", function(mensagem) {
//   console.log("NOTIFICAÇÃO: " + mensagem);
// });






// function enviarMensagem(nomeArquivo, callback) {
//     console.log("Enviando mensagem...");

//          setTimeout(function() {
//         callback(`Mensagem ${nomeArquivo} enviada.`)
//     }, 1000);

// }
// enviarMensagem("App instalando.", function(msg){
//     console.log(`NOTIFICAÇÃO: ${msg}`)
// })





//4




// function par(n) {
//     return n % 2 === 0;
// }


// function filtrarNumeros(lista, callback) {
    


// }

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filtrarNumeros(numeros, par));




// function ePar(num) {
//   return num % 2 === 0;
// }


// function filtrarNumeros(lista, callback) {

//     return lista.filter(callback);
// }


// const numeros = [1, 2, 3, 4, 5, 6];

// console.log(filtrarNumeros(numeros, ePar));




//5




// const precos = [100, 200, 50, 300];

// // Use precos.map(...) com um callback que retorna o preco com 10% de desconto (preco * 0.9):
// const precosComDesconto = precos.map(preco => preco * 0.9);

// console.log(precosComDesconto);


// const valor = [100, 200, 300, 400, 500];

// function desconto(lista){
//    return lista * 0.9
// }

// function aplicarDesconto(lista, callback){
//     return lista.map(callback);

// }

// console.log(aplicarDesconto(valor, desconto));





//6


// function validarEmail(email, callbackSucesso, callbackErro) {
//   if(email.includes("@")){
//     callbackSucesso()
//   }
//   else{
//     callbackErro()
//   }
// }

// function aoSucesso(msg) { console.log(" ✅ SUCESSO: " + msg); }
// function aoErro(msg) { console.log("❌ ERRO: " + msg); }

// // Testes:
// validarEmail("dev@javascript.com", aoSucesso, aoErro);
// validarEmail("emailsemarroba.com", aoSucesso, aoErro);







//7


// const usuarios = [
//   { id: 1, nome: "Alice" },
//   { id: 2, nome: "Bruno" },
//   { id: 3, nome: "Carla" }
// ];

// // Use usuarios.find com um callback que retorna true quando u.id === 2:
// const usuarioEncontrado = usuarios.find(u => u.id === 2 === true);

// console.log(usuarioEncontrado);

// ///

// const usuarios = [
//   { id: 1, nome: 'Ana' },
//   { id: 2, nome: 'Carlos' },
//   { id: 3, nome: 'Beatriz' }
// ];

// Usando uma função tradicional anônima
// const usuarioEncontrado = usuarios.find(function(usuario) {
//   return usuario.id === 2;
// });

// console.log(usuarioEncontrado); 

// function finder(lista, callback) {
//   return lista.find(callback);
// }

// function procurador(usuario) {
//   return usuario.id === 2;
// }

// console.log(finder(usuarios, procurador));

// Saída: { id: 2, nome: 'Carlos' }

// 8

// const produtos = [
//   { item: "Teclado", preco: 150 },
//   { item: "Mouse", preco: 80 },
//   { item: "Monitor", preco: 900 }
// ];

// function decrescente(a,b) {
//     return b.preco - a.preco
// }

// function ordem(lista, callback) {
//   return lista.sort(callback);
// }

// console.log(ordem(produtos, decrescente));



//9


// const carrinho = [25, 15, 60, 100];

// // Use .reduce((acumulador, item) => acumulador + item, 0):
// const total = carrinho.reduce((acc, item) => /* some o item ao acumulador */ acc, 0);

// console.log("Total do carrinho: R$ " + total);

// const valores = [10, 20, 30, 100];

// function somarValores(lista, callback) {
//   return lista.reduce(callback);
// }

// function acumulador(valorAtual, valorFinal) {
//     return valorAtual + valorFinal;
// }


// console.log(somarValores(valores, acumulador))



//10


// function emCaixaAlta(texto) {
//   return texto.toUpperCase() + "!!!";
// }



// function formatarTexto(frase, callbackFormatador) {
//   return callbackFormatador(frase)
// }


// console.log(formatarTexto("aprender callbacks e divertido", emCaixaAlta));





