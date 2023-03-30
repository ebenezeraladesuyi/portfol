import React from "react";
import styled from "styled-components";


const Side = () => {


    return(
        <>

            <Body>
                <Hold>
                    <Image />
                </Hold>

            </Body>
        
        </>
    )
}

export default Side;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

// const Body = styled.div``;

const Image = styled.img``;

const Hold = styled.div``;

const Body = styled.div`
width: 400px;
height: calc(100vh - 215px);
background-color: rgba(255, 255, 255, 0.771);
display: flex;
justify-content: center;
align-items: center;
`;

