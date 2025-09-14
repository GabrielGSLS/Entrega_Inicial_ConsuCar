
// Ouve as mensagens enviadas do popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Verifica se a ação da mensagem é "saveCalculation"
  if (request.action === "saveCalculation") {
    // Acesso aos dados enviados do popup
    const { ultimoAbastecimento, ultimaDistancia, consumoMedio } = request.data;
    
    // Salva os dados no storage local
    chrome.storage.local.set({
      ultimoAbastecimento,
      ultimaDistancia,
      consumoMedio,
      data: new Date().toISOString() // Opcional: salva a data da medição
    }, () => {
      // Callback para confirmar que os dados foram salvos
      console.log('Dados de cálculo salvos com sucesso!');
    });
  }
});

// Exemplo de um ouvinte de evento simples para quando a extensão é instalada
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extensão ConsuCar instalada.');
});