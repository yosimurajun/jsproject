const Practical_experience = () => {
    return (
        <div className="section">
            <h2>practical experience</h2>
            <form>
                <label htmlFor="companyname">company name</label>
                <input type="text" name="companyname" id="companyname"/>
                <label htmlFor="position">position title</label>
                <input type="text" name="position" id="position"/>
                <label htmlFor="task">main tasks</label>
                <input type="text" name="task" id="task"/>
                <label htmlFor="fromdate">date</label>
                <input type="date" name="fromdate" id="fromdate"/>
                <input type="submit" value="add" />
            </form>
        </div>
    )
}


export default Practical_experience;