import React from "react";
import styled from "styled-components";
import { GrTechnology } from "react-icons/gr";
import { MdAttribution } from "react-icons/md";


const Skills = () => {


    return(
        <>

            <Body>
                <Hold>
                   
                    <School>
                        
                            <Up1>
                                {/* <span>
                                <GrTechnology/>
                                </span> */}
                                Technical Skills</Up1>

                                <Up2><span>
                                Language: 
                                </span>TypeScript, JavaScript, HTML, CSS</Up2>

                                <Up2><span>
                                Framework: 
                                </span>ReactJs</Up2>

                                <Up2><span>
                                Software: 
                                </span>Postman, Compass, VS Code</Up2>

                                <Up2><span>
                                Database: 
                                </span>MongoDB</Up2>
                    
                    </School>
                   
                    <School>
                        
                            <Up1>
                                {/* <span>
                                <MdAttribution/>
                                </span> */}
                                Key Attributes</Up1>

                                <Up2>Teamwork</Up2>

                                <Up2>Analyse Users Needs</Up2>

                                <Up2>Creative Thinking</Up2>

                                <Up2>Good Communication</Up2>

                                <Up2>Commitment to Continuous Learning</Up2>

                    
                    </School>
                    
                    <School>
                        
                            <Up1>
                                {/* <span>
                                <MdAttribution/>
                                </span> */}
                                Tech. Achievements</Up1>

                                <Up2>2nd Position - KoraPay West Africa Hackathon 2023</Up2>

                    </School>
                    
                    <School>
                        
                            <Up1>
                                Projects Links</Up1>

                                <Up2>lifecareforall.netlify.app</Up2>

                                    <Up2>lifecareforall.netlify.app</Up2>

                    </School>


                </Hold>

            </Body>
        
        </>
    )
}

export default Skills;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

const Up2 = styled.li`
font-size: 16px;
color: yellow;
`;

const Up1 = styled.div`
font-size: 18px;
display: flex;
align-items: center;

span{
    margin-right: 10px;
    font-size: 21px;
}
`;

const School = styled.div`
width: 80%;
// height: 70px;
margin-top: 10px;
`;

const Hold = styled.div`
width: 85%;
color: white;
`;

const Body = styled.div`
width: 100%;
height: 100%;
// background-color: rgba(255, 255, 255, 0.771);
display: flex;
justify-content: center;
align-items: center;
`;

