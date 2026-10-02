import { useState } from "react";
import StudentForm from "../components/StudentForm";
import Studenttable from "../components/StudentTable";
import StudentShow from "../components/studentshow";

function Studentregistration(){

    const[student,setstudent] = useState({
        name : "",
        email : "",
        age : 0,
        course : ""
    })

   const[students,setstudents]= useState( []
   )
    
    const handlechange = (e)=>{
        const{name,value} = e.target;
        setstudent({
            ...student,
            [name]: value
        })
    }
    const handleadd = (e)=>{
        e.preventDefault();

        const updatedstudents =[...students,{
            id : students.length + 1,
            ...student
        }]

        setstudents(updatedstudents);

        
        setstudent(
            {
                name: "",
                email : "",
                age : 0,
                course : ""
            }
        )
       
        
    }
    const handleview = (student)=>{
        setstudent(student);
        
    }
    
    return(
        <>
        <StudentForm change = {handlechange} addbutton = {handleadd} Student = {student}/>
        <Studenttable StudentList = {students} view = {handleview}/>
        <StudentShow Student = {student}/>
        </>
    )
}
export default Studentregistration;