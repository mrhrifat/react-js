import React from "react";


class Example extends React.Component {
    render() {

        // Javascript code that compile behind the scence
        // return React.createElement('div', { className: 'bg-success p-4' }, [
        //     React.createElement('h6', null, 'Ibn Taymiyyah'),
        //     React.createElement('p', { className: 'lead' }, 'Imam of Muslim Ummah')
        // ])

        // Modern Solution
        // return (
        //     <div className="bg-success">
        //         <h6>Hi</h6>
        //         <p>Imam of Muslim Ummah</p>
        //     </div>
        // )

        //Some Times you can't use div as root element. Than use React.Fragment (In short <> </>)
        //React.Fragment can't generate class
        // return (
        //     <React.Fragment>
        //         <h6>Hi</h6>
        //         <p>Imam of Muslim Ummah</p>
        //     </React.Fragment>
        // )

        // Shorthand Way

        // return (
        //     <>
        //         <h6>Hi</h6>
        //         <p>Imam of Muslim Ummah</p>
        //     </>
        // )

        // Play with Components
        const name = "Ibn Taymiyyah (R)"
        const designation = "Shaikhul Islam"

        const born = '661H', death = '728H'

        const attr = {
            title: 'Born and Death',
            id: 'time'
        }

        const books = <ul>
            <li>Ruher Cikistha</li>
            <li>Al Ubudiyyah</li>
        </ul>

        return (
            <div>
                <h6>Name of Imam: {name}</h6>
                <p {...attr}>
                    Born: {born} <br />
                    Death: {death}
                </p>
                {designation}
                <p>Books</p>{books}
                <MyComponent />
                <p>{new Date().toISOString()}</p>
            </div>
        )
    }

}
// Functional Class
const MyComponent = () => <p>Imam of Muslim Ummah</p>



export default Example