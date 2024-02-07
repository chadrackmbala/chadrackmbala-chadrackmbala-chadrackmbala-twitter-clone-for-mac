export default function TweetEditorInput({ onInputChange, resetInput }) {
    const valueText = "What’s happening?"

    const handleInputChange = (e) => {
        onInputChange(e.target.value);
    }

    // if(input.value)

    return (
        <>
            <input type="text" className="tweet-editor-input" placeholder={valueText}
                onChange={handleInputChange} ref={resetInput}
            />
        </>
    );
};