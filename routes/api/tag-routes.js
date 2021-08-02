const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.json(tagData);
  } catch (e) {
    res.json(e);
    console.log(e);
  }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id);
    res.json(tagData);
  } catch (e) {
      res.json(e);
      console.log (e)
  }
});

//Create a new tag
router.post('/', async (req, res) => {
  try {
    const newTagData = await Tag.create(req.body);
    // Successful request => error code 200
    res.status(200).json(newTagData);
  } catch (err) {
    // Cannot understand request => error code 400
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  // Calls the update method on the Book model
  Tag.update(
    {
      // Update these record fields with respective req.body element
      tag_name: req.body.tag_name,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updateTagData) => {
      // Sends the updated book as a json response
      res.json(updateTagData);
    })
    .catch((err) => res.json(err));
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Tag.destroy(
    {
      where: {
        id: req.params.id,
      },
    })
    .then((tagDeleteData) => {
      res.json(tagDeleteData);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
