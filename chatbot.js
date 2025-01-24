// leitor de qr code - Módulos Whatsapp
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js');
const client = new Client();

// leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// Caso a conexão ocorra sem erros, a mensagem de correto é exibida
client.on('ready', () => {
    console.log('WhatsApp conectado.');
});
// inicialização do chatbot 
client.initialize();

// Função usada para criar o delay entre uma ação e outra
const delay = ms => new Promise(res => setTimeout(res, ms)); 

// Funções do chatbot
client.on('message', async msg => {

    if (msg.body.match(/(dia|tarde|noite|Bom|bom|boa|Boa|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay 3 segundos pós mensagem
        const contact = await msg.getContact(); //Pegando o contato 
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá, '+ name.split(" ")[0] + '👋. Sou o assistente virtual da EBONY MEDIC SERVICES🥼 (nome ficticio). Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Como funciona?\n2 - Valores dos planos\n3 - Benefícios\n4 - Como aderir\n5 - Outras perguntas');
        await delay(3000); //Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação       
    }



// Funções para receber os valores e responder as devidas informações 
    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nosso serviço oferece consultas médicas 24 horas por dia, 7 dias por semana, via WhatsApp👨‍⚕️.\n\nNão há carência, o que significa que você pode começar a usar nossos serviços imediatamente após a adesão✅.\n\nOferecemos atendimento médico ilimitado, receitas\n\nAlém disso, temos uma ampla gama de benefícios');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'COMO FUNCIONA🥼?\nÉ muito simples.\n\n1º Passo\nFaça seu cadastro via link e escolha o plano que desejar.\n\n2º Passo\nApós efetuar o pagamento do plano escolhido você terá acesso imediato a nossa área exclusiva para começar seu atendimento na mesma hora.\n\n3º Passo\nSempre que precisar');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Plano Individual:* R$22,50 por mês.\n\n*Plano Família:* R$39,90 por mês, inclui você mais 3 dependentes.\n\n*Plano Individual PLUS:* R$42,50 por mês, com benefícios adicionais como\n\n*Plano Família PLUS:* R$79,90 por mês, inclui você mais 3 dependentes');

        await delay(3000); //Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Sorteio de em prêmios todo ano.\n\nAtendimento médico ilimitado 24h por dia.\n\nReceitas de medicamentos');
        
        await delay(3000); //Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Você pode aderir aos nossos planos diretamente pelo nosso site ou pelo WhatsApp.\n\nApós a adesão, você terá acesso imediato');


        await delay(3000); //Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp e espere o retorno de um profissional ou visite nosso site e dê uma olhada nos FAQs: https://site.com ');


    }








});