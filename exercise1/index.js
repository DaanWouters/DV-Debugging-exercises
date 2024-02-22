let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 2000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}