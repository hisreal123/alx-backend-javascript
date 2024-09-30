export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

  const self = this;
  this 
  const add = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };

  this.addNeighborhood = add(newNeighborhood);
};
