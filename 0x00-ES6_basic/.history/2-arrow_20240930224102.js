export const getNeighborhoodsList = () => {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  const add = (new) => {}
  this.addNeighborhood = add(newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
};
