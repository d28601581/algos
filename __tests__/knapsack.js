const { knapsack } = require('../challenges/knapsack.js');

describe('knapsack test', () => {
  let items;
  let weight;
  let output;
  it('handles knapsack of unique values', () => {
    items = [
      { weight: 1, value: 3 },
      { weight: 2, value: 4 },
      { weight: 3, value: 5 },
    ];
    weight = 3;
    output = 7;
    expect(knapsack(items, weight)).toEqual(output);

    items = [
      { weight: 1, value: 3 },
      { weight: 2, value: 4 },
      { weight: 3, value: 5 },
    ];
    weight = 4;
    output = 8;
    expect(knapsack(items, weight)).toEqual(output);

    items = [
      { weight: 1, value: 3 },
      { weight: 2, value: 4 },
      { weight: 3, value: 5 },
    ];
    weight = 5;
    output = 9;
    expect(knapsack(items, weight)).toEqual(output);
  });

  it('doesn\'t count items twice - checking value', () => {
    items = [
      { weight: 1, value: 3 },
      { weight: 1, value: 4 },
      { weight: 1, value: 5 },
    ];
    weight = 1;
    output = 5;
    expect(knapsack(items, weight)).toEqual(output);

    items = [
      { weight: 1, value: 3 },
      { weight: 1, value: 4 },
      { weight: 1, value: 5 },
    ];
    weight = 2;
    output = 9;
    expect(knapsack(items, weight)).toEqual(output);

    items = [
      { weight: 1, value: 3 },
      { weight: 1, value: 4 },
      { weight: 1, value: 5 },
    ];
    weight = 3;
    output = 12;
    expect(knapsack(items, weight)).toEqual(output);
  });

  it('doesn\'t count items twice - checking weight', () => {
    items = [
      { weight: 3, value: 7 },
      { weight: 5, value: 7 },
      { weight: 7, value: 7 },
    ];
    weight = 7;
    output = 7;
    expect(knapsack(items, weight)).toEqual(output);

    items = [
      { weight: 3, value: 7 },
      { weight: 5, value: 7 },
      { weight: 7, value: 7 },
    ];
    weight = 6;
    output = 7;
    expect(knapsack(items, weight)).toEqual(output);

    items = [
      { weight: 3, value: 7 },
      { weight: 5, value: 7 },
      { weight: 7, value: 7 },
    ];
    weight = 4;
    output = 7;
    expect(knapsack(items, weight)).toEqual(output);
  });

  it('doesn\'t count items twice - checking identical items', () => {
    items = [
      { weight: 1, value: 1 },
      { weight: 1, value: 1 },
      { weight: 1, value: 1 },
    ];
    weight = 7;
    output = 3;
    expect(knapsack(items, weight)).toEqual(output);

    items = [
      { weight: 1, value: 1 },
      { weight: 1, value: 1 },
      { weight: 1, value: 1 },
    ];
    weight = 4;
    output = 3;
    expect(knapsack(items, weight)).toEqual(output);

    items = [
      { weight: 1, value: 1 },
      { weight: 1, value: 1 },
      { weight: 1, value: 1 },
    ];
    weight = 2;
    output = 2;
    expect(knapsack(items, weight)).toEqual(output);
  });
});