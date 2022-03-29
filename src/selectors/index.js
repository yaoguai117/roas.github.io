export const studentSelector = (state) => state?.students;
export const getStudentByID = id => (state) => state?.students && state?.students.find(item => item.id === id);

export const teachersSelector = (state) => state?.teachers;
export const getTeacherByID = id => (state) => state?.teachers && state?.teachers.find(item => item.id === id);

export const problemsSelector = (state) => state?.problems;
export const getProblemByID = id => (state) => state?.problems && state?.problems.find(item => item.id === id);

export const coursesSelector = (state) => state?.courses;
export const getCourseByID = id => (state) => state?.courses && state?.courses.find(item => item.id === id);

export const groupsSelector = (state) => state?.group;
export const getGroupByID = id => (state) => state?.group && state?.group.find(item => item.id === id);

export const tagsSelector = (state) => state?.tags;
export const getTagByID = id => (state) => state?.tags && state?.tags.find(item => item.id === id);

export const deepInfoSelector = (state) => state?.deepInfo;