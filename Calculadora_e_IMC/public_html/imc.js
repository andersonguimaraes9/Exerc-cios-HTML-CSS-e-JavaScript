/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function imc(){
    var peso= parseFloat(document.querySelector("#peso").value);
    var altura= parseFloat(document.querySelector("#altura").value);
    var imc=0;
    
    imc= peso /(altura*altura);
    document.querySelector("#result").value= imc;
}


