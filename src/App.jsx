import { useState,useEffect } from 'react'
import { Mail, CheckCircle, XCircle, Loader } from 'lucide-react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Authcontext.jsx';
import Navbar from './components/Navbar.jsx';
import './App.css'
import Hero from './components/Hero.jsx';
import  FullWidthGrid  from './components/Sectionone.jsx';
import  Forms  from './components/Forms.jsx';
import SignUpSubscribeForm from './components/SignUpSubscribeForm';
import Login from './components/Login';



function App() {


const renderContent = () => {
       
                return (
                    <> <Navbar />
                        <Hero  id="home-section"/>
                        <FullWidthGrid  id="features-section"/>
                        <Forms/>
                        {/* <SignUpSubscribeForm id="register-section" />
                         <Login id="login-section" /> */}
                    </>
                );
        }
   
 
return (
        <AuthProvider>
          <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                // Ensure content takes up at least the viewport height
            }}>
           
            
            {/* Render the content based on state */}
            {renderContent()}
            </Box>
        </AuthProvider>
    );
 }


export default App
