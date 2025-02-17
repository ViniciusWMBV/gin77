document.addEventListener("DOMContentLoaded", () => {
    const loginPopup = document.getElementById("login-popup");
    const closeBtn = document.querySelector(".close-btn");

    // Mostrar o pop-up ao carregar
    loginPopup.style.display = "flex";

    // Fechar o pop-up ao clicar no botão de fechar
    closeBtn.addEventListener("click", () => {
        loginPopup.style.display = "none";
    });

    // Simular carregamento de saldo do usuário
    const saldoUsuario = 0.00; // Pode ser dinâmico com backend PHP
    document.getElementById("saldo").innerText = saldoUsuario.toFixed(2);
});

// Função para abrir o pop-up de depósito
document.getElementById('saldo-container').addEventListener('click', function() {
    document.getElementById('deposit-popup').style.display = 'flex';
});

// Função para fechar o pop-up de depósito
function closeDepositPopup() {
    document.getElementById('deposit-popup').style.display = 'none';
    document.getElementById('pix-result').style.display = 'none';  // Ocultar o resultado do PIX
}

// Função para gerar o PIX
function generatePix() {
    const valor = document.getElementById('valor-deposito').value;
    const chavePix = '59104717830';  // Sua chave PIX

    if (valor && valor > 0) {
        // Criando o código PIX com o valor do depósito
        const pixMessage = `00020126360014BR.GOV.BCB.PIX01159104717830*0000000000${valor}520400005303986540${valor}5802BR59104717830*6009BR5925Gin77=999999999999990`;

        // Exibe o PIX gerado
        document.getElementById('pix-info').innerText = pixMessage;
        document.getElementById('pix-result').style.display = 'block';  // Mostrar o resultado do PIX
    } else {
        alert('Por favor, insira um valor válido.');
    }
}

// Função para copiar o PIX gerado
function copyPix() {
    const pixText = document.getElementById('pix-info');
    pixText.select();
    document.execCommand('copy'); // Copia para a área de transferência
    alert('Chave PIX copiada com sucesso!');
}



