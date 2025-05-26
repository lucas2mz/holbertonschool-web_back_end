const fs = require('fs');

function countStudents(path){
  try{
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter(line => line.trim() !== '');

    const headers = lines.shift().split(',');
    
    const firstNameIdx = headers.indexOf('firstname');

    const fieldIdx = headers.indexOf('field');
    const studentsByField = {};

    for (const line of lines) {
      const row = line.split(',');

      if (row.length === headers.length) {
        const firstname = row[firstNameIdx];
        const field = row[fieldIdx];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    }
    const totalStudents = Object.values(studentsByField)
      .reduce((acc, list) => acc + list.length, 0);

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
    
  }catch (err){
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;