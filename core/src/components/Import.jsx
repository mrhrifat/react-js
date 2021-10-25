import React from 'react'


import Lesson1 from './Lesson1/Lesson1'
import Lesson2 from './Lesson2/Lesson2'
import Lesson3 from './Lesson3/Lesson3'
import Lesson4 from './Lesson4/Lesson4'
import Lesson5 from './Lesson5/Lesson5'
import Lesson6 from './Lesson6/Lesson6'
import Lesson7 from './Lesson7/Lesson7'
import Lesson8 from './Lesson8/Lesson8'
import Master from './Master/Master'

class Import extends React.Component {
    render() {
        return (
            <div>
                <Lesson1 />
                {/*
                <Lesson2 />
                <Lesson3 />
                <Lesson4 />
                <Lesson5 />
                <Master />
                <Lesson6 />
                <Lesson7 />
                <Lesson8 />
            */}

            </div>
        )
    }
}

export default Import