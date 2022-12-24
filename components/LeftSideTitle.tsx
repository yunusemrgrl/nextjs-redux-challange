import React from 'react';

interface HeaderProps {
    title: string;
    description: string;
    style?: string | null;
}

const LeftSideTitle: React.FC<HeaderProps> = ({title, description, style}) => (
    <div className={!style ? "grid gap-y-2 mx-4 text-gray-700" : "grid gap-y-2" + " " + style}>
        <h4 className="lg:text-6xl md:text-4xl font-bold ">{title}</h4>
        <p className="lg:text-3xl sm:text-xl  opacity-90">{description}</p>
    </div>
);

export default LeftSideTitle;