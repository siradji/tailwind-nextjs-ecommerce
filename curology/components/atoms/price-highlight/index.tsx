import { FC, ReactNode } from "react";
import {classNames} from 'utils/classNames'

export enum  PriceHighlightVariant {
    GREEN,
    PURPLE,
    ORANGE,
    GREY
}

const Variants: Record<PriceHighlightVariant, string> = {
    [PriceHighlightVariant.GREEN]: "text-green-500  bg-cly-green",
    [PriceHighlightVariant.ORANGE]: "",
    [PriceHighlightVariant.PURPLE]: "",
    [PriceHighlightVariant.GREY]: "",
}



interface PriceHighlightProps {
    children: ReactNode;
    variant?: PriceHighlightVariant
}

const PriceHighlight:FC<PriceHighlightProps> = ({children, variant= PriceHighlightVariant.GREEN}: PriceHighlightProps) => {
        return (
            <div className={classNames("rounded-sm p-2", Variants[variant])}>
                {children}
            </div>
        )
}

export default PriceHighlight;