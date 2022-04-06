import createCache from '@emotion/cache';

const createEmotioncCache = () => {
  return createCache({ key: 'css' });
};

export default createEmotioncCache;
