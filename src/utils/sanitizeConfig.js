export default config => {
    config = config.replace(/\n/, '').trim();
    return config;
};