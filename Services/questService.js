const Quests = require('../Models/QuestionsModel');



const initDefaultQuests = async (name) => {
    if (!name) {
        throw new Error('Por favor, informe o nome do cliente');
    }

    try {
        const data = await returnDefaultQuests(name);
        const newQuests = await Quests.insertMany(data);


        return newQuests;
    } catch (err) {
        throw new Error('Erro interno: ' + err.message);
    }
}


const updateQuest = async (questid,description) => {

    if(!questid){
        throw new Error('Por favor, informe o ID da pergunta')
    }
    if(!description){
        throw new Error('Por favor, informe uma descrição para a pergunta')
    }

    try{
        const newQuest = await Quests.findByIdAndUpdate(questid,{description})
        newQuest.save();
        
        return newQuest;
    }catch(err){
        throw new Error('Erro interno')
        
        
    }
}

const questSoftDelete = async (questid) => {

    if(!questid){
        throw new Error('Por favor, informe o ID da pergunta')
    }

    try{
        const newQuest = await Quests.findByIdAndUpdate(questid,{visible:false})
        newQuest.save();
        return newQuest;
    }catch(err){
        throw new Error('Erro interno')
    }
}



const questCreate = async (quest) => {


    const {type,description,category} = quest

    if(type!= 'O' && type!='C'){

    throw new Error('O tipo de pergunta deve ser O ou C, Open or Closed')

    }

    if(!description){
        throw new Error('Por favor, informe uma descrição para a pergunta')
    }

    if(!category){
        throw new Error('Por favor, informe uma categoria para a pergunta')
    }

    const data = {
        type:type,
        description:description,
        category:category
    }

    const newQuest = new Quests(data);
    const result = await newQuest.save();
    return result
}
const returnDefaultQuests = function(nome){
    if(!nome){
        throw new Error('Por favor, informe o nome do cliente')
    }
    const data = [
        { 
            description: "As pessoas são tratadas igualmente e com respeito, independente de sua origem, religião, raça, gênero, orientação sexual, identidade de gênero, cor, idade, cargo ou posição.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área trabalhamos em equipe; cada um pode contar com a ajuda dos outros.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área há um bom relacionamento entre os colegas.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área posso expressar meus pontos de vista sem medo de constrangimentos.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área existe troca de conhecimento (compartilhamento) entre os membros da equipe.",
            type: "C",
            visible: true
        },
        { 
            description: "Existe colaboração, troca de ideias e de recursos entre a minha área e as demais áreas do " + nome  +   ".",
            type: "C",
            visible: true
        },
        { 
            description: "Conheço o plano de negócios do " + nome  +   " para este e para os próximos anos.",
            type: "C",
            visible: true
        },
        { 
            description: "Conheço os objetivos e metas da minha área de trabalho.",
            type: "C",
            visible: true
        },
        { 
            description: "As metas da minha área são, ao mesmo tempo, desafiadoras e possíveis de serem cumpridas.",
            type: "C",
            visible: true
        },
        { 
            description: "Sei o que se espera do meu trabalho; o que fazer e como fazer.",
            type: "C",
            visible: true
        },
        { 
            description: "Eu tenho sempre as informações que preciso para fazer o meu trabalho.",
            type: "C",
            visible: true
        },
        { 
            description: "Os processos da minha área estão claros e bem organizados, permitindo um trabalho de qualidade.",
            type: "C",
            visible: true
        },
        { 
            description: "A equipe da minha área conhece bem os impactos do seu trabalho (e até dos seus erros) na satisfação do cliente.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área todos sabem claramente como o seu trabalho impacta no sucesso e no resultado financeiro do " + nome  +   " (positiva ou negativamente).",
            type: "C",
            visible: true
        },
        { 
            description: "A equipe da minha área de trabalho está sempre buscando a diminuição de seus desperdícios de material, de tempo e de retrabalho.",
            type: "C",
            visible: true
        },
        { 
            description: "A equipe da minha área faz a gestão do seu tempo adequadamente.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área somos informados quando ocorrem mudanças de procedimentos, de objetivos ou de estratégias.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área estamos abertos a entender o problema e escutar o cliente em busca de soluções que agreguem valor aos nossos produtos e serviços.",
            type: "C",
            visible: true
        },
        { 
            description: "Percebo que os produtos e serviços do/a " + nome  +   " estão cada dia melhores.",
            type: "C",
            visible: true
        },
        { 
            description: "Frente aos desafios da revolução tecnológica, o " + nome  +   " está mudando seus processos visando a excelência técnica e de gestão.",
            type: "C",
            visible: true
        },
        { 
            description: "O meu gestor nos informa, explica e orienta sobre o nosso desempenho no mês anterior e os desafios para o próximo mês.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área de trabalho existe comprometimento com as metas estabelecidas.",
            type: "C",
            visible: true
        },
        { 
            description: "Sinto me incentivado a propor soluções para melhorar o desempenho da minha área.",
            type: "C",
            visible: true
        },
        { 
            description: "Sou envolvido no planejamento e implantação de melhorias na minha área de trabalho.",
            type: "C",
            visible: true
        },
        { 
            description: "No " + nome  +   " há uma comunicação aberta e transparente com os empregados.",
            type: "C",
            visible: true
        },
        { 
            description: "No " + nome  +   " temos bons canais de comunicação para manifestar nossas ideias, solicitar informações e propor sugestões.",
            type: "C",
            visible: true
        },
        { 
            description: "Nossa equipe obtém reconhecimento pelo empenho para atingir metas.",
            type: "C",
            visible: true
        },
        { 
            description: "Meu trabalho me permite equilibrar minha vida profissional, pessoal e familiar.",
            type: "C",
            visible: true
        },
        { 
            description: "Considerando o seu regime de trabalho preponderante atualmente, as instalações físicas são adequadas: espaço, layout, mobiliário e organização.",
            type: "C",
            visible: true
        },
        { 
            description: "Considerando o seu regime de trabalho preponderante atualmente, as condições ambientais são adequadas: ventilação, nível de ruído, higiene e limpeza.",
            type: "C",
            visible: true
        },
        { 
            description: "Considerando o seu regime de trabalho preponderante atualmente, as condições de saúde e segurança do trabalho na sua área são adequadas.",
            type: "C",
            visible: true
        },
        { 
            description: "Considerando o seu regime de trabalho preponderante atualmente, você tem os recursos necessários (máquinas, equipamentos, ferramentas, sistemas) para fazer bem o seu trabalho.",
            type: "C",
            visible: true
        },{ 
            description: "Confio nas decisões tomadas pela direção do " + nome  +   ".",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área eu tenho acesso aos níveis táticos da liderança: Supervisor, Coordenador e Chefe de Departamento.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área eu tenho acesso aos níveis estratégicos da liderança: Gerente e Diretor.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área não existem conflitos entre os diversos níveis de liderança.",
            type: "C",
            visible: true
        },
        { 
            description: "Meu gestor está preparado para gerenciar pessoas e administrar a equipe de sua área.",
            type: "C",
            visible: true
        },
        { 
            description: "Meu gestor faz uma boa administração da minha área contribuindo com os objetivos do " + nome  +   ".",
            type: "C",
            visible: true
        },
        { 
            description: "Meu gestor age de acordo com o que fala e cumpre o que promete.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área, quando alguém erra é corrigido e orientado, mas não sofre constrangimentos.",
            type: "C",
            visible: true
        },
        { 
            description: "Meu gestor distribui adequadamente as tarefas entre a equipe.",
            type: "C",
            visible: true
        },
        { 
            description: "Meu gestor delega tarefas aos membros da nossa equipe, dá autonomia adequada para que cada um execute seu trabalho.",
            type: "C",
            visible: true
        },
        { 
            description: "Meu gestor tem tempo e paciência para me ouvir e está sempre aberto a novas ideias.",
            type: "C",
            visible: true
        },
        { 
            description: "Meu gestor é preocupado com o bom relacionamento da equipe.",
            type: "C",
            visible: true
        },
        { 
            description: "Recebo regularmente informações (feedback) do meu gestor sobre a qualidade do meu trabalho.",
            type: "C",
            visible: true
        },
        { 
            description: "Os valores e as políticas do " + nome  +   " são realmente praticados no dia a dia da minha área de trabalho.",
            type: "C",
            visible: true
        },
        { 
            description: "Meu gestor coordena com outras áreas e parceiros, alternativas e soluções para melhoria dos nossos processos de trabalho.",
            type: "C",
            visible: true
        },
        { 
            description: "O " + nome  +   " disponibiliza bons treinamentos para que eu me torne cada vez mais capacitado.",
            type: "C",
            visible: true
        },
        { 
            description: "O " + nome  +   " me fornece oportunidades de desenvolvimento para que eu realize bem o meu trabalho e cresça profissionalmente.",
            type: "C",
            visible: true
        },
        { 
            description: "Tenho conhecimento das possibilidades de carreira no " + nome  +   ".",
            type: "C",
            visible: true
        },
        { 
            description: "Em minha área os critérios para promoção são objetivos e claros.",
            type: "C",
            visible: true
        },
        { 
            description: "Em minha área as promoções que aconteceram seguiram os critérios estabelecidos.",
            type: "C",
            visible: true
        },
        { 
            description: "Tenho clareza que sou responsável pelo meu autodesenvolvimento profissional.",
            type: "C",
            visible: true
        },
        { 
            description: "O " + nome  +   " transmite uma imagem bastante positiva ao público externo: mercado, clientes, comunidade e fornecedores.",
            type: "C",
            visible: true
        },
        { 
            description: "O " + nome  +   " é ético: age com transparência, com honestidade e com dignidade.",
            type: "C",
            visible: true
        },
        { 
            description: "Percebo que o " + nome  +   " mantém o foco no mercado e no cliente, procurando entender suas necessidades e expectativas.",
            type: "C",
            visible: true
        },
        { 
            description: "Percebo que o " + nome  +   " se preocupa com o meio ambiente.",
            type: "C",
            visible: true
        },
        { 
            description: "Percebo que o " + nome  +   " promove ações de responsabilidade social.",
            type: "C",
            visible: true
        },
        { 
            description: "Meus familiares apreciam o fato de eu trabalhar no " + nome  +   ".",
            type: "C",
            visible: true
        },
        { 
            description: "Considero que tenho um salário compatível com outras empresas do mercado.",
            type: "C",
            visible: true
        },
        { 
            description: "Considero que tenho um salário justo em relação ao trabalho que realizo.",
            type: "C",
            visible: true
        },
        { 
            description: "O " + nome  +   " tem uma boa política de benefícios.",
            type: "C",
            visible: true
        },
        { 
            description: "Na minha área nós nos adaptamos rapidamente às necessidades e oportunidades que o cenário nos apresenta.",
            type: "C",
            visible: true
        },
        { 
            description: "Percebo que o " + nome  +   " é inovador; está sempre apresentando boas novidades.",
            type: "C",
            visible: true
        },
        { 
            description: "Como você classifica seu ORGULHO em trabalhar no " + nome  +   ":",
            type: "O",
            visible: true
        },
        { 
            description: "Como você classifica seu grau de SATISFAÇÃO GERAL em trabalhar no " + nome  +   "?",
            type: "O",
            visible: true
        },
        { 
            description: "Se você recebesse uma proposta de outra boa empresa para ganhar 10% a mais, você CONTINUARIA no seu cargo aqui no " + nome  +   "?",
            type: "O",
            visible: true
        },
    ]
    return data
}


module.exports = {questCreate,questSoftDelete,updateQuest,initDefaultQuests}