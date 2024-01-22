import Star from "../assets/star.svg"
export default function Rating({num}){
    const arr1 = new Array(num).fill(null);
    return (
        <>
        {arr1.map((value, index)=><img key={index} src={Star}/>)}
        </>
    );
}