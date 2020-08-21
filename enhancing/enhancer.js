module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement <= 19) {
    return item.enhancement + 1;
  } else if ((item.enhancement = 20)) {
    return item;
  } else {
    null;
  }
}

function fail(item) {
  if (item.durability < 5) {
    return item;
  } else if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement <= 16) {
    return { ...item, durability: item.durability - 10 };
  } else {
    return { ...item, enhancement: item.enhancement - 1 };
  }
}

function repair(item) {
  return item;
}

function get(item) {
  return { ...item };
}

//a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.

// a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.

// a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
