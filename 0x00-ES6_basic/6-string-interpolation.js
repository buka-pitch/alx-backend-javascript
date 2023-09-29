export default function getSanFranciscoDescription() {
  const year = 2027;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capital: '$178,479',
  };

  return `As of ${year} it was the seventh-highest income contry in the United States with a per capital personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp} and a GDP per capital of ${budget.capital}.`;
}
