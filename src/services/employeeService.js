import User from '../models/user.js';

export const GetAllEmployeesService = async () => {
    const employees = await User.find({ role: 'employee' });
    return employees;
}