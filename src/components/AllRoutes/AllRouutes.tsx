import React from "react";
import styled from "styled-components";
import { useRoutes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Side from "../Side/Side";


const AllRoutes = () => {

    const element = useRoutes([])

    return(
        <>
            <Body>

                <Head>
                    <Header />
                </Head>

                <Middle>

                    <Left>
                        <Side />
                    </Left>

                    <Right>
                        {element}
                    </Right>

                </Middle>

                <Foot>
                    <Footer />
                </Foot>

            </Body>

        </>
    )
}

export default AllRoutes;

// const Foot = styled.div``;

const Foot = styled.div`
width: 100%;
height: 140px;
border-top: 1px solid #ee5f38;
`;

const Right = styled.div`
background-color: red;
width: cal(100% - 430px);
height: calc(100% - 210px);
`;

const Left = styled.div`
width: 400px;
height: calc(100vh - 215px);
background-color: blue;
`;

const Middle = styled.div`
width: 100%;
// height:
display: flex;
justify-content: space-between;
align-items: center;
`;

const Head = styled.div`
width: 100%;
height: 70px;
// background-color: green;
`;

const Body = styled.div`
width: 100%;
min-height: 100vh;
background-color: #000000;
`;
