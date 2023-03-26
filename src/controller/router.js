let userHandleRouter = require('./handle/userHandleRouter')
let postHandleRouter = require('./handle/postHandleRouter');
const router = {
    "" : userHandleRouter.showHome,
    "home": postHandleRouter.showHome
}
module.exports = router;