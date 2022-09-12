const express = require('express');
const router = express.Router();

const Operations = require("../models/operations");
const Strings = require("../models/strings");
const Modules = require("../models/modules");
const Functions = require("../models/functions");
const Data = require("../models/dataStructure");
const Control = require("../models/controlFlow");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
/*GET info page */
/*
router.get('/', function(req, res, next) {
  res.render('info', { title: 'information' });
});
*/
router.get('/operationPage', (req, res) => {
  Operations.find()
      .then(results => {
          console.log(results);
           res.render('operationPage', { info: results,  pageTitle: 'Operations', pageName: 'Operations'});
      })
      .catch(err => console.log(err));
})

router.get('/stringsPage', (req, res) => {
  Strings.find()
      .then(results => {
          console.log(results);
           res.render('stringsPage', { info: results,  pageTitle: 'Strings', pageName: 'Strings'});
      })
      .catch(err => console.log(err));
})

router.get('/modulesPage', (req, res) => {
  Modules.find()
      .then(results => {
          console.log(results);
           res.render('modulesPage', { info: results,  pageTitle: 'Modules', pageName: 'Modules'});
      })
      .catch(err => console.log(err));
})

router.get('/functionsPage', (req, res) => {
  Functions.find()
      .then(results => {
          console.log(results);
           res.render('functionsPage', { info: results,  pageTitle: 'Functions', pageName: 'Functions'});
      })
      .catch(err => console.log(err));
})

router.get('/dataStructurePage', (req, res) => {
  Data.find()
      .then(results => {
          console.log(results);
           res.render('dataStructurePage', { info: results,  pageTitle: 'DataStructure', pageName: 'DataStructure'});
      })
      .catch(err => console.log(err));
})

router.get('/controlFlowPage', (req, res) => {
  Control.find()
      .then(results => {
          console.log(results);
           res.render('controlFlowPage', { info: results,  pageTitle: 'ControlFlow', pageName: 'ControlFlow'});
      })
      .catch(err => console.log(err));
})

module.exports = router;
