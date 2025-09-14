// Obserevação: feito com a ajuda do ChatGPT

// O service worker fica escutando mensagens do popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "saveCalculation") {
        const { ultimoAbastecimento, ultimaDistancia, consumoMedio } = message.data;

        // Salva os dados no armazenamento local
        chrome.storage.local.get({ calculos: [] }, (result) => {
            const calculos = result.calculos;
            // Adiciona o novo cálculo
            calculos.push({ ultimoAbastecimento, ultimaDistancia, consumoMedio, timestamp: Date.now() });

            // Salva novamente
            chrome.storage.local.set({ calculos }, () => {
                console.log("Cálculo salvo com sucesso:", { ultimoAbastecimento, ultimaDistancia, consumoMedio });
            });
        });
    }
});