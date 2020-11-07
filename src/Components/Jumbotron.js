import React from 'react';
import { Jumbotron as Jumbo , Container} from 'react-bootstrap';
import ocean from '../ocean.jpg';
import styled from 'styled-components';


const Styles = styled.div`

.jumbo{
    background: url(${ocean}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
}
.overlay{
    background-color: #000;
    position: absolute;
    opacity:0.6;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:-1;
}

`;




const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h2>web developer blog</h2>
            <p>lorem insum dolor sit hamet lorem insum dolor sit hamet lorem insum dolor sit hamet lorem insum dolor sit hamet</p>
        </Container>
    </Jumbo>
    </Styles>
    )
export default Jumbotron;