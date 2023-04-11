import React from "react";
import styled from "styled-components";
import { AiOutlineGithub, AiFillTwitterCircle, AiFillMail, AiFillLinkedin, AiFillFacebook, AiFillEye } from "react-icons/ai";


const Socials = () => {


    return(
        <>

            <Body>
                <Hold>

                       
                        <Up1>
                            SOCIAL MEDIA
                        </Up1>
                       

                       <Up>
                           <Down href="https://github.com/eben1909"><span>
                               <AiOutlineGithub/>
                               </span>
                               github.com/eben1909
                               </Down>
                       </Up>

                       <Up>
                           <Down href="https://ebenezeraladesuyi@gmail.com"><span>
                               <AiFillMail/>
                               </span>
                               ebenezeraladesuyi@gmail.com
                               </Down>
                       </Up>

                       <Up>
                           <Down href="https://linkedin.com/ebenezeraladesuyi"><span>
                               <AiFillLinkedin/>
                               </span>
                               linkedin.com/ebenezeraladesuyi
                               </Down>
                       </Up>

                       <Up>
                           <Down href="https://medium.io/eben1909"><span>
                               <AiFillEye/>
                               </span>
                               medium.io/eben1909
                               </Down>
                       </Up>

                       <Up>
                           <Down href="https://twitter.com/eben1909"><span>
                               <AiFillTwitterCircle/>
                               </span>
                               twitter.com/eben1909
                               </Down>
                       </Up>

                        <Up>
                            <Down href="https://facebook.com/ebenezeraladesuyi"><span>
                                <AiFillFacebook/>
                                </span>
                                facebook.com/ebenezeraladesuyi
                                </Down>
                        </Up>

                </Hold>

            </Body>
        
        </>
    )
}

export default Socials;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

const Down = styled.a`
font-size: 16px;
display: flex;
align-items: center;
color: white;

span{
    margin-right: 10px;
    font-size: 18px;
}
`;

const Up1 = styled.div`
font-size: 18px;
display: flex;
align-items: center;
color: yellow;
margin-bottom: 15px;
font-weight:600;
`;

const Up = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
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

