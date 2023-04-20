import React from "react";
import styled from "styled-components";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { CgCalendarToday } from "react-icons/cg";


const Profile = () => {


    return(
        <>

            <Body>
                <Hold>
                    <Hello>Hello.. I'm</Hello>
                    <Hello2>EBENEZER ALADESUYI</Hello2>

                    <Mern>MERN Stack Software Engineer (Web & Mobile)</Mern>
                    <Mern2>(TypeScript | JavaScript | React | Express | Node | MongoDB | Redux | TanStack Query)</Mern2>

                    <Mern3>A versatile, diligent, optimistic, innovative, team player and highly motivated graduate currently seeking relevant position in a dynamic organization. I'm willing to secure a position where I can efficiently and effectively contribute my skills and abilities to the growth of the organization and add to my knowledge in my profession.</Mern3>

                    <Mail style={{marginTop:"15px"}}>
                        <Icon>
                            <AiFillMail />
                        </Icon>

                        <MailText>ebenezeraladesuyi@gmail.com</MailText>
                    </Mail>

                    <Mail>
                        <Icon>
                            <AiFillPhone />
                        </Icon>

                        <MailText>+2347036750857, +2347047478754</MailText>
                    </Mail>

                    <Mail>
                        <Icon>
                            <BsFillPersonFill />
                        </Icon>

                        <MailText>Male</MailText>
                    </Mail>

                    <Mail>
                        <Icon>
                            <CgCalendarToday />
                        </Icon>

                        <MailText>19, September</MailText>
                    </Mail>
                    

                </Hold>

            </Body>
        
        </>
    )
}

export default Profile;

// const Body = styled.div``;

// const Body = styled.div``;

const MailText = styled.div`
font-size: 17px;
color: yellow;

@media screen and (max-width: 425px) {
    font-size: 14px;
}
`;

const Icon = styled.div`
font-size: 20px;
margin-right: 20px;

@media screen and (max-width: 425px) {
    font-size: 17px;
    margin-right: 14px;
}
`;

const Mail = styled.div`
display: flex;
margin-top: 6px;

@media screen and (max-width: 425px) {
    font-size: 14px;
}
`;

const Mern3 = styled.div`
font-size: 14px;
margin-top: 15px;
width: 64%;
text-align: justify;

@media screen and (max-width: 425px) {
    font-size: 12px;
width: 92%;
}
`;

const Mern2 = styled.div`
font-size: ;
padding: 10px;
// background-color: #ee5f38;
// background-color: yellow;
color: yellow;
border-radius: 10px;
margin-top: 7px;
width: 64%;
padding-left:0;

@media screen and (max-width: 425px) {
    font-size: 13px;
width: 100%;
}
`;

const Mern = styled.div`
font-size: 20px;

@media screen and (max-width: 425px) {
    font-size: 16px;
}

@media screen and (max-width: 320px) {
    font-size: 13px;
}
`;

const Hello2 = styled.div`
font-size: 35px;
font-weight: 600;

@media screen and (max-width: 425px) {
    font-size: 25px;
}

@media screen and (max-width: 320px) {
    font-size: 18px;
}
`;

const Hello = styled.h3`
font-size: 16px;
color: yellow;
`;

const Hold = styled.div`
width: 85%;
color: white;

@media screen and (max-width: 320px) {
   width: 95%;
   margin-left: 20px;
}
`;

const Body = styled.div`
width: 100%;
height: 100%;
// background-color: rgba(255, 255, 255, 0.771);
display: flex;
justify-content: center;
align-items: center;
`;

