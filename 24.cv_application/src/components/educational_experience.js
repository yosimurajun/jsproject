const Educational_experience = (props) => {
    const { onChange, onSubmit, onReset } = props;
    return (
        <div className="section">
            <h2>educational experience</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">school name</label>
                <input type="text" name="name" id="name" className="education" onChange={onChange} value={onReset.name}/>
                <label htmlFor="title">title</label>
                <input type="text" name="title" id="title" className="education" onChange={onChange} value={onReset.title}/>
                <label htmlFor="date">date</label>
                <input type="date" name="date" id="date" className="education" onChange={onChange} value={onReset.date}/>
                <input type="submit" value="add"  />
            </form>
        </div>
    )
}


export default Educational_experience;