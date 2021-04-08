
document.getElementById("button").addEventListener("click", async function() {
  const rnn = ml5.charRNN('models/CRTranscript/');
  await rnn.generate({ seed: 'Matt', length: 400}, (err, results) => {
    let text = results;
    document.getElementById('text-generator').innerHTML=text.sample
  });
});

