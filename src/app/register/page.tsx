'use client'
import React, {useEffect, useState} from 'react';


import HttpService from '@/services/HttpService';
import RegisterStep1 from "@/component/LoginResgister/RegisterStep/RegisterStep1";
import RegisterStep2 from "@/component/LoginResgister/RegisterStep/RegisterStep2";
import RegisterStep3 from "@/component/LoginResgister/RegisterStep/RegisterStep3"; // Assurez-vous que le chemin est correct

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        firstName: '',
        password: ''
    });
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    const updateUserData = (newData) => {
        setUserData(prev => ({...prev, ...newData}));
    };

    const onNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const onRegister = async () => {
        if (isMounted) {
            console.log('Submitting registration data:', userData);
            try {
                const response = await HttpService.post("auth/register", userData);
                if (response.success) {
                    alert('Registration successful!');
                } else {
                    alert('Registration failed: ' + response.message);
                }
            } catch (error) {
                console.error('Registration error:', error);
                alert('An error occurred during registration. Please try again later.');
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {currentStep === 1 &&
                <RegisterStep1 className="register-step" userData={userData} updateUserData={updateUserData}
                               onNext={onNext}/>}
            {currentStep === 2 &&
                <RegisterStep2 className="register-step" userData={userData} updateUserData={updateUserData}
                               onNext={onNext}/>}
            {currentStep === 3 &&
                <RegisterStep3 className="register-step" userData={userData} updateUserData={updateUserData}
                               onRegister={onRegister}/>}
        </div>
    );
};

export default Register;
