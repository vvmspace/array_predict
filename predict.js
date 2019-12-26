/**
 * Tensorflow.js Examples for Node.js
 * Script adatapted from 
 * https://github.com/tensorflow/tfjs-examples
 * https://groups.google.com/a/tensorflow.org/forum/#!forum/tfjs
 * @author Loreto Parisi (loretoparisi@gmail.com)
 * @copyright 2018 Loreto Parisi (loretoparisi@gmail.com)
 */
require('@tensorflow/tfjs-node');
var tf = require('@tensorflow/tfjs');
tf.setBackend('tensorflow');


module.exports = (arr1, arr2, from, epochs = 5000) => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  model.compile({
    loss: 'meanSquaredError',
    optimizer: 'sgd'
  });
  // Generate some synthetic data for training. (y = 2x - 1)   
  
//  const base_x = [-1, 0, 1, 2, 3, 4];


//   const base_x = Array.from(Array(10), (_,x) => Math.floor(x * Math.random()));
//   const base_y = base_x.map(x => 4 * x + 1);
//   const from = 2;

  const xs = tf.tensor(arr1);
  const ys = tf.tensor(arr2);


  // Train the model using the data.                                                                                                                                    
  return model.fit(xs, ys, { epochs })
      .then(res => {
        p10 = model.predict(tf.tensor([from]))
        // pExp10 = tf.exp(p10);
        // console.log(`${z}*5.5 - 1 SHOULD BE CLOSE TO 10`);
        return p10.dataSync();
        // console.log("exp(10) SHOULD BE CLOSE TO 22026");
        // console.log(pExp10.dataSync());
      })
      .catch(error => {
        console.error(error);
      })
}