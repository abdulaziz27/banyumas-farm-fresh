const { expressjwt : jwt } = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;

    return jwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /\/public\/uploads(.*)/ , methods: ['GET', 'OPTIONS'] },
            {url: /\/api\/products(.*)/ , methods: ['GET', 'OPTIONS'] },
            {url: /\/api\/categories(.*)/ , methods: ['GET', 'OPTIONS'] },
            `${api}/users/login`,
            `${api}/users/register`,
        ]
    })
}
// async function isRevoked(req, payload, done) {
//     if(!payload.isAdmin) {
//         done(null, true)
//     }
//     done();
// }
async function isRevoked(req, payload) {
    // console.log(payload);
    if (payload.isAdmin == false) {
      console.log('Not Admin');
      return true;
    }
    console.log('Admin');
    return false;
}

module.exports = authJwt;