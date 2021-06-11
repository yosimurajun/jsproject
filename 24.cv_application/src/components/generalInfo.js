const General_infomation = (props) => {
    const { onChange } = props;
    return (
        <div className="section">
            <h2>general infomation</h2>
            <form>
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" className="person" onChange={onChange}/>
                <label htmlFor="job">job</label>
                <input type="text" name="job" id="job" className="person" onChange={onChange}/>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" className="person" onChange={onChange}/>
                <label htmlFor="phone">phone</label>
                <input type="text" name="phone" id="phone" className="person" onChange={onChange}/>
                <label htmlFor="nation">city, nation</label>
                <input type="text" name="nation" id="nation" className="person" onChange={onChange}/>
                <label htmlFor="content">content</label>
                <textarea name="content" col="4" rows="6" id="content" className="person" onChange={onChange}></textarea>
            </form>
        </div>
    )
}


export default General_infomation;