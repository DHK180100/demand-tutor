// Mock API for demonstration purposes
export const getUsers = async () => {
  return [
    { id: 1, name: 'John Doe', email: 'john@example.com', gender: 'Male', wallet: '5000', role: 'Tutor' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', gender: 'Female', wallet: '3000', role: 'Student' },
  ];
};

export const addUser = async (user) => {
  console.log('Adding user', user);
  return { success: true };
};

export const editUser = async (userId, user) => {
  console.log('Editing user', userId, user);
  return { success: true };
};

export const deleteUser = async (userId) => {
  console.log('Deleting user', userId);
  return { success: true };
};

export const getTotalIncome = async () => {
  return 1000000;
};

export const getReports = async () => {
  return [
    { id: 1, studentName: 'Student 1', tutorName: 'Tutor 1', report: 'Misconduct', date: '2024-06-01' },
    { id: 2, studentName: 'Student 2', tutorName: 'Tutor 2', report: 'Ineffective teaching', date: '2024-06-02' },
  ];
};

export const getTutors = async () => {
  return [
    { id: 1, name: 'Tutor 1', status: 'Approved' },
    { id: 2, name: 'Tutor 2', status: 'Approved' },
  ];
};

export const deleteTutor = async (tutorId) => {
  console.log('Deleting tutor', tutorId);
  return { success: true };
};

export const getPendingUsers = async () => {
  return [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
  ];
};

export const approveUser = async (userId) => {
  console.log('Approving user', userId);
  return { success: true };
};

export const rejectUser = async (userId) => {
  console.log('Rejecting user', userId);
  return { success: true };
};
