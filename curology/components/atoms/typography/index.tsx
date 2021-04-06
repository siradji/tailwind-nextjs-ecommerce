import { FC, ReactNode } from "react"
import {classNames} from '../../../utils/classNames';



export enum TextVariant {
    PURPLE,
    BLACK,
    GREY
}



const Variants: Record<TextVariant, string> = {
    [TextVariant.BLACK]: "text-cly-black",
    [TextVariant.GREY]: "text-cly-grey",
    [TextVariant.PURPLE]: "text-cly-purple",
}

interface GenericTextProps {
    children: ReactNode,
    variant: TextVariant
}


interface LargeTextProps extends GenericTextProps {
    
}

interface MidiTextProps extends GenericTextProps {

}

interface SmallTextProps extends GenericTextProps {

}



export const TextLarge:FC<LargeTextProps> = ({children, variant}: LargeTextProps) => {
    return (
        <h1
            className={classNames("text-4xl", Variants[variant])}
            data-testid="cgly-text-large"
        >   
            {children}
        </h1>
    )
}


export const TextMidi: FC<MidiTextProps> = ({children, variant}: MidiTextProps) => {
    return (
        <h3
        className={classNames("text-base", Variants[variant])}
            data-testid="cgly-text-midi"
        >
            {children}
        </h3>
    )
}

export const TextSmall:FC<SmallTextProps> = ({children, variant}: SmallTextProps) => {
    return (
        <p
        className={classNames("text-sm", Variants[variant])}
        data-testid="cgly-text-small"
        >
            {children}
        </p>
    )
}



