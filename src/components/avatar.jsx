export default function Avatar({AvatarImage, style}) {

    return (
        <>
            <img src={AvatarImage} className={style} alt="avatar" />
        </>
    );
};