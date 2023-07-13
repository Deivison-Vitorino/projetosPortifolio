const ticketController = {
    openTicketPage: (req, res) => {
        return res.json('Abertura de chamado');
    },
    openedTicket: (req, res) => {
        return res.json('Chamado registrado com sucesso!');
    },
    updatedTicket: (req, res) => {
        return res.json('Chamado atualizado com sucesso!');
    },
    deletedTicket: (req, res) => {
        return res.json('Chamado excluído com sucesso!');
    }
};

module.exports = ticketController;