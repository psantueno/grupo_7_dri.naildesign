// ************ Librerías Require's ************
const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require("multer");

// ************ Controllers Require ************
const productsController = require("../controllers/productsController");

// ************ Configuración Multer ************
const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		let folder = path.join(__dirname, "../../public/image");
		callback(null, folder);
	},

	filename: (req, file, callback) => {
		const imageName = "product-" + Date.now() + path.extname(file.originalname);
		callback(null, imageName);
	}
});

const upload = multer({storage: storage});

// ************ PRODUCTS ROUTES ************ //

// /*** LISTA DE PRODUCTOS ***/ 
router.get('/', productsController.listProducts);

// /*** DETALLE DE PRODUCTOS ***/ 
router.get('/detailProduct/:id', productsController.detailProduct);

// /*** CREATE ONE PRODUCT ***/ 
router.get('/addProduct', productsController.addNewProduct);
router.post('/', upload.single("imagenproducto"), productsController.store);

// /*** EDITAR PRODUCTOS ***/ 
router.get('/editProduct/:id', productsController.editProduct);
router.put('/editProduct/:id', upload.single("imagenproducto"), productsController.updateProduct);

// /*** ELIMINAR PRODUCTOS ***/ 
router.delete('/:id', productsController.destroy);


module.exports = router;