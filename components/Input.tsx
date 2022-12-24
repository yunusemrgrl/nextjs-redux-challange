import React, {ChangeEventHandler} from 'react';

type InputComponentProps = {
    imageSrc?: string;
    placeholder: string;
    type: string
    onChange: ChangeEventHandler<HTMLInputElement>;
    name: string
    value: string
};

const InputComponent = (props: InputComponentProps) => {
    return (
        <div className="flex w-[444px] h-24 bg-white rounded-full items-center border border-gray-400 ">
            {props.imageSrc ? <img alt={props.name} className="opacity-40 ml-4 px-4" src={props.imageSrc}/> :
                <div className="ml-4 px-4"></div>}
            <input type={props.type} id="name" placeholder={props.placeholder} onChange={props.onChange}
                   value={props.value} name={props.name}
                   className="py-2 px-2 outline-0 text-gray-600 text-lg font-semibold"/>
        </div>
    );
};

export default InputComponent;