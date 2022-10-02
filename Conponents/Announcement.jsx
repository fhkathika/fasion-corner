import React from 'react';
import styled from "styled-components";

const Conatiner = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
 


`;
const Announcement = () => {
    return (
        <Conatiner>
            super Deal!Free Shiping on Order over $120
        </Conatiner>
    );
};

export default Announcement;
