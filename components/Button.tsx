import React from 'react';

interface ButtonProps {
    title: string;
    onClick: () => void;
    className?: String | null;
}

const Button: React.FC<ButtonProps> = ({title, onClick, className}) => (
    <button
        className={className ? "rounded-2xl text-white text-center flex w-[444px] py-12 bg-blue-600 rounded-full items-center border border-gray-400" : "rounded-2xl text-white text-center flex w-[444px] py-8 bg-blue-600 rounded-full items-center border border-gray-400" + " " + className}
        onClick={onClick}>
        <span className="w-full text-lg">{title}</span>
    </button>
);

export default Button;