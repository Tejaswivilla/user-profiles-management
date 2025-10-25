
let users = [
  {
    id: 1,
    firstName: "Dave",
    lastName: "Richards",
    email: "dave@mail.com",
    phone: "+91 8332883854",
    yearOfBirth: "1990",
    gender: "Male",
    address: "123 Main Street",
    pincode: "560001",
    state: "Karnataka",
    country: "India",
    alternatePhone: "+91 9876543210",
    profileImage: null,
    education: {
      school: "Lincoln College",
      degree: "Bachelors in Technology",
      course: "Computer science engineering",
      yearOfCompletion: "2012",
      grade: "A+"
    },
    skills: ["JavaScript", "React", "Node.js"],
    projects: ["E-commerce Website", "Social Media App"],
    experience: [
      {
        domain: "Technology",
        subdomain: "MERN Stack",
        experience: "3 years"
      }
    ],
    linkedinUrl: "linkedin.com/in/mrmbean",
    resumeFile: "myresume.pdf"
  }
];


export const getUsers = () => {
  return users;
};

export const getUserById = (id) => {
  return users.find(user => user.id === parseInt(id));
};

export const addUser = (user) => {
  const newUser = {
    ...user,
    id: users.length + 1,
    education: {
      school: "",
      degree: "",
      course: "",
      yearOfCompletion: "",
      grade: ""
    },
    skills: [],
    projects: [],
    experience: [],
    linkedinUrl: "",
    resumeFile: null
  };
  users.push(newUser);
  return newUser;
};

export const updateUser = (id, updatedData) => {
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedData };
    return users[index];
  }
  return null;
};

export const deleteUser = (id) => {
  users = users.filter(user => user.id !== parseInt(id));
};
