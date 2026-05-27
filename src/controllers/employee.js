import { GetAllEmployeesService } from '../services/employeeService.js';

export const GetAllEmployeesController = async (req, res) => {
    try {
        const employees = await GetAllEmployeesService();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }       
}