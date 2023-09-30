import Student from "./student";
function Trainees(){
    let trainee=[{ 'name':'praveen','rollno':'222'},{ 'name':'prakash','rollno':'332'}];
    return(
        <>
        <h2>Trainees List</h2>
        {/* <table border={1} cellSpacing={0} align="center" width={'300px'}>
            <tr><th>S.No</th><th>Name</th><th>Roll no</th></tr> */}
            {
                trainee.map((ele,i)=>{
                    return(<Student name={ele.name} roll={ele.rollno}/>)
                })
            }
        </>
    )

}
export default Trainees






// import React, { Component } from 'react';
// class StudentTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       students: [
//         { id: 1, name: 'praveen', age: 20, grade: 'A' },
//         { id: 2, name: 'varaprasad', age: 22, grade: 'A+' },
//         { id: 3, name: 'indu', age: 19, grade: 'A+' },
       
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Student Data</h1>
//         <table border={2}>
//           <thead>
//             <tr>
//               <th>SI NO</th>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Grade</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.students.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.age}</td>
//                 <td>{student.grade}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default StudentTable;