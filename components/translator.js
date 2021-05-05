const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

var translationToAmericanArray = [
      britishOnly,
      americanToBritishSpelling,
      americanToBritishTitles
    ]

var translationToBritishArray = [
      americanOnly,
      americanToBritishSpelling,
      americanToBritishTitles
    ]

//    console.log( Object.entries(britishOnly).length)
//    console.log( Object.entries(americanOnly).length)
//    console.log( Object.entries(americanToBritishTitles).length)
//    console.log( Object.entries(americanToBritishSpelling).length)

      //console.log(myFilter)

class Translator {


  translate(input, locale){

   
    switch(locale){
        case 'american-to-british':

        var myFilter = {}

    for(let j in translationToBritishArray){

          for(const [american, british] of Object.entries(translationToBritishArray[j])){

          myFilter[american] = british 
          
        }

      }

    var sortFilter = {}

    var maxVal = ""

    var tempArray = []

    for (var i in myFilter) {
    tempArray.push([i, myFilter[i]]);
    }

    tempArray = tempArray.sort(function(a, b) {
      return b[0].length - a[0].length;
    });

    for(let i in tempArray){
      sortFilter[tempArray[i][0]] = tempArray[i][1]
    }

  //  console.log(sortFilter)

          var output = this.translateToBritish(input, sortFilter)
          //console.log(output, "HERE")
          return output
          break;

        case 'british-to-american':

        var myFilter = {}

    for(let j in translationToAmericanArray){
        if(translationToAmericanArray[j] == britishOnly){


          for(const [british, american] of Object.entries(britishOnly)){

            myFilter[british] = american 

         
        }
              

        } else {

          for(const [american, british] of Object.entries(translationToAmericanArray[j])){

          myFilter[british] = american 
          
        }

                        

        }


      }
          
         var sortFilter = {}

    var maxVal = ""

    var tempArray = []

    for (var i in myFilter) {
    tempArray.push([i, myFilter[i]]);
    }

    tempArray = tempArray.sort(function(a, b) {
      return b[1].length - a[1].length;
    });

    for(let i in tempArray){
      sortFilter[tempArray[i][0]] = tempArray[i][1]
    }

    
          var output = this.translateToAmerican(input, sortFilter)
          //console.log(output, "HERE")
          return output 
          break;

        default:
          return { error: 'Invalid value for locale field' }
      }
  }

  translateToAmerican(input, filter){

    var output = "";


    var str = ""//testtest

    //console.log(sortFilter)

          for(const [british, american] of Object.entries(filter)){
            
         //   console.log(american, british, input.toLowerCase().includes(british.toLowerCase()))

           if(british == "football"){
             str = "YES"
           }

           var britishTimeRegex = new RegExp('\\b\\d?\\d.\\d\\d\\b', "g")
           var originalTimeValue = input.match(britishTimeRegex)

           if(originalTimeValue != null){
             var finalTimeValue = originalTimeValue.join("").replace(".",":")

           if(output == ""){
                output = input.replace(originalTimeValue.join(""), "<span class=\"highlight\">"+finalTimeValue+"</span>")
              } else {
                output = output.replace(originalTimeValue.join(""), "<span class=\"highlight\">"+finalTimeValue+"</span>")
              }

           }

           

           
            
            if(input.toLowerCase().includes(british.toLowerCase())){

              
              
              var regEx = new RegExp(`\\b${british}\\b`, "ig");
              var originalValue = input.match(regEx)

              if(regEx.test(originalValue)){

                originalValue = originalValue.join("")

                var finalValue = american.split('')

              for(let i in originalValue){
                if(american[i]){
                  if(originalValue[i] !== american[i]){
                  if(originalValue[i] === american[i].toUpperCase()){
                    finalValue[i] = originalValue[i]
                  //  console.log(finalValue[i],
                  // american[i],
                  //  originalValue[i],"deepEqual")

                  } 
                } else if(originalValue[i] === american[i]){
                  finalValue[i] = american[i]
               //   console.log(finalValue[i],
                //    american[i],"not deepEqual")
                }

                }
                
              }
              
              if(output == ""){
                output = input.replace(regEx, "<span class=\"highlight\">"+finalValue.join("")+"</span>")
              } else {
                output = output.replace(regEx, "<span class=\"highlight\">"+finalValue.join("")+"</span>")
              }
              }

              

                        }
               

        }
                  //    console.log(output)
                  //    console.log(str)   


    if(output == ""){
      output = "Everything looks good to me!"
    }

    return {
      "text": input,
      "translation":output
      }


  }

  translateToBritish(input, filter){
    var output = "";

    
          for(const [american, british] of Object.entries(filter)){
         //  console.log(american, british, input.toLowerCase().includes(british.toLowerCase()))

           var americanTimeRegex = new RegExp('\\b\\d?\\d:\\d\\d\\b', "g")
           var originalTimeValue = input.match(americanTimeRegex)

           if(originalTimeValue != null){
             var finalTimeValue = originalTimeValue.join("").replace(":",".")

           if(output == ""){
                output = input.replace(originalTimeValue.join(""), "<span class=\"highlight\">"+finalTimeValue+"</span>")
              } else {
                output = output.replace(originalTimeValue.join(""), "<span class=\"highlight\">"+finalTimeValue+"</span>")
              }

           }
            
            if(input.toLowerCase().includes(american.toLowerCase())){

              
              
              var regEx = new RegExp(`\\b${american}\\b`, "ig");
              var originalValue = input.match(regEx)

            //  console.log(american, regEx, originalValue, "HERE")

              if(originalValue == null){
                if(american.includes(".")){

                  var finalValue = british.split('')
                  var counter = input.toLowerCase().indexOf(american)
                  var subCount = 0
                  var currentValue = []

                  while(counter < input.toLowerCase().indexOf(american) + american.length){

                    currentValue.push(input[counter])

                    if(finalValue[subCount] != undefined){
                  //    console.log(finalValue[subCount],
                //    british[subCount],
                  //  input[counter], currentValue) 

                    if(british[subCount]){
                  if(input[counter] !== british[subCount]){
                  if(input[counter] === british[subCount].toUpperCase()){
                    finalValue[subCount] = input[counter]
               //     console.log(finalValue[subCount],
                 //   british[subCount],
                  //  input[counter],currentValue,"deepEqual")

                  } 
                } else if(input[counter] === british[subCount]){
                  finalValue[subCount] = british[subCount]
           //       console.log(finalValue[subCount],
             //       british[subCount],currentValue,"not deepEqual")
                }

                }

                    }
                        

                counter++
                subCount++


                  }

                  

                  if(output == ""){
                output = input.replace(currentValue.join(""), "<span class=\"highlight\">"+finalValue.join("")+"</span>")
              //                  console.log(output)

              } else {
                output = output.replace(currentValue.join(""), "<span class=\"highlight\">"+finalValue.join("")+"</span>")
              //                  console.log(output)

              }

                }
              } else

              if(regEx.test(originalValue)){

                originalValue = originalValue.join("")

                var finalValue = british.split('')

              for(let i in originalValue){
                if(british[i]){
                  if(originalValue[i] !== british[i]){
                  if(originalValue[i] === british[i].toUpperCase()){
                    finalValue[i] = originalValue[i]
              //      console.log(finalValue[i],
                //    british[i],
                  //  originalValue[i],"deepEqual")

                  } 
                } else if(originalValue[i] === british[i]){
            //      finalValue[i] = british[i]
              //    console.log(finalValue[i],
                //    british[i],"not deepEqual")
                }

                }
                
              }
              
              if(output == ""){
                output = input.replace(regEx, "<span class=\"highlight\">"+finalValue.join("")+"</span>")
              } else {
                output = output.replace(regEx, "<span class=\"highlight\">"+finalValue.join("")+"</span>")
              }
              }

              

                        }
                          }

               //       console.log(output)   

         

    if(output == ""){
      output = "Everything looks good to me!"
    }

    return {
      "text": input,
      "translation":output
      }

  }

}

module.exports = Translator;