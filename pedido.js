function moveBotaoNao() {
    // Gera posições aleatórias para o botão "Não"
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Ajuste para garantir que o botão não saia completamente da tela
    const randomY = Math.floor(Math.random() * (window.innerHeight - 40)); // Ajuste para garantir que o botão não saia completamente da tela
  
    // Move o botão para as novas coordenadas
    document.getElementById('noBtn').style.position = 'absolute';
    document.getElementById('noBtn').style.left = randomX + 'px';
    document.getElementById('noBtn').style.top = randomY + 'px';
  }
  
  function resposta(opcao) {
    if (opcao === 'sim') {
      alert('Você aceitou o pedido do José Eduardo, seu namorado lindo :)');
    }
  }
  
  // Adiciona um listener para o botão "Não"
  document.getElementById('noBtn').addEventListener('click', moveBotaoNao);
  
  