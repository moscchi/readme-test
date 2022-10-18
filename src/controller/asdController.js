//get => localhost:5000/skill/?skill_id=[76, 27, 3, 134, 141]

const arrayasd = {
  id_company: 345,
  datetime_created: new Date(),
  datetime_modified: new Date(),
  modified_by: "analytics_platform",
  validated: 0,
  category: [
    {
      level: 2,
      areas: 28,
      skills_direct: [76, 27, 3, 134, 141],
      skills_related: [76, 27, 3, 134, 141],
      skills_other: [76, 27, 3, 134, 141],
      competence_direct: [28, 7, 24, 7, 24],
      competence_related: [28, 7, 24, 7, 24],
      competence_other: [28, 7, 24, 7, 24],
    },
    {
      level: 1,
      areas: 28,
      skills_direct: [76, 27, 3, 134, 141],
      skills_related: [76, 27, 3, 134, 141],
      skills_other: [76, 27, 3, 134, 141],
      competence_direct: [28, 7, 24, 7, 24],
      competence_related: [28, 7, 24, 7, 24],
      competence_other: [28, 7, 24, 7, 24],
    },

    {
      level: 2,
      areas: 28,
      skills_direct: [76, 27, 3, 134, 141],
      skills_related: [76, 27, 3, 134, 141],
      skills_other: [76, 27, 3, 134, 141],
      competence_direct: [28, 7, 24, 7, 24],
      competence_related: [28, 7, 24, 7, 24],
      competence_other: [28, 7, 24, 7, 24],
    },

    {
      level: 0,
      areas: 28,
      skills_direct: [76, 27, 3, 134, 141],
      skills_related: [76, 27, 3, 134, 141],
      skills_other: [76, 27, 3, 134, 141],
      competence_direct: [28, 7, 24, 7, 24],
      competence_related: [28, 7, 24, 7, 24],
      competence_other: [28, 7, 24, 7, 24],
    },

    {
      level: 4,
      areas: 28,
      skills_direct: [76, 27, 3, 134, 141],
      skills_related: [76, 27, 3, 134, 141],
      skills_other: [76, 27, 3, 134, 141],
      competence_direct: [28, 7, 24, 7, 24],
      competence_related: [28, 7, 24, 7, 24],
      competence_other: [28, 7, 24, 7, 24],
    },

    {
      level: 1,
      areas: 25,
      skills_direct: [76, 27, 3, 134, 141],
      skills_related: [76, 27, 3, 134, 141],
      skills_other: [76, 27, 3, 134, 141],
      competence_direct: [28, 7, 24, 7, 24],
      competence_related: [28, 7, 24, 7, 24],
      competence_other: [28, 7, 24, 7, 24],
    },

    {
      level: 4,
      areas: 28,
      skills_direct: [76, 27, 3, 134, 141],
      skills_related: [76, 27, 3, 134, 141],
      skills_other: [76, 27, 3, 134, 141],
      competence_direct: [28, 7, 24, 7, 24],
      competence_related: [28, 7, 24, 7, 24],
      competence_other: [28, 7, 24, 7, 24],
    },

    {
      level: 1,
      areas: 4,
      skills_direct: [76, 27, 3, 134, 141],
      skills_related: [76, 27, 3, 134, 141],
      skills_other: [76, 27, 3, 134, 141],
      competence_direct: [28, 7, 24, 7, 24],
      competence_related: [28, 7, 24, 7, 24],
      competence_other: [28, 7, 24, 7, 24],
    },
  ],
};

const responseCompetenceArray = [
  {
    id_competence: 1,
    name: "nombre1",
    description: "Esta competencia es ...",
    skill_related: [5, 6, 7, 8],
  },
  {
    id_competence: 4,
    name: "nombre4",
    description: "Esta competencia es ...",
    skill_related: [51, 61, 71, 81],
  },
];

const responseSkillArray = [
  {
    id_skill: 1,
    name: "nombre",
    description: "Esta habilidad es ...",
    competence_related: [3, 8],
  },
  {
    id_skill: 4,
    name: "nombre",
    description: "Esta habilidad es ...",
    competence_related: [5, 7],
  },
];
const responseCourseArray = [
  {
    id_course: 1,
    name: "nombre",
    description: "Este curso es ...",
    duration: 54.7,
    category_position: "Estratégico",
  },
  {
    course_Id: 4,
    name: "nombre",
    description: "Este curso es ...",
    duration: 54.7,
    category_position: "Estratégico",
  },
];
const responseCompanyUsersArray = [
  { level: 1, area: 28, id_users: [23, 24, 56, 47, 48] },
  { level: 2, area: 28, id_users: [26, 28, 59, 70, 46] },
];
const getLearningPathCreator = (req, res) => {
  const { id_company } = req.query;
  res.json(arrayasd);
};

const getCompetence = (req, res) => {
  const { id_competence } = req.query;
  const arrayCompetence = []
  let ids = id_competence.slice(1, -1);
  ids = ids.replace(/,/gm ,'')
  for(let i = 0; i < ids.length; i++){
    arrayCompetence.push({
      id_competence: i+1,
      name: `nombre comp ${i+1}`,
      description: "Esta competencia es ...",
      skill_related: [5+i, 6+i, 7+i, 8+i],
    })
    console.log(arrayCompetence);
  }
  res.json(arrayCompetence);
};

const getSkill = (req, res) => {
  const { id_skills } = req.query;
  const arraySkills = []
  let ids = id_skills.slice(1, -1);
  ids = ids.replace(/,/gm ,'')
  for(let i = 0; i < ids.length; i++){
    arraySkills.push({
      id_skill: i+1,
      name: `nombre skill ${i+1}`,
      description: "Esta habilidad es ...",
      competence_related: [5+i, 6+i, 7+i, 8+i],
    })
  }
  res.json(arraySkills);
};
const getCourses = (req, res) => {
  const { id_course } = req.query;
  const arrayCourse = []
  let ids = id_course.slice(1, -1);
  ids = ids.replace(/,/gm ,'')
  for(let i = 0; i < ids.length; i++){
    arrayCourse.push({
      id_course: i+1,
      name: `nombre curso ${i+1}`,
      description: "Esta curso es ...",
      category_position: "Estratégico",
      duration: 10*((i+1)*0.7)
    })
  }
  res.json(arrayCourse);
};

const getCompanyUsers = (req, res) => {
  const { id_company } = req.query;
  res.json(responseCompanyUsersArray);
};

const putLearningPathCreator = (req, res) => {
  const { id_company } = req.query;
  const {
    datetime_created,
    datetime_modified,
    modified_by,
    selector_mode,
    time_feature,
    category,
  } = req.body;
  const response = {
    id_company, datetime_created: datetime_created || new Date(),
    datetime_modified: datetime_modified || new Date(),
    modified_by, selector_mode, category
  }
  res.json(response)
};
module.exports = {
  getLearningPathCreator,
  getCompetence,
  getSkill,
  getCourses,
  getCompanyUsers,
  putLearningPathCreator
};
