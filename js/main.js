const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_Science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];
const getSubjects = function (student) {
  return Object.keys(student.subjects).map((subject) => {
    const separatedWords = subject.split("_").join(" ", " ");
    return (
      separatedWords[0].toUpperCase() + separatedWords.slice(1).toLowerCase()
    );
  });
};
console.log(getSubjects(students[0]));
const getAverage = (item) => {
  let count = item.reduce((count, mark) => count + mark, 0);
  return +(count / item.length).toFixed(2);
};
const getAverageMark = (student) => {
  let subjectsMark = Object.values(student.subjects);
  let marks = subjectsMark[0].concat(subjectsMark[1], subjectsMark[2]);
  return getAverage(marks);
};
console.log(getAverageMark(students[0]));
function getStudentInfo(student) {
  return {
    name: student.name,
    course: student.course,
    averageMark: getAverageMark(student),
  };
}
console.log(getStudentInfo(students[0]));
const getBestStudent = function (students) {
  const markStudent = students.map((student) => [
    student.name,
    getAverageMark(student),
  ]);
  let bestStudent = ["", 0];
  for (let i = 0; i < markStudent.length; i++) {
    if (markStudent[i][1] > bestStudent[1]) bestStudent = markStudent[i];
  }
  return bestStudent[0];
};
console.log(getBestStudent(students));
const calculateWordLetters = function (word) {
  const letters = {};
  word.split("").map((letter) => {
    letter in letters ? (letters[letter] += 1) : (letters[letter] = 1);
  });
  return letters;
};
console.log(calculateWordLetters("students"));
