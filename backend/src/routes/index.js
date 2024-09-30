const express = require('express')
const router = express.Router()
const {deploy} = require('../container-as-a-service')
const benomadsApi = require('../api/benomads')

console.log(deploy)

router.post('/deploy', async (req, res) => {
    console.log(req.body)
    const manifest = deploy[0]
    manifest['content'] = req.body

    try {
        const resp = await benomadsApi.deployMyApp(JSON.stringify(manifest))
        if(!resp) throw new Error('No response')
        res.status(201).json(resp.data)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})


module.exports = router