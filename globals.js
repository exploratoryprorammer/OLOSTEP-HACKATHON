let gb = null; 
let updateFlag = false; 

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
