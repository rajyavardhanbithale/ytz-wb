// protected api route 
const protectedRoute = ['/api/v1/product-add', '/api/v1/product-update', '/api/v1/product-delete'];

const expMiddleware = async (req, res, next) => {
    const url = req.originalUrl;
    if (protectedRoute.includes(url)) {
        console.log('protected route');
    }

    next();
};

module.exports = expMiddleware;
