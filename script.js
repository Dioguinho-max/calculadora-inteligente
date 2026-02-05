function calcularMedia() {
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);

    let soma = n1 + n2 + n3;
    let media = soma / 3;

    document.getElementById("resultadoMedia").innerHTML = `
        <p>Soma: ${n1} + ${n2} + ${n3} = ${soma}</p>
        <p>Média: <strong>${media.toFixed(2)}</strong></p>
    `;
}
