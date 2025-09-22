
// Configure this for your services as appropriate. See go/sm-proxy
const proxies = {
  '/app/service/secure/jas': {
    host: 'xdev.home.www.uprr.com'
  },
  '/uit': {
    host: 'xdev.home.www.uprr.com'
  }
};
module.exports = proxies;