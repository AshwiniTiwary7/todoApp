const storage = require('node-persist');
storage.init();

async function getTasks(req, res) {
    try {
        let allTasks = [];
        await storage.forEach(async function (datum) {
            await allTasks.push(datum);
        })
        res.status(200).json({
            message: "All Tasks are here",
            allTasksks: allTasks
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Sorry! There was an server-side error"
        })
    }
}

module.exports = getTasks;