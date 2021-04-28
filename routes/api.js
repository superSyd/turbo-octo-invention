'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      let coordinate = req.body.coordinate
      let value = req.body.value
      let puzzle = req.body.puzzle

      var conflict = []

      if(coordinate && value && puzzle){
        let myCoordinate = coordinate.split('');

        let outputRowPlacement = solver.checkRowPlacement(puzzle,myCoordinate[0],myCoordinate[1],value)

        if(outputRowPlacement == "conflict"){
          conflict.push("row")
        } else if(outputRowPlacement == "exists"){
          return res.json({valid: true})
        } else if(outputRowPlacement != true){
          return res.send(outputRowPlacement)
        }


        let outputColPlacement = solver.checkColPlacement(puzzle,myCoordinate[0],myCoordinate[1],value)

        if(outputColPlacement == "conflict"){
          conflict.push("column")
        } else if(outputColPlacement == "exists"){
          return res.json({valid: true})
        } else if(outputColPlacement != true){
          return res.send(outputColPlacement)
        }


        let outputRegionPlacement = solver.checkRegionPlacement(puzzle,myCoordinate[0],myCoordinate[1],value)

        if(outputRegionPlacement == "conflict"){
          conflict.push("region")
        } else if(outputRegionPlacement == "exists"){
          return res.json({valid: true})
        } else if(outputRegionPlacement != true){
          return res.send(outputRegionPlacement)
        }
        
      } else {
        return res.json({ 
          error: "Required field(s) missing"
           })
      }



      if(conflict.length > 0){
        return res.json({
          "valid": false, 
          "conflict": conflict 
        })
      } else if(conflict.length == 0){
        return res.json({
          "valid": true
        })
      }

    });
    
  app.route('/api/solve')
    .post((req, res) => {
      let puzzle = req.body.puzzle
      if(puzzle){
        let output = solver.solve(puzzle)

      return res.send(output)

      } else{
        return res.json({
           error: 'Required field missing' 
           })
      }
      

    });
};
