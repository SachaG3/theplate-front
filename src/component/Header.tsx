'use client'
import React from 'react';
import Link from 'next/link';
import {ArrowLeft, Map} from "lucide-react";

function Header({returnLink, returnText, onBack}: { returnLink?: string, returnText: string, onBack?: () => void }) {
    const handleBackClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (onBack) {
            e.preventDefault();
            onBack();
        }
    };

    return (
        <div className="flex items-center justify-between bg-content1 rounded-b-lg py-2 shadow">
            {onBack || returnLink ? (
                <div onClick={handleBackClick}
                     className="flex items-center justify-center p-2 rounded-full hover:bg-base-300 active:bg-base-100 transition-colors">
                    <Link href={returnLink || '#'}>
                        <ArrowLeft size={24}/>
                    </Link>
                </div>
            ) : (
                <div style={{width: 48}}/>
            )}
            <h2 className="text-lg font-semibold text-center flex-1">{returnText}</h2>
            <div
                className="flex items-center justify-center p-2 rounded-full hover:bg-base-300 active:bg-base-100 transition-colors">
                <Link href="/carte">
                    <Map size={24}/>
                </Link>
            </div>
        </div>
    );
}

export default Header;
