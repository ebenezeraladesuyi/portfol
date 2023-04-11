import React, { useState } from "react";
import styled from "styled-components";
import { FiDownload } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { MdOutlineHomeWork, MdOutlineCastForEducation, MdWorkHistory, MdPermContactCalendar } from "react-icons/md";
import { GiSkills } from "react-icons/gi";


const Header = () => {
    const [show, setShow] = useState(false);
    const toggle = () => {
      setShow(!show);
    };


    return(
        <>

            <Head>

                {
                    show ? 

                    <Drop>

                        <Contain>

                        
                            <Holdd>
                                <Image src="/images/eben.png" />
                            </Holdd>

                            <NavLink to="/"
                                style={({isActive}) => { return {
                                    textDecoration: isActive ? "none" : "none",
                                    borderBottom: isActive ? "2px solid #551a8b" : "white",
                                    width:"85%",
                                }}}><Cate>
                                <Icon>
                                    <MdOutlineHomeWork />
                                </Icon>

                                
                                    <CatText>Home/Profile</CatText>
                                
                            </Cate></NavLink>

                            <NavLink to="/education"
                                style={({isActive}) => { return {
                                    textDecoration: isActive ? "none" : "none",
                                    borderBottom: isActive ? "2px solid #551a8b" : "white",
                                    width:"85%",
                                }}}><Cate>
                                <Icon>
                                    <MdOutlineCastForEducation />
                                </Icon>

                                <CatText>Educational Background</CatText>
                            </Cate></NavLink>

                            <NavLink to="/experience"
                                style={({isActive}) => { return {
                                    textDecoration: isActive ? "none" : "none",
                                    borderBottom: isActive ? "2px solid #551a8b" : "white",
                                    width:"85%",
                                }}}><Cate>
                                <Icon>
                                    <MdWorkHistory />
                                </Icon>

                                <CatText>Experience</CatText>
                            </Cate></NavLink>

                            <NavLink to="/skills"
                                style={({isActive}) => { return {
                                    textDecoration: isActive ? "none" : "none",
                                    borderBottom: isActive ? "2px solid #551a8b" : "white",
                                    width:"85%",
                                }}}><Cate>
                                <Icon>
                                    <GiSkills />
                                </Icon>

                                <CatText>Skills & Jobs</CatText>
                            </Cate></NavLink>

                            <NavLink to="/socials"
                                style={({isActive}) => { return {
                                    textDecoration: isActive ? "none" : "none",
                                    borderBottom: isActive ? "2px solid #551a8b" : "white",
                                    width:"85%",
                                }}}><Cate  style={{border:"none"}}>
                                <Icon>
                                    <MdPermContactCalendar />
                                </Icon>

                                <CatText>Contact & Social Media</CatText>
                            </Cate></NavLink>

                        </Contain>

                    </Drop>

                    : null
                }

                <Name>
                    <Name1>E-BEN
                    {/* <span>(ebenezeraladesuyi@gmail.com)</span> */}
                    </Name1>
                    
                </Name>

                <Download>
                    <Icon>
                        <FiDownload />
                    </Icon>

                    <Text>Download CV</Text>
                </Download>

                <BurgerMenu onClick={toggle}>
                <GiHamburgerMenu />
                </BurgerMenu>

            </Head>
        
        </>
    )
}

export default Header;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

const Image = styled.img`
width: 100%;
`;

const Holdd = styled.div`
width: 80px;
height: 80px;
border: 2px solid #551a8b;
// border: 2px solid white;
border-radius: 50%;
overflow: hidden;
background-color: white;
align-self:center;
margin-right: 25px;
`;

const CatText = styled.div`
font-size: 14px;
color: black;
font-weight: 600;
margin-top: 7px;
`;

const Cate = styled.div`
width: 100%;
height: 80%;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding-bottom: 6px;
border-radius: 10px
`;

const Contain = styled.div`
width: 90%;
height: 90%;
color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
// align-items: center;
margin-left: 30px;
margin-top: 20px;
`;

const Drop = styled.div`
display: none;
z-index: 300;
transition: all 350ms ease-in-out;
overflow-x: scroll;
overflow-y: scroll;

@media screen and (max-width: 768px) {
  display: flex;
width: 300px;
height:510px;
// background-color: #1f1f1f;
background-color: white;
position: absolute;
top: 70px;
right: 20px;
// backdrop-filter: 2px;
border-radius: 10px 0 10px 0;
transition: all 350ms ease-in-out;
// box-shadow: 0 0 2px white;
}

  @media screen and (max-width: 375px) {
    width: 250px;
    height: 510px;
    right: 15px;
transition: all 350ms ease-in-out;
  }

  @media screen and (max-width: 320px) {
    right: 10px;
transition: all 350ms ease-in-out;
  }
`;

const BurgerMenu = styled.div`
display: none;

@media (max-width: 768px) {
  display: block;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 3px;
  margin-right: 20px;
  color:white;
}
`;

const Text = styled.div`
color: white;
font-weight: 600;
`;

const Icon = styled.div`
width:30px;
height: 30px;
border-radius: 50%;
background-color: white;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
`;

const Download = styled.div`
cursor: pointer;
margin-right: 30px;
display: flex;
justify-content: space-around;
align-items: center;
width: 150px;
height: 45px;
border-radius: 20px;
background-color: rgb(37, 35, 35);

:hover{
    background-color: #ee5f38;
    transition: all 350ms ease-in-out;
}

@media screen and (max-width: 768px) {
    display: none;
}
`;

const Name1 = styled.h5`
font-size: 25px;
// color: white;
font-weight: 600;

span{
font-size: 15px;
color: #ee5f38;
font-weight: 600;
}
`;

const Name = styled.div`
margin-left: 20px;
// height: 50px;
`;

const Head = styled.div`
width: 100%;
height: 70px;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
background-color:white;
`;

