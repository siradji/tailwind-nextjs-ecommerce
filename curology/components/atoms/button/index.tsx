import {FC, ReactNode} from 'react';

import { classNames} from '../../../utils/classNames';


export enum ButtonVariant {
    PURPLE,
    GREY,
    LINK_PURPLE,
    LINK_GREY,
    OUTLINED_PURPLE,
    OUTLINED_GREY,
}




const Variant: Record<ButtonVariant, string> = {
    [ButtonVariant.PURPLE]: "bg-cly-purple  shadow-lg text-cly-white px-5 py-2 border-2 border-cly-purple",
    [ButtonVariant.GREY]: "bg-cly-grey  shadow-lg text-black  border-2 border-cly-grey",
    [ButtonVariant.LINK_GREY]: "bg-transparent text-cly-grey border-none border-0",
    [ButtonVariant.LINK_PURPLE]: "bg-transparent border-none  text-cly-black border-0 text-cly-grey",
    [ButtonVariant.OUTLINED_PURPLE]: "border-2  px-2 shadow-lg border-cly-purple bg-tranparent text-cly-purple",
    [ButtonVariant.OUTLINED_GREY]: "border-2  shadow-lg border-cly-grey bg-tranparent text-cly-grey"
}

interface ButtonProps {
    children: ReactNode
    variant: ButtonVariant
    onClick?:() => void,
    link?: string
}






export const Button:FC<ButtonProps> =({children, variant, onClick= () => null, link}: ButtonProps) => {
    
    return (
        <button
            data-testid="cgly-button"
            onClick={onClick}
            className={classNames('rounded  text-bold', Variant[variant])}
        >
            {children}
        </button>
    )

}
