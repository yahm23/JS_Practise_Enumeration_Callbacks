const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(journey => journey.startLocation);
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(journey => journey.endLocation);
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
const filterByTransport = this.journeys.filter(journey => journey.transport == transport);
return filterByTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
const filterDistance = this.journeys.filter(journey => journey.distance > minDistance)
return filterDistance
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
const tots = this.journeys.reduce((runningTotal, journey) =>{
  return runningTotal + journey.distance;
},0)
return tots;
};

Traveller.prototype.getUniqueModesOfTransport = function () {

const transport = this.journeys.map(journey => journey.transport)
// const uniqueVals = function(value,index,self){
//   return self.indexOf(value)===index;
// }
// const transport = this.journeys.transport.filter(uniqueVals)
const uniqueTrans = transport.filter((individualTrans,indexOfIndividualTrain) => transport.indexOf(individualTrans) === indexOfIndividualTrain)
return uniqueTrans
};


module.exports = Traveller;
