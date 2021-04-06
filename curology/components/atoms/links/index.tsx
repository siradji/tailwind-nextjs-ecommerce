import NextLink from 'next/link';
import { ReactNode, FC } from 'react';

import {classNames} from '../../../utils/classNames';


export enum LinkVariant {
    PURPLE,
    BLACK,
    GREY,
    WHITE
}


const Variant: Record< LinkVariant,string> = {
    [LinkVariant.PURPLE]: "text-cly-purple",
    [LinkVariant.GREY]: "text-cly-grey",
    [LinkVariant.BLACK]: "text-cly-black",
    [LinkVariant.WHITE]: "text-cly-white",

}


interface LinkProps {
    children: ReactNode;
    to: string;
    variant: LinkVariant, 
    fontSize?: string
}
export const Link:FC<LinkProps> =  ({children, to, variant, fontSize= 'base'}: LinkProps) => {
    return (
        <NextLink
            href={to}
        >
            <a className={classNames(`md:text-xl text-${fontSize} hover:text-cly-purple`, Variant[variant])}>
                {children}
            </a>
        </NextLink>
    )
}


