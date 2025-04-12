// Função para começar a contagem
function iniciarContagem() {
    // Pega o valor do input e converte para número
    let numero = parseInt(document.getElementById('numeroInicial').value);

    // Verifica se o número é válido
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, insira um número maior que 0.");
        return;
    }

    // Atualiza o contador a cada segundo
    let intervalo = setInterval(function() {
        // Exibe o número que o usuário digitou
        document.getElementById('contadorDisplay').textContent = numero;

        // Se o número chegar a 0, para a contagem
        if (numero === 0) {
            clearInterval(intervalo);
            alert("Contagem concluída!");
        }

        // Diminui o número
        numero--;
    }, 1000);
}