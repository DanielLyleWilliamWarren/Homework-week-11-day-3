const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
return this.journeys.map(journey => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
const result = this.journeys.filter(journey => journey.distance > minDistance);
return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let journeyDistances = this.journeys.map(journey => journey.distance);
  return journeyDistances.reduce((total, journey) => {
    return total + journey;
  })
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return Array.from(new Set(this.getModesOfTransport()))
};


module.exports = Traveller;
