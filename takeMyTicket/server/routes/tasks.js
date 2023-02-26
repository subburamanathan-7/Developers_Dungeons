const express = require('express');
const router = express.Router();

const {getAllTickets,createTicket,updateTicket,deleteTicket,getArtistTickets} = require('../controllers/tasks');

router.route('/').get(getAllTickets).post(createTicket);

router.route('/:id').patch(updateTicket).delete(deleteTicket);

router.route('/search/:name').get(getArtistTickets);

module.exports = router;	