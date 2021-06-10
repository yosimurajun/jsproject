const Preview = (props) => {
    const { person, academy } = props.data;
    return (
        <div className="preview">
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
                    <p className="small_line_height">
                        Cupidatat sunt anim incididunt nisi
                        labore sunt nulla Lorem elit irure.
                        Aliquip quis excepteur et nostrud eni
                        m irure nostrud officia. Et deserunt
                        et aliquip voluptate elit cupidatat.
                        dipisicing enim minim do anim eiusmod est.
                        Irure laboris anim voluptate proident.
                        Cillum reprehenderit est magna minim.
                        Nostrud ex aute laborum ea irure amet ea ipsum
                        ut non minim anim nisi
                    </p>
                </div>
                <div className="list">
                    <div className="work mg_b_20 list_height_size">
                        <div className="mg_b_10 head_color">
                            <h3>work experience</h3>
                        </div>
                        <div className="mg_b_10">
                            <div className="flex space_between mg_b_5 small_font_size">
                                <div className="job_name">software engineer</div>
                                <div className="flex">
                                    <p className="_name">a soft company</p>
                                    <p>2018 ~ present</p>
                                </div>
                                
                            </div>
                            <div>
                                <p className="small_line_height">
                                    Ut fugiat minim qui voluptate culpa.
                                    Elit nostrud ex ad incididunt incididunt eiusmod.
                                    Officia cupidatat culpa commodo nisi nostrud.
                                </p>
                            </div>
                        </div>
                        <div className="mg_b_10">
                            <div className="flex space_between mg_b_5 small_font_size">
                                <div className="job_name">software engineer</div>
                                <div className="flex">
                                    <p className="_name">a soft company</p>
                                    <p>2018 ~ present</p>
                                </div>
                                
                            </div>
                            <div>
                                <p className="small_line_height">
                                    Ut fugiat minim qui voluptate culpa.
                                    Elit nostrud ex ad incididunt incididunt eiusmod.
                                    Officia cupidatat culpa commodo nisi nostrud.
                                </p>
                            </div>
                        </div>
                        

                        
                    </div>
                    <div className="education list_height_size">
                        <div className="mg_b_10 head_color">
                            <h3>education</h3>
                        </div>
                        <div className="mg_b_10">
                            {academy.map((value, index) => {
                                return (
                                    <div className="flex space_between mg_b_5 small_font_size" key={value.id}>
                                        <div className="">
                                            <p>{value.title}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="_name">{value.name}</p>
                                            <p>{value.date}</p>
                                        </div>
                                        
                                    </div>
                                )
                            })}
                            
                        </div>
                        
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Preview;