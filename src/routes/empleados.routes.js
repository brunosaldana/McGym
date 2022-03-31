const { Router } = require('express')
const router = Router()

router.get('/McGym', (req,res) => res.send('Edubruno'))

module.exports = router