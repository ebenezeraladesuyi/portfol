import React from "react";
import styled from "styled-components";
import { VscOrganization } from "react-icons/vsc";
import { RiOrganizationChart } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";


const Experience = () => {


    return(
        <>

            <Body>
                <Hold>
                   
                    <School>
                        <Up>
                            <Up1><span>
                                <RiOrganizationChart/>
                                </span>CodeLab</Up1>

                                <Up2>2022 - Present</Up2>
                        </Up>

                        <Up>
                            <Down><span>
                                <BsFillPersonFill/>
                                </span>Front-End Developer</Down>
                        </Up>
                        
                        <Up>
                            <Down><span>
                                <VscOrganization/>
                                </span>Worked as a team with colleagues in developing an emergency saving/health app, and delivered in time</Down>
                        </Up>
                    </School>
                   
                   <School>
                       <Up>
                           <Up1><span>
                               <RiOrganizationChart/>
                               </span>CodeLab</Up1>

                               <Up2>2022 - Present</Up2>
                       </Up>

                       <Up>
                           <Down><span>
                               <BsFillPersonFill/>
                               </span>Full Stack Engineer</Down>
                       </Up>
                       
                       <Up>
                           <Down><span>
                               <VscOrganization/>
                               </span>Developed the frontend and backend of an advanced Todo app (Microsoft Todo related)</Down>
                       </Up>
                   </School>
                   
                   <School>
                       <Up>
                           <Up1><span>
                               <RiOrganizationChart/>
                               </span>CodeLab</Up1>

                               <Up2>2022 - Present</Up2>
                       </Up>

                       <Up>
                           <Down><span>
                               <BsFillPersonFill/>
                               </span>Front-End Developer</Down>
                       </Up>
                       
                       <Up>
                           <Down><span>
                               <VscOrganization/>
                               </span>Worked as a team with other colleagues in developing an Estate mamagement app.</Down>
                       </Up>
                   </School>
                   
                   <School>
                       <Up>
                           <Up1><span>
                               <RiOrganizationChart/>
                               </span>All Time Best College</Up1>

                               <Up2>2018 - 2020</Up2>
                       </Up>

                       <Up>
                           <Down><span>
                               <BsFillPersonFill/>
                               </span>English Studies Teacher</Down>
                       </Up>
                       
                       <Up>
                           <Down><span>
                               <VscOrganization/>
                               </span>Worked with the management and students in ensuring a proper day-to-day activity.</Down>
                       </Up>
                   </School>




                </Hold>

            </Body>
        
        </>
    )
}

export default Experience;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

const Down2 = styled.div`
font-size: 16px;
color: yellow;
`;

const Down = styled.div`
font-size: 16px;
display: flex;
align-items: center;

span{
    margin-right: 10px;
    font-size: 18px;
}
`;

const Up2 = styled.div`
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

const Up = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const School = styled.div`
width: 80%;
height: 90px;
margin-top: 15px;
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

