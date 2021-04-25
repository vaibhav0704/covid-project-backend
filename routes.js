import express from 'express';
const router = express.Router();
import signUpTemplateCopy from './SignupModels.js'

router.post('/signup', async(req, res) => {

    console.log(req.body);

    const  signedUpUser = new signUpTemplateCopy({
        
        fullName: req.body.fullName,
        userName: req.body.userName,
        category: req.body,category,
        lat: req.body.lat,
        lng: req.body.lng        
    })
    signedUpUser.save()
    .then( data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.json(err);

    })
})


export default router;