const serviceController = {
    dailyServices: (req, res) => {
        res.json('Serviços do dia');
    },
    closedTicket: (req, res) => {
        res.json('Chamado encerrado com sucesso!');
    }
}

module.exports = serviceController;