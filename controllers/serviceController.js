const serviceController = {
    dailyServices: (req, res) => {
        return res.json('Serviços do dia');
    },
    closedTicket: (req, res) => {
        return res.json('Chamado encerrado com sucesso!');
    }
};

module.exports = serviceController;