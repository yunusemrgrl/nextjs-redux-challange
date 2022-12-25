import React from 'react';

interface HeaderProps {
    title: string;
    description: string;
    style?: string | null;
}

const RightSideTitle: React.FC<HeaderProps> = ({title, description, style}) => (
    <div
        className={!style ? "md:grid md:gap-y-2 text-center text-gray-700 md:text-start" : "md:grid md:gap-y-2 text-center md:text-start" + " " + style}>
        <h4 className="text-3xl font-bold ">{title}</h4>
        <p className="text-2xl font-semibold opacity-90">{description}</p>
    </div>
);

export default RightSideTitle;