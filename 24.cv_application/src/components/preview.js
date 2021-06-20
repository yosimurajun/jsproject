const Preview = (props) => {
    // const { person, academy, works } = props.data;
    const { person, academy, works, onDelete, onUpdate, onFake } = props;
    return (
        <div className="preview">
            <button className="fake_button" onClick={onFake}>fake data</button>
            <div className="header mg_b_10">
                <div className="header_left">
                    <h1 className="preview_name head_color">{person.name}</h1>
                    <span>{person.job}</span>
                </div>
                <div className="header_right small_font_size">
                    <span>{person.phone}</span>
                    <span>{person.email}</span>
                    <span>{person.nation}</span>
                </div>
            </div>
            <div className="main">
                <div className="main_description mg_b_20">
                    <p className="small_line_height">{person.content}</p>
                </div>
                <div className="list">
                  
                    <div className="works mg_b_20 list_height_size ">
                        <div className="mg_b_10 head_color">
                            <h3>work experience</h3>
                        </div>
                        { works.map((value, index) => {
                        return (
                                <div className="mg_b_10 position_relative" data-key={value.id} key={value.id}>
                                    <div className="flex space_between mg_b_5 small_font_size">
                                        <div className="job_name">{value.position}</div>
                                        <div className="flex">
                                            <p className="_name">{value.name}</p>
                                            <p>{value.date}</p>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <p className="small_line_height">
                                            {value.content}
                                        </p>
                                    </div>
                                    <div className="position_absoulute flex ">
                                        <div className="palleral_line"></div>
                                        <button className="update green" onClick={onUpdate}>O</button>
                                        <button className="delete" onClick={onDelete}>X</button>
                                    </div>
                                </div>
                               )
                          })}
                    </div>
                    <div className="academy mg_b_20 list_height_size">
                        <div className="mg_b_10 head_color">
                            <h3>education</h3>
                        </div>
                            {academy.map((value, index) => {
                                return (
                                    <div className="mg_b_10 position_relative" data-key={value.id} key={value.id}>
                                        <div className="flex space_between mg_b_5 small_font_size ">
                                            <div className=""><p>{value.title}</p></div>
                                            <div className="flex">
                                                <p className="_name">{value.name}</p>
                                                <p>{value.date}</p>
                                            </div>
                                        </div>
                                        <div className="position_absoulute flex ">
                                            <div className="palleral_line"></div>
                                            <button className="update green" onClick={onUpdate}>O</button>
                                            <button className="delete" onClick={onDelete}>X</button>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview;