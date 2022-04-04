const { Router } = require('express')
const router = Router()


const mcgymsCtrl = require('../controllers/mcgym.controller.js')

//GET
router.get('/', mcgymsCtrl.getmcgyms);


//POST
router.post('/', mcgymsCtrl.createmcgym);

//GET
router.get('/:id', mcgymsCtrl.getmcgym);

//PUT
//router.put('/:id', mcgymsCtrl.putmcgym);

//DELETE
router.delete('/:id', mcgymsCtrl.deletemcgym);


module.exports = router