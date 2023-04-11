import React from "react";
import styled from "styled-components";
import { MdOutlineHomeWork, MdOutlineCastForEducation, MdWorkHistory, MdPermContactCalendar } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { NavLink } from "react-router-dom";


const Footer = () => {


    return(
        <>

            <Body>

            <NavLink to="/"
                    style={({isActive}) => { return {
                        textDecoration: isActive ? "none" : "none",
                        borderBottom: isActive ? "2px solid yellow" : "white",
                        width:"19%",
                    }}}><Cate>
                    <Icon>
                        <MdOutlineHomeWork />
                    </Icon>

                    
                        <CatText>Home/Profile</CatText>
                    
                </Cate></NavLink>

                <NavLink to="/education"
                    style={({isActive}) => { return {
                        textDecoration: isActive ? "none" : "none",
                        borderBottom: isActive ? "2px solid yellow" : "white",
                        width:"19%",
                    }}}><Cate>
                    <Icon>
                        <MdOutlineCastForEducation />
                    </Icon>

                    <CatText>Educational Background</CatText>
                </Cate></NavLink>

                <NavLink to="/experience"
                    style={({isActive}) => { return {
                        textDecoration: isActive ? "none" : "none",
                        borderBottom: isActive ? "2px solid yellow" : "white",
                        width:"19%",
                    }}}><Cate>
                    <Icon>
                        <MdWorkHistory />
                    </Icon>

                    <CatText>Experience</CatText>
                </Cate></NavLink>

                <NavLink to="/skills"
                    style={({isActive}) => { return {
                        textDecoration: isActive ? "none" : "none",
                        borderBottom: isActive ? "2px solid yellow" : "white",
                        width:"19%",
                    }}}><Cate>
                    <Icon>
                        <GiSkills />
                    </Icon>

                    <CatText>Skills & Jobs</CatText>
                </Cate></NavLink>

                <NavLink to="/socials"
                    style={({isActive}) => { return {
                        textDecoration: isActive ? "none" : "none",
                        borderBottom: isActive ? "2px solid yellow" : "white",
                        width:"19%",
                    }}}><Cate  style={{border:"none"}}>
                    <Icon>
                        <MdPermContactCalendar />
                    </Icon>

                    <CatText>Contact & Social Media</CatText>
                </Cate></NavLink>

            </Body>
        
        </>
    )
}

export default Footer;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

const CatText = styled.div`
font-size: 17px;
color: white;
// font-weight: 600;
margin-top: 7px;
text-align: center;
`;

const Icon = styled.div`
width: 50px;
height: 50px;
background-color: white;
// color: white;
border-radius: 50%;
font-size: 25px;
display: flex;
justify-content: center;
align-items: center;
// color: #ee5f38;
`;

const Cate = styled.div`
width: 100%;
height: 80%;
// border: none;
border-right: 1px solid yellow;
// border-right: 1px solid #ee5f38;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding-bottom: 6px;
border-radius: 10px
`;

const Body = styled.div`
width: 100%;
height: 140px;
position: fixed;
display: flex;
justify-content: space-between;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`;

