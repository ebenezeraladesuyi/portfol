import React from "react";
import styled from "styled-components";


const Side = () => {


    return(
        <>

            <Body>
                <Hold>
                    <Image src="/images/eben.png" />
                </Hold>

            </Body>
        
        </>
    )
}

export default Side;

// const Body = styled.div``;

// const Body = styled.div``;

const Image = styled.img`
width: 100%;
`;

const Hold = styled.div`
width: 68%;
height: 61%;
// border: 3px solid #ee5f38;
border: 3px solid white;
border-radius: 50%;
overflow: hidden;
background-color: white;
`;

const Body = styled.div`
width: 400px;
height: calc(100vh - 215px);
// background-color: rgba(255, 255, 255, 0.771);
display: flex;
justify-content: center;
align-items: center;
`;

