import express from 'express';
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();
const __filename = path.join(__dirname, 'data', 'features.json');

const app = express();
const jsonFile = fs.readFileSync(__filename, 'utf-8');
const features = JSON.parse(jsonFile);

app.get('/', (req, res) => {
    res.send('Pocketz suggest feature backend is running.');
});

app.get('/suggest-feature', (req, res) => {
    //res.json({ message: 'Feature suggestion endpoint' });
    //const exisiting =  
    const write = features.push(req.body);
    fs.writeFileSync(__filename, JSON.stringify(req.body, null, 2));
    res.json({ message: 'Feature suggestion received', data: write });
});

app.get('/suggested-features', (req, res) => {
    //res.json({ message: 'Feature suggestion endpoint' });
    res.json(features);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});