const express = require('express');
const apiRouter = express.Router();
// const apiAuthRouter = express.Router();

const ProductController = require('../controller/ProductController');
// const userMiddleware = require('../middleware/userMiddleware');

// apiRouter.post("/login", UserController.login);
// apiRouter.get("/logout", UserController.logout);


apiRouter.post("/add-product", ProductController.add);
apiRouter.get("/product-list", ProductController.list);


// // auth routes 
// // apiAuthRouter.get("/dashboard", UserController.dashboard);
// // apiAuthRouter.get("/about-us", UserController.aboutUs);
// apiAuthRouter.get("/user-detiails", UserController.userUetiails);
// // apiAuthRouter.post("/update-profile", upload.single('image') ,UserController.updateProfile);

// apiRouter.use('/', userMiddleware.authCheck ,apiAuthRouter);

module.exports = apiRouter;