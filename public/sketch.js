let mediumStories = [];
let newStory = [];
//let newStory1;

// Create a new word2vec method
const wordVectors = ml5.word2vec("wordvecs10000.json", mediumReplacer);

// Find the closest word to 'rainbow'
wordVectors.nearest("rainbow", function(err, results) {
  //console.log(results);
});

function setup() {
  noCanvas();
  for (i=0;i<mediumtext.length;i++) {
    mediumStories[i] = splitTokens(mediumtext[i],[' ','.',',',' — ',"“","?","!","”","(",")","/","...","-"])
  }
  /*console.log(mediumStories);
  console.log("All done!");
  console.log(mediumStories[2][100]);*/
}

function mediumReplacer() {
  /*for (i=0;i<mediumStories[0].length;i++) {
  wordVectors.nearest(mediumStories[0][i], function(err, results) {
    if (results[0]["word"] == null) {
      mediumStories[0][i] = "???";
    } else {
    console.log(mediumStories[0][i]);
    mediumStories[0][i] = results[0]["word"];
  }
    //console.log("Done");
    console.log(mediumStories[0][i]);
  });
}*/

/*wordVectors.nearest(mediumStories[0][0], function(err, results) {
  try {
  mediumStories[0][0] = results[0]["word"];
}
catch(err) {
  mediumStories[0][0] = "???";
}
});*/

/*for (i=0; i<1;i++) {
  //console.log(mediumStories[0][i]);
  wordVectors.nearest(mediumStories[0][i], function(err, results) {
    console.log(results[0]["word"]);
  //console.log(mediumStories[0][i]);
    mediumStories[0][i] = results[0]["word"];
  //console.log(results[0]["word"]);
  //console.log(mediumStories[0][i]);
});
}*/
  //console.log("Model Loaded!");
  //console.log(mediumStories[0]);
  //go through each story
  //go through each list in each story
  for (i=0;i<mediumStories.length;i++) {
    for (j=0;j<mediumStories[i].length;j++){
      //console.log(i,j);
      let word = mediumStories[i][j];
      //console.log(word);
      let newWord;
      wordVectors.nearest(word.toLowerCase(), function(err, results) {
        if (results) {
          newWord = results[0]["word"];
          //console.log(newWord);
          newStory.splice(0,0,newWord);
          //newStory[i].push(newWord);
        }
      });
      //newStory[i][j] = newWord;
    }
  }
  console.log("done!");
}
