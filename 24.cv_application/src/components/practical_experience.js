const Practical_experience = (props) => {
    const { onChange, onSubmit, onReset, onUpdateStatus, onUpdate } = props;
    return (
        <div className={onUpdateStatus.work ? "greenbox section" :"section"}>
            <h2>work experience</h2>
            
            <form className="works work" >
                <label htmlFor="companyname">company name</label>
                <input type="text" name="name" id="name" className="work" onChange={onChange} value={onReset.name}/>
                <label htmlFor="position">position</label>
                <input type="text" name="position" id="position" className="work" onChange={onChange} value={onReset.position}/>
                <label htmlFor="content">content</label>
                <input type="text" name="content" id="content" className="work" onChange={onChange} value={onReset.content}/>
                <label htmlFor="date">date</label>
                <input type="date" name="date" id="date" className="work" onChange={onChange} value={onReset.date}/>
                { onUpdateStatus.work ?
                            <input type="submit" value="update" name="work" className="work" onClick={onUpdate}/>
                            : <input type="submit" value="add" name="work" className="work" onClick={onSubmit}/>
            
                }
             
            </form>
        </div>
    )
}


export default Practical_experience;