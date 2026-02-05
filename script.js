function calcularMedia() {
    // Pegando os valores do input, se vazio assume 8.8
    let n1 = Number(document.getElementById("nota1").value) || 8.8;
    let n2 = Number(document.getElementById("nota2").value) || 8.8;
    let n3 = Number(document.getElementById("nota3").value) || 8.8;

    // Soma e média
    let soma = n1 + n2 + n3;
    let media = soma / 3;

    // Arredonda para 1 casa decimal
    let mediaArredondada = Math.round(media * 10) / 10;

    // Situação do aluno
    let situacao = mediaArredondada >= 6 ? "✅ Aprovado" : "❌ Reprovado";

    // Mostra passo a passo
    document.getElementById("resultadoMedia").innerHTML = `
        <p><strong>Passo a passo:</strong></p>
        <p>1️⃣ Somamos as notas: ${n1} + ${n2} + ${n3} = ${soma}</p>
        <p>2️⃣ Dividimos pela quantidade de notas: ${soma} ÷ 3 = <strong>${mediaArredondada}</strong></p>
        <p><strong>Resultado:</strong> ${situacao}</p>
    `;
}
