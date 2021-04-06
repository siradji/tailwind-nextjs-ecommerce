import { Button, ButtonVariant } from "components/atoms/button";
import { TextLarge, TextMidi, TextSmall, TextVariant } from "components/atoms/typography";

const ProductDesc  = () => {

    return (
       <div className="flex-grow-0 space-y-5" >
        <TextLarge
            variant={TextVariant.BLACK}
        >
            Purple Fairy - A woman's perfect companion.
        </TextLarge>
        <div className="flex flex-row  align-center space-x-3 space-y-2 ">
            <TextMidi variant={TextVariant.BLACK} >$ 499.00</TextMidi>
            <TextSmall variant={TextVariant.GREY}>In Shipping and handling </TextSmall>
        </div>

        <TextSmall variant={TextVariant.GREY}>
            Get this revolutionary Cream.
        </TextSmall>
        <div className="space-y-2">

        <TextMidi

variant={TextVariant.GREY}
>
            Produced and made with the best materials from the deep valleys of the himalayas that will surely improve your skin and give you that glow every woman should have.
        </TextMidi>
            </div>

            <div  style={{marginTop: "2rem"}}>
                <Button 
                    variant={ButtonVariant.PURPLE}
                >
                    Buy now
                </Button>
            </div>
       </div>
    )
}


export default ProductDesc; 