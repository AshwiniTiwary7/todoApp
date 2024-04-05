const storage = require('node-persist');
storage.init();

async function deleteTasks(req,res){
    try {
        const { taskId} = req.params;
        if(!taskId){
            res.status(401).json({
                message:"Invalid Todo!"
            })
        }
        else{
            const deletedTodo = await storage.removeItem(`${taskId}`);
            if(deletedTodo.existed === false){
                res.status(404).json({
                    message:"Cannot Delete an todo! That doesnt exist."
                })
            }
            else{
                res.status(200).json({
                    message:"Todo Deleted Successfully"
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = deleteTasks;