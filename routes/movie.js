MovieController = require('../controllers/movie-controller');

module.exports = (server) => {

    server.get('/movies', MovieController.readAll, (res, req) => {
        res.sent(MovieController.readAll);
    });
    server.get('/movie/:id', MovieController.read, (res, req) => {
        res.sent(MovieController.read);
    });
    server.post('/movie', MovieController.create);
}