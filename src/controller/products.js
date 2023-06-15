const{
  selectAllProduct,
  selectProduct,
  insertProduct,
  updateProduct,
  deleteProduct,
  countData,
  findId,
}= require("../model/products")
const commonHelper = require("../helper/common");

let productController = {
  getAllProduct:async (req, res) => {
    try {
      const result = await selectAllProduct();
      // res.send(result)
      commonHelper.response(res, result.rows, 200, "get data success");
    } catch (error) {
      console.log(error);
    }
  },
  getDetailProduct: async (req, res) => {
    const id = Number(req.params.id);
    selectProduct(id)
      .then((result) => {
        commonHelper.response(res, result.rows, 200, "get data success");
      })
      .catch((err) => res.send(err));
  },
  createProduct: async (req, res) => {
    let { nama, price, stock } = req.body;
    const {rows:[count]} = await countData();
    const id = Number(count.count);
    const data  = {
      id,
      nama,
      stock,
      price,
    };
       insertProduct(data )
       .then((result) => {
        commonHelper.response(res, result.rows, 201, "Product created")
       }).catch((err) => {
        console.log(err)
        
       });
  },
  updateProduct: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { nama, stock, price, } = req.body;
      const { rowCount } = await findId(id);
      if (!rowCount) {
        res.json({message: "ID is Not Found"})
      }
      const data = {
        id,
        nama,
        stock,
        price,
      };
      updateProduct(data)
        .then((result) =>
          commonHelper.response(res, result.rows, 200, "Product updated")
        )
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { rowCount } = await findId(id);
      if (!rowCount) {
        res.json({message: "ID is Not Found"})
      }
      deleteProduct(id)
        .then((result) =>
          commonHelper.response(res, result.rows, 200, "Product deleted")
        )
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = productController;
