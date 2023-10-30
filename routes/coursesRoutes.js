const express= require('express')
const router1= express.Router()

//uri de courses

router1.get('/' , function(req, res){
    res.json({
        success:true,
        msg:"aqui se traerán todos los cursos"
    })
})

router1.get('/:id' , function(req, res){
    res.json({
        success:true,
        msg:`aqui se traerá el cursos cuyo id es :${req.params.id}`
    })
})

router1.post('/' , function(req, res){
    res.json({
        success:true,
        msg:`aqui se creará un curso`
    })
})

router1.put('/:id' , function(req, res){
    res.json({
        success:true,
        msg:`aqui se editará el curso cuyo id es :${req.params.id}`
    })
})

router1.delete('/:id' , function(req, res){
    res.json({
        success:true,
        msg:`aqui se eliminará el curso cuyo id es :${req.params.id}`
    })
})


module.exports = router1



