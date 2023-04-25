
var ethPrice, btcPrice, xmrPrice, bnbPrice, usdtPrice;
var saldoReais = 1000000;
var saldoBTC = 0;
var saldoETH = 0;
var saldoUSDT = 0;

var btcValorDeCompra = 0;

var CompraBTC = parseFloat(btcPrice);




fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,tether,monero,binancecoin&vs_currencies=brl")
        .then(response => response.json())
        .then(data => {
          
         ethPrice = data.ethereum.brl;
         btcPrice = data.bitcoin.brl;
         xmrPrice = data.monero.brl;
         bnbPrice = data.binancecoin.brl;
         usdtPrice = data.tether.brl;
        
  
          
          document.getElementById("eth-price").value = ethPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          document.getElementById("btc-price").value = btcPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          document.getElementById("usdt-price").value = usdtPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          document.getElementById("xmr-price").value = xmrPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          document.getElementById("bnb-price").value = bnbPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
         } )

        function autValor(){
            var QuantidaAut = parseFloat(document.getElementById("QTDE1").value);
            var btcAut = parseFloat(btcPrice);
            var AutPrice = QuantidaAut * btcAut;
            document.getElementById("valorAut").value = AutPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
        }


        function autValor2(){
            var QuantidaAut2 = parseFloat(document.getElementById("QTDE2").value);
            var ethAut = parseFloat(ethPrice);
            var AutPrice2 = QuantidaAut2 * ethAut;
            document.getElementById("valorAut2").value = AutPrice2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
        }

        function autValor3(){
            var QuantidaAut3 = parseFloat(document.getElementById("QTDE3").value);
            var usdtAut = parseFloat(usdtPrice);
            var AutPrice3 = QuantidaAut3 * usdtAut;
            document.getElementById("valorAut3").value = AutPrice3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
        }




    function mostrar(){  

    document.getElementById("linha1").innerHTML = CompraBTC;    
    document.getElementById("linha2").innerHTML = ethPrice;
    document.getElementById("linha3").innerHTML = saldoReais;
}       


        function validaCompra(){
            var btcValida = parseFloat(btcPrice);
             var QuantidadeValida = parseFloat(document.getElementById("QTDE1").value);
             var valorValida = btcValida * QuantidadeValida;

          
             if(valorValida > saldoReais ){alert("Você não possui saldo suficiente");}
             else {ComprarBTC() ;}
                        }

        function validaVenda(){
            var btcValida2 = saldoBTC;
             var QuantidadeValida2 = parseFloat(document.getElementById("QTDE1").value);
             var valorDaVenda = parseFloat(document.getElementById("venda1").value);
            var valorDaVendaTotal = QuantidadeValida2 * valorDaVenda;
          
             if(QuantidadeValida2 > saldoBTC ){alert("Você não possui saldo suficiente");}
             else {
                saldoBTC = saldoBTC -  QuantidadeValida2;

                //saldoReais = saldoReais + valorDaVenda;
                document.getElementById("saldoBTC").value = saldoBTC; 
                
                Calc() ;
             }
                        }                


        function ComprarBTC(){

             var btc1 = parseFloat(btcPrice);
             var Quantidade = parseFloat(document.getElementById("QTDE1").value);
             var valorBuy = btc1 * Quantidade;
             
          
            if(valorBuy > saldoReais){alert("Você não possui saldo suficiente");}
            else{
            saldoReais = saldoReais - valorBuy;
            saldoBTC = saldoBTC + Quantidade;
            document.getElementById("saldoReais").value = saldoReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById("saldoBTC").value = saldoBTC;    
            };

            document.getElementById("linha1").innerHTML ="Bitcoin cotado no valor de " + btc1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
            document.getElementById("linha2").innerHTML ="Voce comprou  " + Quantidade + " de BTC " + " valor total da compra foi " + valorBuy.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById("linha3").innerHTML ="Foi debitado no seu saldo o valor de " + valorBuy.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " seu saldo atual é " + saldoReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById("linha4").innerHTML ="Foram adicionados na sua carteira a quantidade de  " + Quantidade + " BTC ";
        }

        function ComprarETH(){

            var eth1 = parseFloat(ethPrice);
            var Quantidade2 = parseFloat(document.getElementById("QTDE2").value);
            var valorBuy2 = eth1 * Quantidade2;
            
         
           if(valorBuy2 > saldoReais){alert("Você não possui saldo suficiente");}
           else{
           saldoReais = saldoReais - valorBuy2;
           saldoETH = saldoETH + Quantidade2;
           document.getElementById("saldoReais").value = saldoReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
           document.getElementById("saldoETH").value = saldoETH;    
           };

           document.getElementById("linha1").innerHTML ="Ethereum - ETH cotado no valor de " + eth1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
           document.getElementById("linha2").innerHTML ="Voce comprou  " + Quantidade2 + " de ETH " + " valor total da compra foi " + valorBuy2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
           document.getElementById("linha3").innerHTML ="Foi debitado no seu saldo o valor de " + valorBuy2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " seu saldo atual é " + saldoReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
           document.getElementById("linha4").innerHTML ="Foram adicionados na sua carteira a quantidade de  " + Quantidade2 + " de ETH ";
         }

       function ComprarUSDT(){

        var usdt1 = parseFloat(usdtPrice);
        var Quantidade3 = parseFloat(document.getElementById("QTDE3").value);
        var valorBuy3 = usdt1 * Quantidade3;
        
     
       if(valorBuy3 > saldoReais){alert("Você não possui saldo suficiente");}
       else{
       saldoReais = saldoReais - valorBuy3;
       saldoUSDT = saldoUSDT + Quantidade3;
       document.getElementById("saldoReais").value = saldoReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
       document.getElementById("saldoUSDT").value = saldoUSDT;    
       };

       document.getElementById("linha1").innerHTML ="Tether - USDT cotado no valor de " + usdt1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
       document.getElementById("linha2").innerHTML ="Voce comprou  " + Quantidade3 + " de USDT " + " valor total da compra foi " + valorBuy3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
       document.getElementById("linha3").innerHTML ="Foi debitado no seu saldo o valor de " + valorBuy3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " seu saldo atual é " + saldoReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
       document.getElementById("linha4").innerHTML ="Foram adicionados na sua carteira a quantidade de  " + Quantidade3 + "  USDT ";
        
    }

    function Calc(){

        var btcCompara = parseFloat(btcPrice);
        var QuantidadeCompara = parseFloat(document.getElementById("QTDE1").value);
         
        var PrecoCompra = parseFloat(document.getElementById("venda1").value);
        var LucroPorBTC = PrecoCompra - btcCompara;
        var LucroPorBTC2 = QuantidadeCompara * LucroPorBTC;
        var var1 = QuantidadeCompara * PrecoCompra;
        var Resultado =  var1 - btcCompara;

        saldoReais = saldoReais + var1;
        document.getElementById("saldoReais").value = saldoReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
       

       document.getElementById("linha1").innerHTML = "Voce lucrou na sua venda " + LucroPorBTC2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
       document.getElementById("linha2").innerHTML = "Voce vendeu " + QuantidadeCompara + " BTC " + "O Faturamento total da venda foi " + var1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
       document.getElementById("linha3").innerHTML = "Foi adicionado ao seu saldo " + var1 + " e foi debitado " + QuantidadeCompara + " BTC do seu saldo SPOT "
       document.getElementById("linha4").innerHTML = "";
       document.getElementById("Lucro").value = LucroPorBTC2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    }

    function Calc2(){

        var ethCompara = parseFloat(ethPrice);
        var QuantidadeCompara2 = parseFloat(document.getElementById("QTDE2").value);
        var PrecoCompra2 = parseFloat(document.getElementById("venda2").value);
        var var2 = QuantidadeCompara2 * PrecoCompra2;
        var Resultado2 =  var2 - ethCompara;

       document.getElementById("linha1").innerHTML = Resultado2;
       document.getElementById("Lucro2").value = Resultado2;

    }

    function Calc3(){

        var usdtCompara = parseFloat(usdtPrice);
        var QuantidadeCompara3 = parseFloat(document.getElementById("QTDE3").value);
        var PrecoCompra3 = parseFloat(document.getElementById("venda3").value);
        var var3 = QuantidadeCompara3 * PrecoCompra3;
        var Resultado3 =  var3 - usdtCompara;

       document.getElementById("linha1").innerHTML = "Voce teve de Lucro ou Prejuizo o valor a seguir" + Resultado3;
       document.getElementById("Lucro3").value = Resultado3;

    }


