const router = require('express').Router();

const axios = require('axios');
const { getLearningPathCreator, getCompetence, getSkill, getCourses, getCompanyUsers, putLearningPathCreator } = require('../controller/asdController');

router.get('/learningmap_creator/', getLearningPathCreator)
router.get('/competence/', getCompetence)
router.get('/skill/', getSkill)
router.get('/course/', getCourses)
router.get('/company_users/', getCompanyUsers)
router.put('/learningpath_creator/', putLearningPathCreator)

router.get('/algo',async (req, res) => {
    console.log(axios);
    const pk = axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(data => console.log(data.data)).catch(err => console.log(err))
    console.log(pk);
    res.write('asd')
})
module.exports = router;