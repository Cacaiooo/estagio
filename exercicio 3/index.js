const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    try {
        const faturamentoMensal = JSON.parse(data);

        const diasComFaturamento = faturamentoMensal.filter(dia => dia.faturamento > 0);

        const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.faturamento));

        const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.faturamento));

        const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.faturamento, 0);
        const mediaMensal = somaFaturamento / diasComFaturamento.length;

        const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.faturamento > mediaMensal).length;

        console.log('Menor faturamento:', menorFaturamento);
        console.log('Maior faturamento:', maiorFaturamento);
        console.log('Dias com faturamento acima da média:', diasAcimaDaMedia);

    } catch (parseErr) {
        console.error('Erro ao processar os dados:', parseErr);
    }
});
