import IndexController from '../controllers/index.js'; // Added .js extension

function setRoutes(app) {
    const indexController = new IndexController();

    app.get('/', indexController.getIndex.bind(indexController));
}

export { setRoutes }; // Changed from module.exports to ES module export