import React, {ChangeEventHandler} from 'react';
import {className} from "postcss-selector-parser";

type InputComponentProps = {
    imageSrc?: string;
    placeholder: string;
    type: string
    onChange: ChangeEventHandler<HTMLInputElement>;
    name: string
    value: string
    inputmode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined
    className?: String | null
};

const InputComponent = (props: InputComponentProps) => {
    return (
        <div
            className="flex md:w-[444px] w-[350px] md:h-24 h-16  bg-white rounded-full items-center border border-gray-400 ">
            {props.imageSrc ? <img alt={props.name} className="opacity-40 ml-4 px-4" src={props.imageSrc}/> :
                <div className="block w-[84px]">

                </div>}
            <input type={props.type} placeholder={props.placeholder} onChange={props.onChange}
                   value={props.value} name={props.name} inputMode={props.inputmode}
                   autoComplete="off"
                   className={props.className ? "py-2 px-2 outline-0 text-gray-600 text-lg font-semibold" : "py-2 px-2 outline-0 text-gray-600 text-lg font-semibold" + " " + props.className}/>
        </div>

    );
};

export default InputComponent;