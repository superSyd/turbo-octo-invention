const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

let translator = new Translator();

suite('Unit Tests', () => {
  //Translate Mangoes are my favorite fruit. to British English

  var output1 = {
  "text": 'Mangoes are my favorite fruit.',
  "translation": 'Mangoes are my <span class=\"highlight\">favourite</span> fruit.'
}

   test("Translate Mangoes are my favorite fruit. to British English", ()=>{
      assert.deepEqual(translator.translate("Mangoes are my favorite fruit.", "american-to-british"), output1,'valid translation')
    });
//Translate I ate yogurt for breakfast. to British English

var output2 = {"text":"I ate yogurt for breakfast.","translation":"I ate <span class=\"highlight\">yoghurt</span> for breakfast."}

test("Translate I ate yogurt for breakfast. to British English", ()=>{
      assert.deepEqual(translator.translate("I ate yogurt for breakfast.", "american-to-british"), output2,'valid translation')
    });
//Translate We had a party at my friend's condo. to British English

var output3 = {"text":"We had a party at my friend's condo.","translation":"We had a party at my friend's <span class=\"highlight\">flat</span>."}

test("Translate We had a party at my friend's condo. to British English", ()=>{
      assert.deepEqual(translator.translate("We had a party at my friend's condo.", "american-to-british"), output3,'valid translation')
    });
//Translate Can you toss this in the trashcan for me? to British English
var output4 = {"text":"Can you toss this in the trashcan for me?","translation":"Can you toss this in the <span class=\"highlight\">bin</span> for me?"}

test("Translate Can you toss this in the trashcan for me? to British English", ()=>{
      assert.deepEqual(translator.translate("Can you toss this in the trashcan for me?", "american-to-british"), output4,'valid translation')
    });
//Translate The parking lot was full. to British English
var output5 = {"text":"The parking lot was full.","translation":"The <span class=\"highlight\">car park</span> was full."}

test("Translate The parking lot was full. to British English", ()=>{
      assert.deepEqual(translator.translate("The parking lot was full.", "american-to-british"), output5,'valid translation')
    });
//Translate Like a high tech Rube Goldberg machine. to British English
var output6 = {"text":"Like a high tech Rube Goldberg machine.","translation":"Like a high tech <span class=\"highlight\">Heath Robinson device</span>."}

test("Translate Like a high tech Rube Goldberg machine. to British English", ()=>{
      assert.deepEqual(translator.translate("Like a high tech Rube Goldberg machine.", "american-to-british"), output6,'valid translation')
    });
//Translate To play hooky means to skip class or work. to British English

var output7 = {"text":"To play hooky means to skip class or work.","translation":"To <span class=\"highlight\">bunk off</span> means to skip class or work."}

test("Translate To play hooky means to skip class or work. to British English", ()=>{
      assert.deepEqual(translator.translate("To play hooky means to skip class or work.", "american-to-british"), output7,'valid translation')
    });

//Translate No Mr. Bond, I expect you to die. to British English
var output8 = {"text":"No Mr. Bond, I expect you to die.","translation":"No <span class=\"highlight\">Mr</span> Bond, I expect you to die."}

test("Translate No Mr. Bond, I expect you to die. to British English", ()=>{
      assert.deepEqual(translator.translate("No Mr. Bond, I expect you to die.", "american-to-british"), output8,'valid translation')
    });
//Translate Dr. Grosh will see you now. to British English
var output9 = {"text":"Dr. Grosh will see you now.","translation":"<span class=\"highlight\">Dr</span> Grosh will see you now."}

test("Translate Dr. Grosh will see you now. to British English", ()=>{
      assert.deepEqual(translator.translate("Dr. Grosh will see you now.", "american-to-british"), output9,'valid translation')
    });
//Translate Lunch is at 12:15 today. to British English
var output10 = {"text":"Lunch is at 12:15 today.","translation":"Lunch is at <span class=\"highlight\">12.15</span> today."}

test("Translate Lunch is at 12:15 today. to British English", ()=>{
      assert.deepEqual(translator.translate("Lunch is at 12:15 today.", "american-to-british"), output10,'valid translation')
    });
//Translate We watched the footie match for a while. to American English
var output11 = {"text":"We watched the footie match for a while.","translation":"We watched the <span class=\"highlight\">soccer</span> match for a while."}

test("Translate We watched the footie match for a while. to American English", ()=>{
      assert.deepEqual(translator.translate("We watched the footie match for a while.", "british-to-american"), output11,'valid translation')
    });
//Translate Paracetamol takes up to an hour to work. to American English
var output12 = {"text":"Paracetamol takes up to an hour to work.","translation":"<span class=\"highlight\">Tylenol</span> takes up to an hour to work."}

test("Translate Paracetamol takes up to an hour to work. to American English", ()=>{
      assert.deepEqual(translator.translate("Paracetamol takes up to an hour to work.", "british-to-american"), output12,'valid translation')
    });
//Translate First, caramelise the onions. to American English
var output13 = {"text":"caramelise the onions.","translation":"<span class=\"highlight\">caramelize</span> the onions."}

test("Translate First, caramelise the onions. to American English", ()=>{
      assert.deepEqual(translator.translate("caramelise the onions.", "british-to-american"), output13,'valid translation')
    });
//Translate I spent the bank holiday at the funfair. to American English
var output14 = {"text":"I spent the bank holiday at the funfair.","translation":"I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>."}

test("Translate I spent the bank holiday at the funfair. to American English", ()=>{
      assert.deepEqual(translator.translate("I spent the bank holiday at the funfair.", "british-to-american"), output14,'valid translation')
    });
//Translate I had a bicky then went to the chippy. to American English
var output15 = {"text":"I had a bicky then went to the chippy.","translation":"I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>."}

test("Translate I had a bicky then went to the chippy. to American English", ()=>{
      assert.deepEqual(translator.translate("I had a bicky then went to the chippy.", "british-to-american"), output15,'valid translation')
    });
//Translate I've just got bits and bobs in my bum bag. to American English
var output16 = {"text":"I've just got bits and bobs in my bum bag.","translation":"I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>."}

test("Translate I've just got bits and bobs in my bum bag. to American English", ()=>{
      assert.deepEqual(translator.translate("I've just got bits and bobs in my bum bag.", "british-to-american"), output16,'valid translation')
    });
//Translate The car boot sale at Boxted Airfield was called off. to American English
var output17 = {"text":"The car boot sale at Boxted Airfield was called off.","translation":"The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off."}

test("Translate The car boot sale at Boxted Airfield was called off. to American English", ()=>{
      assert.deepEqual(translator.translate("The car boot sale at Boxted Airfield was called off.", "british-to-american"), output17,'valid translation')
    });
//Translate Have you met Mrs Kalyani? to American English
var output18 = {"text":"Have you met Mrs Kalyani?","translation":"Have you met <span class=\"highlight\">Mrs.</span> Kalyani?"}

test("Translate Have you met Mrs Kalyani? to American English", ()=>{
      assert.deepEqual(translator.translate("Have you met Mrs Kalyani?", "british-to-american"), output18,'valid translation')
    });
//Translate Prof Joyner of King's College, London. to American English
var output19 = {"text":"Prof Joyner of King's College, London.","translation":"<span class=\"highlight\">Prof.</span> Joyner of King's College, London."}

test("Translate Prof Joyner of King's College, London. to American English", ()=>{
      assert.deepEqual(translator.translate("Prof Joyner of King's College, London.", "british-to-american"), output19,'valid translation')
    });
//Translate Tea time is usually around 4 or 4.30. to American English
var output20 = {"text":"Tea time is usually around 4 or 4.30.","translation":"Tea time is usually around 4 or <span class=\"highlight\">4:30</span>."}

test("Translate Tea time is usually around 4 or 4.30. to American English", ()=>{
      assert.deepEqual(translator.translate("Tea time is usually around 4 or 4.30.", "british-to-american"), output20,'valid translation')
    });
//Highlight translation in Mangoes are my favorite fruit.

test("Highlight translation in Mangoes are my favorite fruit.", ()=>{
      assert.deepEqual(translator.translate("Mangoes are my favorite fruit.", "american-to-british").translation, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.",'highlighted translation')
    });
//Highlight translation in I ate yogurt for breakfast.
test("Highlight translation in I ate yogurt for breakfast.", ()=>{

      assert.deepEqual(translator.translate("I ate yogurt for breakfast.", "american-to-british").translation, "I ate <span class=\"highlight\">yoghurt</span> for breakfast.",'highlighted translation')
    });
//Highlight translation in We watched the footie match for a while.

test("Highlight translation in We watched the footie match for a while.", ()=>{


      assert.deepEqual(translator.translate("We watched the footie match for a while.", "british-to-american").translation, "We watched the <span class=\"highlight\">soccer</span> match for a while.",'highlighted translation')
    });
//Highlight translation in Paracetamol takes up to an hour to work.
test("Highlight translation in Paracetamol takes up to an hour to work.", ()=>{

      assert.deepEqual(translator.translate("Paracetamol takes up to an hour to work.", "british-to-american").translation, "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.",'highlighted translation')
    });


});
