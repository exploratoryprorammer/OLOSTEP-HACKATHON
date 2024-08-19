import { setGB, getGB } from '../../globals';
import mongoose from 'mongoose';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const dbURI = req.body.uri;
        setGB(dbURI);

        if (getGB()) {
            connectToDB(getGB());
            res.status(200).json({ message: 'URI set successfully' });
        } else {
            res.status(500).json({ message: 'Failed to set URI' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

function connectToDB(uri) {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch(error => console.log('Error connecting to MongoDB:', error.message));
}
