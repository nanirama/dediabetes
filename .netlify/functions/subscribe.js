const axios = require('axios');
const qs = require('querystring');

// Email validation
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const endpoint =
  process.env.SENDYENDPOINT || 'https://sendy.dediabetes.com/subscribe';


// Entrypoing
exports.handler = async (event, _) => {
  const body = JSON.parse(event.body);
  const email = body.email;

  // Guard bad requests
  if (!body || !email || !validateEmail(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'A valid email is required' }),
    };
  }

  // Make request to sendy
  const data = qs.stringify({
    email,
    list: 'vhwnC6KsYb7PrrdSBzy27g',
    api_key: 'hFKYvRTQW8v3OoULN5ar',
  });

  try {
    const res = await axios.post(endpoint, data);

    if (res.data.indexOf('already') !== -1) {
      return {
        statusCode: 409,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: 'Already subscribed!',
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: 'Subscribed successfully',
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error' }),
    };
  }
};
