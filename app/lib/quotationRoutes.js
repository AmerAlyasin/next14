const express = require('express');
const router = express.Router();
const { updateQuotation } = require('../lib/actions');

router.put('/:id', updateQuotation);

module.exports = router;