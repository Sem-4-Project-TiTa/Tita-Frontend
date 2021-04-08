import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import axios from "axios";

import ShowClassroom from "../../components/ShowClassrooms/showclassroom";
import "./Classrooms.css";
import TeacherNav from "../../components/Navbar/teacher/teacherNav";

const TeacherClassrooms = () =>
{
    const [classroom, setClassroom] = useState(null);
    const { user } = useSelector(state => ({...state}));

    const loadClassroom = (user) =>
    {
        axios(
        {
            method: "GET",
            url: `${process.env.REACT_APP_API}/teachers/classrooms/${user.email}`,
        })
        .then((res) => 
        {
            setClassroom(res.data);
        })
        .catch((err) => 
        {
            console.log(err);
        });
    }

    useEffect(() =>
    {
        loadClassroom(user);
    }, []);
    

    return (
        <div class = "row">
            <div class = "col-12">
                <TeacherNav />
                <h3 className="heading">Classrooms</h3>
            </div>
            <div className="cards-row row">

                {classroom && Array.isArray(classroom) ? (classroom.length > 0 ? classroom.map((c) => <ShowClassroom classR = {c} /> ) : <p className="class-loading">You have not created any classroom yet...</p>) : <p className="class-loading">Loading classrooms...</p>}

            </div>
        </div>
    )
}

export default connect()(withRouter(TeacherClassrooms));