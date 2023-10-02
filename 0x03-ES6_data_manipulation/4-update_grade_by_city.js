export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: (newGrades.filter((elt) => elt.studentId === student.id)[0] || { grade: 'N/A' }).grade,
    }));
}
