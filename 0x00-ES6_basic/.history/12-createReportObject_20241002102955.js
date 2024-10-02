export default function createReportObject(employeesList) {
    const report = {
        ...employeesList,
        numberOfEmployees: employeesList.allEmployees.length,
        allEmployees: employeesList.allEmployees,
        numberOfDepartments: employeesList.departments.length,
        allDepartments: employeesList.departments,
    }
 }
