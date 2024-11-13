const columns = [
  {name: "NAME", uid: "name"},
  {name: "DESCRIPTION", uid: "description"},
  {name: "STATUS", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    description: "Wash dishes",
    status: "ongoing",
    age: "29",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    description: "DSA",
    status: "completed",
    age: "25",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    description: "Senior Developer",
    status: "cancelled",
    age: "22",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    description: "Wash Car",
    status: "ongoing",
    age: "28",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    description: "Learn Next",
    status: "uninitiated",
    age: "24",
    email: "kristen.cooper@example.com",
  },
];

export {columns, users};