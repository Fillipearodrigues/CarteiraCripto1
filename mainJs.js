

   function openPopup() {
    var popup = document.createElement("div");
    popup.className = "popup ";

    popup.innerHTML = "<h1 class='center'>Adicionar Saldo</h1><p><button onclick='Depositar()'>Inserir</button>  <input type='number' id='iserirSaldo' style='text-align: center;'  placeholder='DIGITE UM VALOR' required> <p><button onclick='ValidaRetirada()'>Retirar</button>  <input type='number' id='retirarSaldo' style='text-align: center;'  placeholder='DIGITE UM VALOR' required>.<p> SALDO <input id='saldoInicial3'  'type=text' style='text-align: center;' value='150' readonly >💲 </p><button class='close-btn' onclick='closePopup()'>X</button>";

    document.body.appendChild(popup);
    
  }
        
        
  function closePopup() {
    var popup = document.querySelector(".popup");
    document.body.removeChild(popup);
  }


  function Depositar() {

    
    var addSaldo   = parseFloat(document.getElementById("iserirSaldo").value);
    var saldoAtual = saldoInicial;
    var add2 = saldoAtual + addSaldo;
    var add3 = add2;
    document.getElementById("saldoInicial").value = add3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) ;
    document.getElementById("saldoInicial3").value = add3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) ;
    saldoInicial = add3;
  }


  function ValidaRetirada(){
    
    var outSaldo   = parseFloat(document.getElementById("retirarSaldo").value);
    var saldoAtual = saldoInicial;
    if(outSaldo > saldoAtual ){ alert("Voce não tem fundos suficientes");}  else {Retirar() ;}
    
    
    
}


  function Retirar() {

    

    var outSaldo   = parseFloat(document.getElementById("retirarSaldo").value);
    var saldoAtual = saldoInicial;
    var out2 = saldoAtual - outSaldo;
    var out3 = out2;
    document.getElementById("saldoInicial").value = out3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) ;
    document.getElementById("saldoInicial3").value = out3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) ;
   
    
  }


      fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,floki-inu,monero,binancecoin&vs_currencies=brl")
        .then(response => response.json())
        .then(data => {
          
         const ethPrice = data.ethereum.brl;
          const btcPrice = data.bitcoin.brl;
          const xmrPrice = data.monero.brl;
          const bnbPrice = data.binancecoin.brl;

            
          
          document.getElementById("eth-price").textContent = ethPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          document.getElementById("btc-price").textContent = btcPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
          document.getElementById("xmr-price").textContent = xmrPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          document.getElementById("bnb-price").textContent = bnbPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        })
        .catch(error => console.error(error));
    

        function VerficaSaldo() {

            valorInvestido   = parseFloat(document.getElementById("valorInvestido").value);
             var   saldo    = parseFloat(document.getElementById("saldoInicial").value);
             var   saldo1   = saldoInicial;

            if(valorInvestido > saldo1 ) { alert("Saldo Insuficiente");}  else {CalculaValor() ;};
   
        }

       

    

    function CalculaValor() {

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,floki-inu,monero,binancecoin&vs_currencies=brl")
    .then(response => response.json())
    .then(data => {

    let ethPrice2 = data.ethereum.brl;
    let btcPrice2 = data.bitcoin.brl;
    let xmrPrice2 = data.monero.brl;
    let bnbPrice2 = data.binancecoin.brl;
         
    

        
        
        valorInvestido   = parseFloat(document.getElementById("valorInvestido").value);
          var   saldo    = parseFloat(document.getElementById("saldoInicial").value);
          var   saldo1   = saldoInicial;
         
            
            
       
             var btc = btcPrice2;
             var eth = ethPrice2;
             var xmr = xmrPrice2;
             var bnb = bnbPrice2;
             
             var cripto
             var saldo2 = 0;
             var saldo3 = 0;

             
             //Saldo 3 = Lucro ou Prejuizo 
             //Saldo 2 = Quantidade de Tokens Comprados 
             //Saldo 1 = Saldo Inicial

        

             if(input1.checked) saldo2 += valorInvestido / btc;
             if(input1.checked) cripto = "Bitcoin";

             if(input2.checked) saldo2 += valorInvestido / eth; 
             if(input2.checked) cripto = "EThereum";
             
             if(input3.checked) saldo2 += valorInvestido / xmr; 
             if(input3.checked) cripto = "XMR";
            
             if(input4.checked) saldo2 += valorInvestido / bnb;  
             if(input4.checked) cripto = "BNB ";
            
            

             var NAleatorio  = Math.floor(Math.random() * 100);
             var NAleatorio2  = Math.floor(Math.random() * 2) +1;
             var porcentagem = (NAleatorio/100) ;  
             var porcentagem2 = valorInvestido * NAleatorio;
             var porcentagem3 = porcentagem2/100;            
            
        
                //NAletorio2 = 1 WIN | 2 LOSS

             var msgLucro = "Voce comprou " + cripto + " O Ativo Valorizou e voce GANHOU "  ;
             var msgLoss = "Voce comprou " + cripto + " O Ativo Desvalorizou e voce PERDEU "  ;
             var msgFinal = " ";
             var win = "👍 Valorizou - Mercado em Alta, sua operação rendeu  ";
             var lost = "👎 Desvalorizou - Mercado em Queda, sua operação foi falha";
             var result = " ";
             var msgSimbolo = "";
             
              
             if(NAleatorio2 <= 1 ) { saldo3 += valorInvestido * porcentagem3; }
             if(NAleatorio2 <= 1 ) { saldo1 = saldoInicial + porcentagem3; }
             if(NAleatorio2 <= 1 ) { saldoInicial = saldo1 ; }
             if(NAleatorio2 <= 1 ) { msgSimbolo = " + " ; }
             if(NAleatorio2 <= 1 ) { msgFinal = msgLucro; }
             if(NAleatorio2 <= 1 ) { result = win; }
             if(NAleatorio2 <= 1 ) { result = win; }
             if(NAleatorio2 == 2  ) { result = lost; }
             if(NAleatorio2 == 2  ) { msgFinal = msgLoss; }
             if(NAleatorio2 == 2 ) { saldo3 = valorInvestido - porcentagem3; }
             if(NAleatorio2 == 2 ) { saldo1 = saldoInicial - porcentagem3; }
             if(NAleatorio2 == 2 ) { saldoInicial = valorInvestido - porcentagem3 ;}
             if(NAleatorio2 == 2 ) { msgSimbolo =  " - " ;}
             
  
     
    document.getElementById("linha1").innerHTML = "Voce investiu:  " + valorInvestido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) +" Reais";
    document.getElementById("linha2").innerHTML = "Voce comprou: " + saldo2 + " Tokens " + cripto ; 
    document.getElementById("linha3").innerHTML = " " + result + " " +  NAleatorio +" % "; 
    document.getElementById("linha4").innerHTML = msgFinal + porcentagem3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });  
    document.getElementById("linha5").innerHTML = "O Seu Saldo Atual Agora é de: " + saldo1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
    document.getElementById("linha6").innerHTML = "  " + saldo3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " na sua conta";     
    document.getElementById("linha6").innerHTML = msgSimbolo + " Reais " + porcentagem3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " Na sua carteira" ;
    
    
    //document.getElementById("linha6").innerHTML = "Saldo Inicial " +saldoInicial + " porcentagem1 " + porcentagem + " Numero Aleatorio" + NAleatorio + "  Porcentagem2 " + porcentagem2 + " Porcentagem3 " + porcentagem3;
    
    
    document.getElementById("saldoInicial").value = saldo1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) ;    



})
.catch(error => console.error(error));     

    } 
