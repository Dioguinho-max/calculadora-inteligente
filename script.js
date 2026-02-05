function calcularMedia() {
    // Pega os valores dos inputs
    let n1 = document.getElementById("nota1").value;
    let n2 = document.getElementById("nota2").value;
    let n3 = document.getElementById("nota3").value;

    // Verifica se todos os campos estão vazios
    if (!n1 && !n2 && !n3) {
        document.getElementById("resultadoMedia").innerHTML =
            "❌ Por favor, digite pelo menos uma nota.";
        return;
    }

    // Converte para número, ignora campos vazios
    n1 = n1 ? Number(n1) : 0;
    n2 = n2 ? Number(n2) : 0;
    n3 = n3 ? Number(n3) : 0;

    // Conta quantas notas foram digitadas
    let quantidadeNotas = 0;
    if (n1) quantidadeNotas++;
    if (n2) quantidadeNotas++;
    if (n3) quantidadeNotas++;

    // Evita divisão por zero
    if (quantidadeNotas === 0) quantidadeNotas = 1;

    // Calcula a soma e a média
    let soma = n1 + n2 + n3;
    let media = soma / quantidadeNotas;

    // Arredonda para 1 casa decimal
    let mediaArredondada = Math.round(media * 10) / 10;

    // Situação do aluno
    let situacao = mediaArredondada >= 6 ? "✅ Aprovado" : "❌ Reprovado";

    // Mostra passo a passo
    document.getElementById("resultadoMedia").innerHTML = `
        <p><strong>Passo a passo:</strong></p>
        <p>1️⃣ Somamos as notas digitadas: ${n1} + ${n2} + ${n3} = ${soma}</p>
        <p>2️⃣ Dividimos pela quantidade de notas preenchidas (${quantidadeNotas}): ${soma} ÷ ${quantidadeNotas} = <strong>${mediaArredondada}</strong></p>
        <p><strong>Resultado:</strong> ${situacao}</p>
    `;
}
