const mongoose = require('mongoose');
const globals = require('./globals'); 

const connectToDB = async () => {
    try {
        const dburi = globals.getGB();
        if (globals.getUpdateFlag() && dburi) {
            if (mongoose.connection.readyState === 1) {
                await mongoose.connection.close();
                console.log('Closed existing MongoDB connection.');
            }
            
            await mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('Connected to MongoDB with URI:', dburi);
        } else {
            console.log('No update flag set or URI not provided');
        }
    } catch (error) {
        console.error('Failed to connect to DB:', error.message);
    }
};

module.exports = connectToDB;
