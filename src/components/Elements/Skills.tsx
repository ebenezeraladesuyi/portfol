import React from "react";
import styled from "styled-components";


const Skills = () => {


    return(
        <>

            <Body>
                <Hold>
                   
                    <School>
                        
                            <Up1>
                                Technical Skills</Up1>

                                <Up2><span>
                                Language: 
                                </span> TypeScript, JavaScript, HTML, CSS</Up2>

                                <Up2><span>
                                Framework: 
                                </span> ReactJs</Up2>

                                <Up2><span>
                                Software: 
                                </span> Postman, Compass, VS Code</Up2>

                                <Up2><span>
                                Database: 
                                </span> MongoDB</Up2>
                    
                    </School>
                   
                    <School>
                        
                            <Up1>
                                Key Attributes</Up1>

                                <Up2>Teamwork. </Up2>

                                <Up2>Analyse Users Needs. </Up2>

                                <Up2>Creative Thinking. </Up2>

                                <Up2>Good Communication. </Up2>

                                <Up2>Commitment to Continuous Learning. </Up2>

                    
                    </School>
                    
                    <School>
                        
                            <Up1>
                                Tech. Achievements</Up1>

                                <Up2>2nd Position - KoraPay West Africa Hackathon 2023</Up2>

                    </School>
                    
                    <School>
                        
                            <Up1>
                                Projects Links
                            </Up1>

                                <Up3 href="https://lyfecare@netlify.app" style={{fontSize:"13px"}}>LyfeCare Health App</Up3>


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

const Up3 = styled.a`
font-size: 16px;
color: white;
`;

const Up2 = styled.div`
font-size: 16px;
color: white;
margin-bottom: 6px;

@media screen and (max-width: 375px) {
    font-size: 13px;
}
`;

const Up1 = styled.div`
font-size: 15px;
display: flex;
align-items: center;
margin-bottom: 10px;
margin-top: 10px;

span{
    margin-right: 10px;
    font-size: 21px;
}
`;

const School = styled.div`
// width: 80%;
// height: 70px;
margin-top: 10px;
overflow: hidden;
`;

const Hold = styled.div`
width: 85%;
color: yellow;
overflow: hidden;
`;

const Body = styled.div`
width: 100%;
height: 100%;
// background-color: rgba(255, 255, 255, 0.771);
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;

