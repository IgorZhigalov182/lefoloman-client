export const setVisitHistory = (branch) => {
  const { name, address, id, latitude, longitude } = branch;
  const visitBank = `${name}/${address}/${id}/${latitude}/${longitude}`;
  // const visitBank = `${id}`;

  let visitedBanks = [];

  if (localStorage.getItem('visit_history')) {
    visitedBanks = JSON.parse(localStorage.getItem('visit_history'));
    visitedBanks.push(visitBank);
  } else {
    visitedBanks.push(visitBank);
  }

  localStorage.setItem('visit_history', JSON.stringify(visitedBanks));
};
