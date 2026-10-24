function simularCompra() {
    // Preços das frutas
    const precoMaca = 4;
    const precoBanana = 2;
    const precoMamao = 7;

    // Pergunta a quantidade de maçãs
    const entradaMaca = prompt("Quantas maçãs deseja comprar?");

    if (entradaMaca === null) {
        return;
    }

    const quantidadeMaca = Number(entradaMaca);

    if (entradaMaca.trim() === "" ||
        !Number.isInteger(quantidadeMaca) ||
        quantidadeMaca < 0) {
        alert("Quantidade de maçãs inválida!");
        return;
    }

    // Pergunta a quantidade de bananas
    const entradaBanana = prompt("Quantas bananas deseja comprar?");

    if (entradaBanana === null) {
        return;
    }

    const quantidadeBanana = Number(entradaBanana);

    if (entradaBanana.trim() === "" ||
        !Number.isInteger(quantidadeBanana) ||
        quantidadeBanana < 0) {
        alert("Quantidade de bananas inválida!");
        return;
    }

    // Pergunta a quantidade de mamões
    const entradaMamao = prompt("Quantos mamões deseja comprar?");

    if (entradaMamao === null) {
        return;
    }

    const quantidadeMamao = Number(entradaMamao);

    if (entradaMamao.trim() === "" ||
        !Number.isInteger(quantidadeMamao) ||
        quantidadeMamao < 0) {
        alert("Quantidade de mamões inválida!");
        return;
    }

    // Calcula o valor de cada produto
    const totalMaca = precoMaca * quantidadeMaca;
    const totalBanana = precoBanana * quantidadeBanana;
    const totalMamao = precoMamao * quantidadeMamao;

    // Soma os valores
    const subtotal = totalMaca + totalBanana + totalMamao;

    // Verifica se algum produto foi selecionado
    if (subtotal === 0) {
        alert("Nenhuma fruta foi selecionada!");
        return;
    }

    // Calcula o desconto de 10% a partir de R$ 30,00
    let desconto = 0;

    if (subtotal >= 30) {
        desconto = subtotal * 0.10;
    }

    const totalFinal = subtotal - desconto;

    // Formata os valores em reais
    function reais(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    // Mostra o resumo da compra
    alert(
        "TRILHAS HORTIFRUTI\n\n" +
        "Maçãs: " + quantidadeMaca +
        " unidade(s) - " + reais(totalMaca) + "\n" +
        "Bananas: " + quantidadeBanana +
        " unidade(s) - " + reais(totalBanana) + "\n" +
        "Mamões: " + quantidadeMamao +
        " unidade(s) - " + reais(totalMamao) + "\n\n" +
        "Subtotal: " + reais(subtotal) + "\n" +
        "Desconto: " + reais(desconto) + "\n" +
        "Total final: " + reais(totalFinal)
    );
}