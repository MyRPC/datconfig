import stripComments from './stripComments';

export default (config, commentsStrip) => {
    config = config.trim();
    if (commentsStrip) config = stripComments(config);
    return config;
};