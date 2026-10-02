function StudentShow({Student}){
    return(
        <>
        <h1>Student Here</h1>
        <p>{Student.id}</p>
        <p>{Student.name}</p>
        <p>{Student.age}</p>
        <p>{Student.email}</p>
        </>
    )
}
export default StudentShow;