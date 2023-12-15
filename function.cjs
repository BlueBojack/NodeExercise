function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const players = ['Joe', 'Caroline', 'Sabrina'];

const drawPromises = players.map(player => {
  return luckyDraw(player)
    .then(res => {
      console.log(res); 
    })
    .catch(err => {
      console.error(err.message); 
    });
}); 

Promise.all(drawPromises)
  .then(() => {
    console.log('All draw promises resolved.');
  })
  .catch(err => {
    console.error('At least one draw promise was rejected:', err.message);
  });
