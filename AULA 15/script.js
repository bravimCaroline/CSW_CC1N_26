document.writeln("Tchau Mundo!")

window.alert("Saia já, alma pertubada.")

document.getElementById("title").innerHTML = "Tchaaaaaaaaauuuuuuuuuuu"



document.getElementById("name").innerHTML = name

function sendName() {
    let nameAnswer = document.getElementById("inputName").value

    const answer = document.getElementById("containerAnswer");

    answer.innerHTML = "The name written is " + nameAnswer;

}