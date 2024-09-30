export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

  const self = this;

  const add = (newNeighborhood) => {</>
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
