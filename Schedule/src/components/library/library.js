import React, {Component} from 'react';
import libraryCourse from "libraryCourse";
class Library extends Component{
    render() {
        return(
            <div className='library'>
                <h1 className='library__title'> Course Library</h1>
                <libraryCourse/>
                <libraryCourse/>
                <libraryCourse/>
            </div>
        )
    }
}

export default Library;