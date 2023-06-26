const { expressjwt: jwt } = require('express-jwt');

function authJwt() {
  const secret = process.env.secret;
  const api = process.env.API_URL;

  return jwt({
    secret,
    algorithms: ['HS256'],
    isRevoked: isRevoked,
  }).unless((req) => {
    const path = req.originalUrl.split('?')[0];
    return (
      /\/public\/uploads(.*)/.test(path) ||
      /\/api\/products(.*)/.test(path) ||
      /\/api\/categories(.*)/.test(path) ||
      /\/api\/users\/verify-email(.*)/.test(path) ||
      /^\/api\/cart\/[a-fA-F0-9]{24}$/.test(path) ||
      `${api}/users/send-verification-email` === path ||
      `${api}/users/login` === path ||
      `${api}/users/register` === path ||
      `${api}/cart` === path ||
      `${api}/orders` === path
    );
  });
}

async function isRevoked(req, payload) {
  // Cek apakah pengguna yang terotentikasi adalah admin
  if (payload.isAdmin === true) {
    return false; // Akses diizinkan untuk admin
  }

  // Cek user yang terautentikasi cocok dengan pemilik keranjang
  if (req.params.id && payload.userId !== req.params.id) {
    console.log('Unauthorized access');
    return true; // Akses tidak diizinkan
  }

  return false; // Akses diizinkan untuk pengguna yang bukan admin
}

module.exports = authJwt;