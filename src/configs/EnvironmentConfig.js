const dev = {
  API_ENDPOINT_URL: `${'https://mail-template-demo-api.sslwireless.com'}/api/`,
};

const prod = {
  API_ENDPOINT_URL: `${process.env.REACT_APP_API_BASE_URL}/api/v1`,
};

const test = {
  API_ENDPOINT_URL: `${process.env.REACT_APP_API_BASE_URL}/api/v1`,
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return dev;
    case 'production':
      return prod;
    case 'test':
      return test;
    default:
      break;
  }
};

export const env = getEnv();
