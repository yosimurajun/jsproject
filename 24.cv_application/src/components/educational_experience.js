const Educational_experience = (props) => {
    const { onChange, onSubmit, onReset, onUpdateStatus, onUpdate } = props;
    console.log('Education', onUpdateStatus);
    return (
        <div className={onUpdateStatus.education_update ? "greenbox section" : "section"}>
            <h2>educational experience</h2>

            <form className="academy education">
                <label htmlFor="name">school name</label>
                <input type="text" name="name" id="name" className="education" onChange={onChange} value={onReset.name || ''}/>
                <label htmlFor="title">title</label>
                <input type="text" name="title" id="title" className="education" onChange={onChange} value={onReset.title || ''}/>
                <label htmlFor="date">date</label>
                <input type="date" name="date" id="date" className="education" onChange={onChange} value={onReset.date || ''}/>
                { onUpdateStatus.education_update ?
                            <input type="submit" value="update" name="education" className="education" onClick={onUpdate}/>
                            : <input type="submit" value="add" name="education" className="education" onClick={onSubmit}/>
            
                }
            </form>
        </div>
    )
}


export default Educational_experience;