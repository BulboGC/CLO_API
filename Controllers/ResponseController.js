const {createNewResponse} = riquire('../Services/responseService.js');


const addResponse = async (req, res) => {
    const { quest_id, response } = req.body;

    if (!quest_id) {
        res.status(400).json({ message: 'Por favor, informe o ID da pergunta' });
    }
    if (!response) {
        res.status(400).json({ message: 'Por favor, informe a resposta' });
    }

    try {
        await createNewResponse(quest_id, response);
        res.status(201).json({ message: 'Resposta adicionada com sucesso' });

    }catch(err) {
        res.status(400).json({ message: err.message });
    }

}