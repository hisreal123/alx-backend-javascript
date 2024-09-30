export const getNeighborhoodsList = () => {
  this.sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

  const self = this;
  const addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };

  this.addNeighborhood = add();
};

