let gb = null; 
let updateFlag = false; 
let uri = 'mongodb+srv://rohanksah:2Y91bRjOHFEfC8QU@538scraper.mhcla.mongodb.net/'

const setGB = (value) => {
    gb = value;
};

const getGB = () => {
    return gb;
};

const setUpdateFlag = (value) => {
    updateFlag = value;
};

const getUpdateFlag = () => {
    return updateFlag;
};

module.exports = {
    setGB,
    getGB,
    setUpdateFlag,
    getUpdateFlag,
    uri
};
