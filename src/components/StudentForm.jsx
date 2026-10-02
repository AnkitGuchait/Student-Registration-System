function StudentForm({Student,change,addbutton}){
    return(
        <>
    <div className="container bg-light">
        <form onSubmit={addbutton} className="bg-warning">
            <input type="text" name="name" value={Student.name} onChange={change} placeholder="name here"/>
            <input type="email" name="email" value={Student.email} onChange={change} placeholder="email here"/>
            <input type="number" name="age" value={Student.age} onChange={change} placeholder="age here"/>
            <input type="text" name="course" value={Student.course} onChange={change} placeholder="course here"/>
            <button type="submit">Add</button>
        </form>
    </div>
        
        </>
    )
}
export default StudentForm;