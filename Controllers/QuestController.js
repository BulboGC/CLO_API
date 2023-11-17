
const  { questCreate,questSoftDelete,initDefaultQuests } = require( '../Services/questService.js');


const defautQuest = async (req,res)=>{
    //nome da empresa para colocar nas perguntas
    const {name} = req.body;

    if(!name){
        res.status(400).json({message:"Nome deve ser enviado"})
    }
    try{
        const datas = await initDefaultQuests(name);
        res.status(201).json(datas);
    }catch(err){
        res.status(400).json({message: err.message});
    }


}
const addQuest = async (req, res) => {

    const {description,type,category} = req.body;

    if(!description){
        res.status(400).json({message:"Descrição deve ser enviada"})
    }
    if(type != 'O' && type != 'C'){
        res.status(400).json({message:"O tipo deve ser O ou C"})
    }
    
    const quest = {description,type,category}

    try{
        const newQuest = await questCreate(quest);
        res.status(201).json(newQuest);

    }catch(err){
        res.status(400).json({message: err.message});
    }



}

const softdellQuest = async (req, res) => {
    const {questid} = req.params;

    try{
        const newQuest = await questSoftDelete(questid);
        res.status(201).json(newQuest);

    }catch(err){
        res.status(400).json({message: err.message});
    }
}

const editQuest = async (req, res) => {
    const {questid} = req.params;
    
    const {description,category} = req.body;

    if(!description){
        res.status(400).json({message:"Descrição deve ser enviada"})
    }
    if(!questid){
        res.status(400).json({message:"ID da pergunta deve ser enviada"})
    }if(!category){
        res.status(400).json({message:"Nome da categoria deve ser enviada"})
    }

    try{
        const editQuest = await questSoftDelete(questid,description);
        res.status(201).json(editQuest);
    }catch(err){
        res.status(400).json({message: err.message});
    }


}

module.exports =  {addQuest,softdellQuest,editQuest,defautQuest}