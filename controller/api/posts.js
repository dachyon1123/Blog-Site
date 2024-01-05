const router = require('express').Router();
const { posts } = require('../../model');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  posts.findAll().then((postData) => {
    res.json(postData)
  })
});

router.get('/:id', (req, res) => {
  posts.findByPk(req.params.id).then((postData) => {
    res.json(postData)
  })
});

router.post('/', (req, res) => {
  posts.create(req.body).then ((newPost) => {
    res.json(newPost)
  }).catch((err) => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  posts.update(req.body, { where: { id: req.params.id}}).then(res.status(200).send())
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  posts.destroy({ where: {id: req.params.id}}).then(res.status(200).send())
});

module.exports = router;
