import React from 'react';

interface ButtonProps {
    title: string;
    onClick: () => void;
    className?: String | null;
}

const Button: React.FC<ButtonProps> = ({title, onClick, className}) => (
    <button
        type="button"
        className={className ? "rounded-2xl text-white text-center flex md:w-[444px] w-[350px] py-12 bg-blue-600 rounded-full items-center border border-gray-400" + " " + className : "rounded-2xl text-white text-center flex md:w-[444px] w-[350px]  md:py-8 py-4 bg-blue-600 rounded-full items-center border border-gray-400"}
        onClick={onClick}>
        <span className="w-full text-lg">{title}</span>
    </button>
);

export default Button;