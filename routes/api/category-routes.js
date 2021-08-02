const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categoriesa
router.get('/', async (req, res) => {
    try {
      const categoryData = await Category.findAll();
      res.json(categoryData);
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
    try {
      const categoryDetail = await Category.findByPk(req.params.id);

      if (!categoryDetail) {
        res.status(404).json({ message: `Category with id# ${req.params.id} is not available.` });
        return;
      }
      res.json(categoryDetail);
      
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const newCategoryData = await Category.create(req.body);
    // Successful request => error code 200
    res.status(200).json(newCategoryData);
  } catch (err) {
    // Cannot understand request => error code 400
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  
  // Calls the update method on the Book model
  Category.update(
    {
      // Update these record fields with respective req.body element
      category_name: req.body.category_name,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategoryData) => {
      // Sends the updated book as a json response
      res.json(updatedCategoryData);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
  {
    where: {
      id: req.params.id,
    },
  })
  .then((categoryDeleteData) => {
    res.json(categoryDeleteData);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
