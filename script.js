const notasContainer = document.getElementById("notas-container");
const adicionarNotaBtn = document.getElementById("adicionar-nota");
const calcularMediaBtn = document.getElementById("calcular-media");
const resultadoDiv = document.getElementById("resultadoMedia");

// Adicionar nova avaliação
adicionarNotaBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "number";
    input.step = "0.1";
    input.placeholder = "Digite a nota";
    input.classList.add("nota");
    notasContainer.appendChild(input);
});

// Calcular média
calcularMediaBtn.addEventListener("click", () => {
    const inputs = document.querySelectorAll("input.nota");
    let soma = 0;
    let totalNotas = 0;

    inputs.forEach(input => {
        const valor = parseFloat(input.value.replace(",", "."));
        if (!isNaN(valor)) {
            soma += valor;
            totalNotas++;
        }
    });

    if (totalNotas === 0) {
        resultadoDiv.innerHTML = "❌ Digite pelo menos uma nota.";
        return;
    }

    const media = Math.round((soma / totalNotas) * 10) / 10;
    const situacao = media >= 6 ? "✅ Aprovado" : "❌ Reprovado";

    resultadoDiv.innerHTML = `
        <p><strong>Média final:</strong> ${media}</p>
        <p><strong>Situação:</strong> ${situacao}</p>
    `;
});
