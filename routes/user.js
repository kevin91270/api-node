UserController = require('../controllers/user-controller');

module.exports = (server) => {

    server.get('/users', UserController.readAll, (res, req) => {
        res.sent(UserController.readAll);
    });
    server.get('/user/:id', UserController.read, (res, req) => {
        res.sent(UserController.read);
    });
    server.post('/user', UserController.create);
    server.delete('/user/:id', UserController.delete);
}