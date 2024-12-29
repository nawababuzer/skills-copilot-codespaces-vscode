// Create web server
// Load the comments.json file
// Create a route for the comments
// Create a route for the comments/:id
// Create a route for the comments/:id/:property
// Create a route for the comments/:id/:property/:index
// Create a route for the comments/:id/:property/:index/:subProperty
// Create a route for the comments/:id/:property/:index/:subProperty/:subIndex
// Start the server
// Test the server

// Load the modules
const express = require('express');
const fs = require('fs');

// Create the web server
const app = express();

// Load the comments.json file
let comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Create a route for the comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a route for the comments/:id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === id);
    if (!comment) {
        res.status(404).json({ message: 'Comment not found' });
    } else {
        res.json(comment);
    }
});

// Create a route for the comments/:id/:property
app.get('/comments/:id/:property', (req, res) => {
    const id = req.params.id;
    const property = req.params.property;
    const comment = comments.find(comment => comment.id === id);
    if (!comment) {
        res.status(404).json({ message: 'Comment not found' });
    } else {
        res.json(comment[property]);
    }
});

// Create a route for the comments/:id/:property/:index
app.get('/comments/:id/:property/:index', (req, res) => {
    const id = req.params.id;
    const property = req.params.property;
    const index = parseInt(req.params.index);
    const comment = comments.find(comment => comment.id === id);
    if (!comment) {
        res.status(404).json({ message: 'Comment not found' });
    } else {
        res.json(comment[property][index]);
    }
});

// Create a route for the comments/:id/:property/:index/:subProperty
app.get('/comments/:id/:property/:index/:subProperty', (req, res) => {
    const id = req.params