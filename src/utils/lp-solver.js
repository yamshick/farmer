// https://www.youtube.com/watch?v=E72DWgKP_1Y
// answer is 8000
// it works
const model = {
  optimize: "profit",
  opType: "max",
  constraints: {
    seeds: { max: 5000 },
    totalPot: { max: 3000 },
    totalCar: { max: 4000 },
  },
  variables: {
    potato: {
      profit: 1.2,
      seeds: 1,
      totalPot: 1,
      totalCar: 0,
      // "seeds": 3000
    },
    carrot: {
      profit: 1.7,
      seeds: 1,
      totalPot: 0,
      totalCar: 1,
      // "seeds": 3000
    },
  },
};

const results = solver.Solve(model);
console.log(results);

export const solveLp = (config) => solver.Solve(config);
