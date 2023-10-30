const express= require('express')
const router= express.Router()

//URL DEL PROYECTO
router.get('/' , function(req, res){
    res.json({
        success:true,
        msg:"aqui se traerán todos los bootcamps"
    })
})

router.get('/:id' , function(req, res){
    res.json({
        success:true,
        msg:`aqui se traerá el bootcamps cuyo id es :${req.params.id}`
    })
})

router.post('/' , function(req, res){
    res.json({
        success:true,
        msg:`aqui se creará un bootcamp`
    })
})

router.put('/:id' , function(req, res){
    res.json({
        success:true,
        msg:`aqui se editará el bootcamp cuyo id es :${req.params.id}`
    })
})

router.delete('/:id' , function(req, res){
    res.json({
        success:true,
        msg:`aqui se eliminará el bootcamp cuyo id es :${req.params.id}`
    })
})


module.exports = router



