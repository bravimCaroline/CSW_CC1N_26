function calc(){
    let atual = new Date().getFullYear();
    let niver = document.getElementById("niver").value;

    let total = atual - niver;
    const answer = document.getElementById("age");

    if (total >= 18){
        answer.innerHTML = "Você tem " + total + " anos. Mó velhotw KKKKKKKKk";
    }

    else {
        answer.innerHTML = "Você tem " + total + " anos. Seloko mó novinhw"
    }


}