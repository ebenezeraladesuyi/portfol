import React from "react";
import styled from "styled-components";
import { MdOutlineHomeWork, MdOutlineCastForEducation, MdWorkHistory, MdPermContactCalendar } from "react-icons/md";
import { GiSkills } from "react-icons/gi";


const Footer = () => {


    return(
        <>

            <Body>

                <Cate>
                    <Icon>
                        <MdOutlineHomeWork />
                    </Icon>

                    <CatText>Home/Profile</CatText>
                </Cate>

                <Cate>
                    <Icon>
                        <MdOutlineCastForEducation />
                    </Icon>

                    <CatText>Eductional Background</CatText>
                </Cate>

                <Cate>
                    <Icon>
                        <MdWorkHistory />
                    </Icon>

                    <CatText>Experience</CatText>
                </Cate>

                <Cate>
                    <Icon>
                        <GiSkills />
                    </Icon>

                    <CatText>Skills & Jobs</CatText>
                </Cate>

                <Cate  style={{border:"none"}}>
                    <Icon>
                        <MdPermContactCalendar />
                    </Icon>

                    <CatText>Contact $ Social Media</CatText>
                </Cate>

            </Body>
        
        </>
    )
}

export default Footer;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

const CatText = styled.div`
font-size: 17px;
color: white;
// font-weight: 600;
margin-top: 7px;
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
width: 19%;
height: 80%;
border: none;
border-right: 1px solid #ee5f38;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Body = styled.div`
width: 100%;
height: 140px;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
`;

