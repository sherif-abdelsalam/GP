function Title({ onClick, textContent, title, btnText }) {
    const titleArray = title.split(" ");

    return <section className="welcome-screen">
        <h1>
            {titleArray[0]} <span>{titleArray[1]}</span><br />
            {titleArray[2] + " " + titleArray[3]}
        </h1>
        <p>
            {textContent}
        </p>
        <div
            className="btn"
            onClick={onClick}
        >
            {btnText}
        </div>
    </section>
}

export default Title;