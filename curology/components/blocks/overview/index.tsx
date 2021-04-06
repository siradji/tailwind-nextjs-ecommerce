import { TextSmall, TextVariant } from "components/atoms/typography"

const ProductOverview = () => {

    return (
        <div className="py-3 mt-5">
            <div className="flex flex-col space-y-5">
                <div className="flex flex-row items-center">
                <svg className="w-6 h-6 mr-2" fill="#4dce9d" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <TextSmall variant={TextVariant.BLACK}>
                    Routine shipped to your door
                </TextSmall>
                </div>
                <div className="flex flex-row items-center">
                <svg className="w-6 h-6 mr-2" fill="#4dce9d" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <TextSmall variant={TextVariant.BLACK}>
                    Chat with our consultants
                </TextSmall>
                </div>
                <div className="flex flex-row items-center">
                <svg className="w-6 h-6 mr-2" fill="#4dce9d" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <TextSmall variant={TextVariant.BLACK}>
                    30-days trial and money back guanrantee
                </TextSmall>
                </div>
            </div>
        </div>
    )

};


export const Review = () => {
    return (
        <div className="rounded p-2 shadow">
            
        </div>
    )
} 

export default ProductOverview;