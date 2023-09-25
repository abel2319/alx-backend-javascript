export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(props) {
      return Object.keys(props).length;
    },
  };
}
