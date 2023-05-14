let inBrowser = false;

if (typeof window === "undefined") {
  inBrowser = false;
} else {
  inBrowser = true;
}

var input = {
  1: {
    id: 1,
    name: "John",
    children: [
      { id: 2, name: "Sally" },
      { id: 3, name: "Mark", children: [{ id: 4, name: "Harry" }] },
    ],
  },
  5: {
    id: 5,
    name: "Mike",
    children: [{ id: 6, name: "Peter" }],
  },
};

const normalizedInfo = {};

for (const parentKey in input) {
  const parent = input[parentKey];
  const parentInfo = {
    id: parent.id,
    name: parent.name,
    children: [],
  };

  normalizedInfo[parent.id] = parentInfo;

  if (parent.children) {
    for (const child of parent.children) {
      const childInfo = {
        id: child.id,
        name: child.name,
        children: [],
      };

      normalizedInfo[child.id] = childInfo;
      parentInfo.children.push(child.id);

      if (child.children) {
        for (const grandchild of child.children) {
          const grandchildInfo = {
            id: grandchild.id,
            name: grandchild.name,
            children: [],
          };

          normalizedInfo[grandchild.id] = grandchildInfo;
          childInfo.children.push(grandchild.id);
        }
      }
    }
  }
}

console.log(normalizedInfo);
if (inBrowser) {
  document.write('Answer Printed in Console');
}
