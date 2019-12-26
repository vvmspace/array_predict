(async () => {
    const prefict = require('./predict');

    const base_x = Array.from(Array(200), (_,x) => 3 * Math.random());
    const base_y = base_x.map(x => x * x + 1);

    const a = [[0,1], [1,1], [1,0], [0,0]];
    const b = [1,1,1,0];

    const from = [0,0];
    
    console.log();
    console.log('Result: ', await prefict(a, b, from, 2000));
})();
