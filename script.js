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
    let notasUsadas = [];

    // Somar todas as notas válidas
    inputs.forEach(input => {
        let valor = parseFloat(input.value.replace(",", "."));
        if (!isNaN(valor)) {
            soma += valor;
            notasUsadas.push(valor);
        }
    });

    if (notasUsadas.length === 0) {
        resultadoDiv.innerHTML = "❌ Digite pelo menos uma nota.";
        return;
    }

    // Média arredondada 1 casa decimal
    const media = Math.round((soma / notasUsadas.length) * 10) / 10;
    const situacao = media >= 6 ? "✅ Aprovado" : "❌ Reprovado";

    // Passo a passo
    resultadoDiv.innerHTML = `
        <p><strong>Passo a passo:</strong></p>
        <p>1️⃣ Notas consideradas: ${notasUsadas.join(", ")}</p>
        <p>2️⃣ Somamos as notas: ${notasUsadas.join(" + ")} = ${soma.toFixed(1)}</p>
        <p>3️⃣ Dividimos pela quantidade de notas (${notasUsadas.length}): ${soma.toFixed(1)} ÷ ${notasUsadas.length} = <strong>${media}</strong></p>
        <p><strong>Resultado:</strong> ${situacao}</p>
    `;
});
