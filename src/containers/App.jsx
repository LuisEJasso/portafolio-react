import React from 'react';
import { createGlobalStyle } from 'styled-components';
import useGetData from '../hooks/useGetData';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import H2Styled from '../styles/H2Styled';
//const api = 'https://us-central1-cv-api-nueva.cloudfunctions.net/api'
const api = 'https://us-central1-api-devf.cloudfunctions.net/api'


const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lato, san-serif';
        margin: 0;
        padding: 0;
        background: #f5f5f5;
    }
`;

const App = () => {
    const data = useGetData(api);
    console.log(data);
    return data.length === 0 ? <h1>...Cargando</h1> : (
        <Main>
            <GlobalStyle />
            <Sidebar>
                <About
                    avatar={data.data.avatar}
                    name={data.data.name}
                    profession={data.data.profession}
                    bio={data.data.bio}
                    address={data.data.address}
                    social={data.data.social}
                />
            </Sidebar>
            <Info>
                <Education data={data.data.education} />
                <hr/>
                <Experience data={data.data.experience}/>
                <hr/>
                <Certificates data={data.data.certificate}/>
                <hr/>
                <Skills data={data.data.skills}/>
            </Info>
        </Main>
    )
};

export default App;