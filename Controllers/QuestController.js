




const getAvage = async(req,res)=>{
    const userId = req.user.id; 
    


    if(!userId){
        res.status(400).json({message: 'Por favor informe o id da tarefa que deseja deletar'});
    }

    try{
        const response = await delTask(userId,taskId);
        res.status(200).json(response.tasks)

    }catch(err)
    {
        return res.status(500).json({message: err})
    }
    
}