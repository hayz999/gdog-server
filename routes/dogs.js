const express = require('express')
const router = express.Router();

const queries = require('../queries')

router.get('/', (req, res, next) => {
  queries.list().then(dogs => {
     res.json({dogs});
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  queries.read(req.params.id).then(dog => {
    dog ?  res.json({dog}) : res.status(404).json({message: 'Not Found'})
  }).catch(next)
});

router.post('/', (req, res, next) => {
  queries.create(req.body).then(dog =>{
    res.status(201).json({dog: dog})
  }).catch(next)
});

router.delete('/:id', (req, res, next) => {
  queries.delete(req.params.id).then(() => {
    res.status(204).json({deleted: true})
  }).catch(next)
});

router.put('/:id', (req, res, next) => {
  queries.update(req.params.id, req.body).then(dog => {
     res.json({dog: dog[0]});
  }).catch(next)
});

module.exports = router;
