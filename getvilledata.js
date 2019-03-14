var axios = require('axios');

async function getVilleData()
{
   return await axios.get
   ('http://geocode.xyz/paris?json=1');
};

module.export = {
   getVilleData,
};

