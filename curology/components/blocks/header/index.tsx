import { useEffect, useRef, useState } from "react";

import { Button, ButtonVariant } from "components/atoms/button"

import { 
     TextLarge,
     TextVariant,
     TextMidi, 
     TextSmall } 
     from "components/atoms/typography";

import { Link, LinkVariant} from "components/atoms/links";
import { MainContainer } from "components/containers";
import { classNames } from "utils/classNames";
import useMobile from "hooks/useMobile";




const Header = () => {
    const [sideBar, setSideBar] = useState(false)
    const [isSmallScreen] = useMobile()
    const headerRef  = useRef();
    const sideBarRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const body = document.body.style;
        sideBar ? (body.overflowY = "hidden") : (body.overflowY = "auto")
    }, [sideBar])


    useEffect(() => {
            document.addEventListener('click', ({target}) => {
                    // sideBar ? (sideBarRef.current !== target) ?  setSideBar(false) : null : null;
                    if(sideBar) {
                        (sideBarRef.current !== target)  &&  setSideBar(false);
                    }
            })
        return () => {
            document.removeEventListener('click', () => {
                
            })
        }
    }, [])
    const handleOpenSideBar = () => {
        
        setSideBar(!sideBar)
    }

    return (
        <header ref={headerRef}>
            <nav className=" top-0 w-full z-50 fixed"> 
                <MainContainer>
                    {!isSmallScreen && (
                        <div className={classNames("flex flex-row justify-between py-5 ")}>
                        <div className="flex flex-col md:flex-row items-center md:space-x-20">
                            <TextLarge
                                variant={TextVariant.PURPLE}
                            >
                                Curology
                            </TextLarge>
                            <div className="flex flex-row items-center 0">
                                <ul className="flex  space-x-4">
                                <li>
                                    <Link
                                to="/"
                                variant={LinkVariant.GREY}
                                >
                                    Why Curology?
                                </Link>
                                </li>
                                <li>
                                <Link
                                to="/"
                                variant={LinkVariant.GREY}
                                >
                                    Reviews
                                </Link>
                                </li>
                                <li>
                                <Link
                                to="/"
                                variant={LinkVariant.GREY}
                                >
                                    Community
                                </Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:flex hidden flex-row space-x-3">
                                <Button
                                    variant={ButtonVariant.LINK_PURPLE}
                                >
                                    Log in
                                </Button>
                                <Button
                                    variant={ButtonVariant.OUTLINED_PURPLE}
                                >
                                    Start Trial
                                </Button>
                        </div>
                    </div>
                    )}

                    {isSmallScreen && (
                        <HeaderMobile  handleOpenSideBar={handleOpenSideBar}/>
                    )}
                </MainContainer>
            </nav>
            {sideBar && (
               <div ref={sideBarRef}>
                    <SidebarMobile closeSideBar={handleOpenSideBar} />
               </div>
            )}
        </header>
    )
}

const HeaderMobile = ({handleOpenSideBar}) => {
    return (
        <div className="py-5" id="mobileHeader">
        <div className="flex flex-row justify-between items-center">
                <TextLarge
                variant={TextVariant.PURPLE}
            >
                Curology
            </TextLarge>

            <button onClick={() => handleOpenSideBar()}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
        </div>
</div>
    )
}

const SidebarMobile = ({ closeSideBar}) => {
    return (
        <div  className="transition duration-500 ease-in-out h-screen w-4/5   block bg-cly-purple z-50 absolute top-0 right-0">
                    <div className="mx-3 my-2">
                        <div className="flex justify-end">
                            <button onClick={closeSideBar} className="transform rotate-45">
                                <svg className="w-6 h-6" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                        <ul className="flex flex-col space-y-3">
                         <li className="hover:bg-cly-black px-1 py-1"> 
                            <Link
                        to="/"
                        fontSize="xl"
                        variant={LinkVariant.WHITE}
                        >
                            Why Curology?
                        </Link>
                        </li>
                         <li className="hover:bg-cly-black px-1 py-1"> 
                        <Link
                        to="/"
                        fontSize="xl"
                        variant={LinkVariant.WHITE}
                        >
                            Reviews
                        </Link>
                        </li>
                         <li className="hover:bg-cly-black px-1 py-1"> 
                        <Link
                        to="/"
                        fontSize="xl"
                        variant={LinkVariant.WHITE}
                        >
                            Community
                        </Link>
                        </li>
                        </ul> 
                    </div>
                </div>
    )
}

export default Header;