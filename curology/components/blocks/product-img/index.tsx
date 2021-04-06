import Image from 'next/image';


const ProductImage = () => {
    return <div className="shadow-xl rounded-3xl p-3 flex-shrink-0 ">
            <Image
                src="/body_creame.jpeg"
                width={500}
                height={500}
            />
    </div>
}
export const ProductImageCarousel = () => {

    return (
        <div className="flex flex-row space-x-4 mt-5 items-center">
             <div className="rounded-xl shadow-xl" style={{maxWidth: "13rem" , height:"4em"}}>
                <img src="/body_creame.jpeg" className="rounded-xl h-full w-full" alt="" />
             </div>
             <div className="rounded-xl shadow-xl" style={{maxWidth: "13rem" , height:"4em"}}>
                <img src="/flower_one.jpeg" className="rounded-xl h-full w-full" alt="" />
             </div>
             <div className="rounded-xl shadow-xl" style={{maxWidth: "13rem" , height:"4em"}}>
                <img src="/flower_two.jpeg" className="rounded-xl h-full w-full" alt="" />
             </div>
             
        </div>
    )
}


export default ProductImage