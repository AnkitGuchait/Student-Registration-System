
function Studenttable({StudentList,view}){
    
    return(
        <>
        <table>
            <thead>
                <tr>
                <th>Sl NO:</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Course</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   (StudentList.length > 0)?(

                    StudentList.map((student)=>(
                        <tr key={student.id}>
                           <td>{student.id}</td>
                           <td>{student.name}</td>
                           <td>{student.email}</td>
                           <td>{student.age}</td>
                           <td>{student.course}</td>
                           <td>
                            
                            <button onClick={()=>view(student)}>View1</button>
                           </td>
                        </tr>
                    ))


                   ):
                   
                   (
                    <tr>
                        <td><p> no student </p></td>
                    </tr>
                   
                )

                }
            </tbody>
        </table>
        </>
    )
}
export default Studenttable;