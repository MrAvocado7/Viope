let temperatures = [-3.3, -4.7, -1.3, 3.9, 10.2, 14.6, 17.8, 16.3, 11.5, 6.6, 1.6, -2.0];

function loopTemperatures() {
    for (let i = 0; i < temperatures.length; i++) {
        console.log(`${i + 1}. ${temperatures[i].toFixed(1)}`);
        // "${...}" embed expressions
    }
}