const storage = require('node-persist');
const crypto = require('crypto');
storage.init();

async function addTask(req, res) {
    try {
        const { todoTask } = req.body;
        if (!todoTask) {
            res.status(404).json({
                message: "You need to add Task!"
            })
        }
        else {
            const randomKey = await crypto.randomUUID();
            await storage.setItem(`${randomKey}`, todoTask);
            res.status(200).json({
                message: "Todo Added Successfully!"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Sorry! There was an server-side error"
        })
    }
}

module.exports = addTask;