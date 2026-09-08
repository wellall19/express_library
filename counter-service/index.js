const fs = require('fs');
const path = require('path');
const express = require('express')
const app = express();

const DATA_FILE = path.join(__dirname, 'data', 'counters.json');
const DATA_DIR = path.dirname(DATA_FILE);

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

function readCounters() {
    if (!fs.existsSync(DATA_FILE)) {
        return {};
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
}

function writeCounters(counters) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(counters, null, 2));
}

app.post('/counter/:bookId/incr', (req,res) => {
    const {bookId} = req.params;
    const counter = readCounters();
    if (counter[bookId]) {
        counter[bookId] += 1;
    } else {
        counter[bookId] = 1;
    };
    writeCounters(counter);
    res.json({ bookId, count: counter[bookId]});
});

app.get('/counter/:bookId', (req,res) => {
    const {bookId} = req.params;
    const counter = readCounters();
    const count = counter[bookId] || 0;
    res.json({ bookId, count });
});

const port = 3001;
app.listen(port, () => {
    console.log(`counter-service слушает порт ${port}`)
});