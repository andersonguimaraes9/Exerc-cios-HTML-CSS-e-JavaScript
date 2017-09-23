/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//<script type="text/javascript">
    var cont =0;
    function calcular() {
        var a = parseFloat(document.fr.v1.value);
        var b = parseFloat(document.fr.v2.value);
        var opcao = document.getElementById("operacao").value;
        
        var s=0;
        if(opcao.localeCompare("somar")===0){
            s = (a + b);
            document.getElementById("resposta").innerHTML = opcao + "= " + s;
            document.getElementById("result").value = s; 
            cont=cont+1;
            //alert("Quantidade de click= "+ cont);
        }
        if(opcao.localeCompare("Subtrair")===0){
            s = (a - b);
            document.getElementById("resposta").innerHTML = opcao + "= " + s;
            document.getElementById("result").value = s;          
        }
        
        if(opcao.localeCompare("Multiplicar")===0){
            s = (a * b);
            document.getElementById("resposta").innerHTML = opcao + "= " + s;
            document.getElementById("result").value = s;          
        }
        if(opcao.localeCompare("dividir")===0){
            s = (a / b);
            document.getElementById("resposta").innerHTML = opcao + "= " + s;
            document.getElementById("result").value = s;          
        } 
    }
                        
                                
//</script>

