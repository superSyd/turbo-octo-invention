'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      //console.log(req)
      let input = req.body.text;
      let myLocale = req.body.locale;

      var output;

      if(input == ""){
        output = { error: 'No text to translate' }
      } else

      if(input && myLocale){
        output = translator.translate(input, myLocale)

      } else if(!input || !myLocale) {
        output = { error: 'Required field(s) missing' }

      }

      res.send(output)
      
      
    });
};
