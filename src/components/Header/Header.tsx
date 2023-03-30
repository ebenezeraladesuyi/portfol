import React from "react";
import styled from "styled-components";
import { FiDownload } from "react-icons/fi";


const Header = () => {


    return(
        <>

            <Head>

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

            </Head>
        
        </>
    )
}

export default Header;

// const Head = styled.div``;

// const Head = styled.div``;

// const Head = styled.div``;

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
}
`;

const Name1 = styled.h5`
font-size: 25px;
color: white;
font-weight: 600;

span{
font-size: 15px;
color: #ee5f38;
font-weight: 600;
}
`;

const Name = styled.div`
margin-left: 30px;
// height: 50px;
`;

const Head = styled.div`
width: 100%;
height: 70px;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
`;

