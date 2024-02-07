export default function InputSearch({style, placeholder}) {
    return(
        <>
            <input type="text" placeholder={placeholder} className={style} />
        </>
    );
};