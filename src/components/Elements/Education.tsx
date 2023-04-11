import React from "react";
import styled from "styled-components";
import { AiFillMail, AiFillPhone, AiOutlineRead } from "react-icons/ai";
import { MdSchool } from "react-icons/md";


const Education = () => {


    return(
        <>

            <Body>
                <Hold>
                   
                    <School>
                        <Up>
                            <Up1><span>
                                <MdSchool/>
                                </span>Yaba College of Technology, Yaba, Lagos</Up1>

                                <Up2>Higher National Diploma</Up2>
                        </Up>

                        <Up>
                            <Down><span>
                                <AiOutlineRead/>
                                </span>Office Technology & Management</Down>

                                <Down2>2023</Down2>
                        </Up>
                    </School>
                   
                   <School>
                       <Up>
                           <Up1><span>
                               <MdSchool/>
                               </span>The Federal Polytechnic, Ado-Ekiti, Ekiti State</Up1>

                               <Up2>National Diploma</Up2>
                       </Up>

                       <Up>
                           <Down><span>
                               <AiOutlineRead/>
                               </span>Office Technology & Management</Down>

                               <Down2>2017</Down2>
                       </Up>
                   </School>
                   
                   <School>
                       <Up>
                           <Up1><span>
                               <MdSchool/>
                               </span>CodeLab, Apapa, Lagos</Up1>

                               <Up2>Diploma</Up2>
                       </Up>

                       <Up>
                           <Down><span>
                               <AiOutlineRead/>
                               </span>Software Engineering</Down>

                               <Down2>2023</Down2>
                       </Up>
                   </School>
                   
                   <School>
                       <Up>
                           <Up1><span>
                               <MdSchool/>
                               </span>Aptech Computer Institute, V.I, Lagos</Up1>

                               <Up2>Diploma</Up2>
                       </Up>

                       <Up>
                           <Down><span>
                               <AiOutlineRead/>
                               </span>Web Development</Down>

                               <Down2>2021</Down2>
                       </Up>
                   </School>
                   
                   <School>
                       <Up>
                           <Up1><span>
                               <MdSchool/>
                               </span>Memolinks Computer College, Akure, Ondo State.</Up1>

                               <Up2>Diploma</Up2>
                       </Up>

                       <Up>
                           <Down><span>
                               <AiOutlineRead/>
                               </span>Computer Operating</Down>

                               <Down2>2011</Down2>
                       </Up>
                   </School>




                </Hold>

            </Body>
        
        </>
    )
}

export default Education;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

const Down2 = styled.div`
font-size: 16px;
color: yellow;

@media screen and (max-width: 425px) {
    font-size: 13px;
}
`;

const Down = styled.div`
font-size: 16px;
display: flex;
align-items: center;

span{
    margin-right: 10px;
    font-size: 18px;
}

@media screen and (max-width: 425px) {
    font-size: 14px;
}
`;

const Up2 = styled.div`
font-size: 16px;
color: yellow;

@media screen and (max-width: 768px) {
    font-size: 14px;
}

@media screen and (max-width: 425px) {
    font-size: 12px;
    margin-left:15px;
}
`;

const Up1 = styled.div`
font-size: 18px;
display: flex;
align-items: center;

@media screen and (max-width: 425px) {
    font-size: 16px;
}

// @media screen and (max-width: 375px) {
//     font-size:14px;
// }

span{
    margin-right: 10px;
    font-size: 21px;

@media screen and (max-width: 425px) {
    font-size: 15px;
}
}
`;

const Up = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
// flex-wrap:wrap;
`;

const School = styled.div`
width: 80%;
height: 70px;
margin-top: 10px;

@media screen and (max-width: 425px) {
margin-bottom: 20px;
height: 100%;
width: 100%;
}
`;

const Hold = styled.div`
width: 85%;
color: white;

@media screen and (max-width: 768px) {
    width: 90%;
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

