(async () => {
    const prefict = require('./predict');

    const base_x = Array.from(Array(200), (_,x) => 3 * Math.random());
    const base_y = base_x.map(x => x * x + 1);

    const from = 2;
    
    console.log();
    console.log('Result: ', await prefict(base_x, base_y, from, 2000));
})();
