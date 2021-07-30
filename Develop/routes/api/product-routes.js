const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
    // find all products with the category data joined
    try {
      const productData = await Product.findAll({
        include: [{ model: Category },],
      });
      res.json(productData);
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

// get one product
router.get('/:id', async (req, res) => {
    // find a product with the category data joined
    try {
      const productData = await Product.findByPk(req.params.id, {
        include: [{ model: Category },],
      });
      res.json(productData);
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

// create new product
router.post('/', async (req, res) => {
    try {
      console.log (req.body);
      const newProductData = await Product.create(req.body);
      // Successful request => error code 200
      res.status(200).json(newProductData);
    } catch (err) {
      // Cannot understand request => error code 400
      res.status(400).json(err);
    }
});

router.delete('/:id', (req, res) => {
    // delete one product by its `id` value
    Product.destroy(
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

/************************************************************/
/************            EXTRA CREDIT            ************/
/************************************************************/

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  
  // Calls the update method on the Book model
    Product.update(
      {
        // Update these record fields with respective req.body element
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        category_id: req.body.category_id,
      },
      {
        // Gets the books based on the isbn given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedProductData) => {
        // Sends the updated book as a json response
        res.json(updatedProductData);
      })
      .catch((err) => res.json(err));
});

module.exports = router;
