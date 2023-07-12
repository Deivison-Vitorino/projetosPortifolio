const ticketController = {
    openTicketPage: (req, res) => {
        res.json('Abertura de chamado');
    },
    openedTicket: (req, res) => {
        res.json('Chamado registrado com sucesso!');
    },
    updatedTicket: (req, res) => {
        res.json('Chamado atualizado com sucesso!');
    },
    deletedTicket: (req, res) => {
        res.json('Chamado excluído com sucesso!');
    }
};

module.exports = ticketController;