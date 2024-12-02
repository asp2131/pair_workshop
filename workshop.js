// Sample student data with grades
const studentData = [
  {
    id: 1,
    name: "Alex Kim",
    grades: [
      { assignment: "Project 1", score: 89, weight: 0.3 },
      { assignment: "Midterm", score: 94, weight: 0.3 },
      { assignment: "Final Project", score: 91, weight: 0.4 },
    ],
  },
  {
    id: 2,
    name: "Jordan Smith",
    grades: [
      { assignment: "Project 1", score: 92, weight: 0.3 },
      { assignment: "Midterm", score: 88, weight: 0.3 },
      // Missing Final Project - good for error handling discussion
    ],
  },
  {
    id: 3,
    name: "Taylor Wong",
    grades: [
      { assignment: "Project 1", score: 95, weight: 0.3 },
      { assignment: "Midterm", score: 0, weight: 0.3 }, // Edge case: zero score
      { assignment: "Final Project", score: 98, weight: 0.4 },
    ],
  },
  {
    id: 4,
    name: "Morgan Lee",
    grades: [], // Edge case: no grades yet
  },
];

class GradeCalculator {
  constructor(students) {
    this.students = students;
  }

  /**TODO 1:
   * Create calculateAverage method
   */
  calculateAverage(grades){
    // Code here
  }

  // BUG 1: Doesn't handle missing grades properly
  // BUG 2: Doesn't validate weights sum to 1.0
  // BUG 3: Doesn't handle empty grades array
  calculateWeightedAverage(grades) {
    let weightedSum = 0;
    let weightSum = 0;

    for (let grade of grades) {
      weightedSum += grade.score * grade.weight;
      weightSum += grade.weight;
    }

    return weightedSum; // Bug: Doesn't divide by weightSum
  }

  getStudentGrade(studentId) {
    const student = this.students.find((s) => s.id === studentId);
    return calculateAverage(student.grades);
  }

  // BUG 4: Incorrect letter grade boundaries
  // BUG 5: Doesn't handle invalid numerical grades
  getLetterGrade(numericalGrade) {
    if (numericalGrade >= 90) return "A";
    if (numericalGrade >= 80) return "B";
    if (numericalGrade >= 70) return "C";
    if (numericalGrade >= 60) return "D";
    return "F";
  }

  // Feature to implement during workshop:
  // Add method to generate a grade report for a student
  // Should include: weighted average, letter grade, missing assignments
}

// Test the calculator
const calculator = new GradeCalculator(studentData);

// These test cases will help demonstrate the bugs:
console.log("Alex's grade:", calculator.getStudentGrade(1));
console.log("Jordan's grade:", calculator.getStudentGrade(2)); // Will have issues due to missing final
console.log("Morgan's grade:", calculator.getStudentGrade(4)); // Will error due to empty grades
