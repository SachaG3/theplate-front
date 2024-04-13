'use client'
import React, {useState} from 'react';
import Header from "@/component/Header";
import RegisterStep1 from "@/component/LoginResgister/RegisterStep/RegisterStep1";
import RegisterStep2 from "@/component/LoginResgister/RegisterStep/RegisterStep2";
import RegisterStep3 from "@/component/LoginResgister/RegisterStep/RegisterStep3";

export default function Register() {
    const [currentStep, setCurrentStep] = useState(1);
    const prevStep = () => setCurrentStep(currentStep - 1);
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    let headerProps;
    if (currentStep === 1) {
        headerProps = {
            returnLink: "/", // Renvoie à la page d'accueil pour la première étape
            returnText: "Register"
        };
    } else {
        headerProps = {
            onBack: prevStep, // Renvoie à l'étape précédente pour les autres étapes
            returnText: "Register"
        };
    }


    return (
        <div className="min-h-screen flex flex-col" style={{minHeight: "100vh"}}>
            <Header {...headerProps} />
            <form>
                {currentStep === 1 && <RegisterStep1 className={""} onNext={nextStep}/>}
                {currentStep === 2 && <RegisterStep2 className={""} onNext={nextStep}/>}
                {currentStep === 3 && <RegisterStep3 className={""} onNext={nextStep}/>}
            </form>
        </div>
    );
}
