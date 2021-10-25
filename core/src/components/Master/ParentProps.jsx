import React from "react";

const ChildrenProps = props => (
    <div>
        <h6>Children Props</h6>
        {props.children}
    </div>
)


class ParentProps extends React.Component {
    render() {
        return (
            <div>
                <h5>Parent Props</h5>
                <ChildrenProps>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cupiditate eius numquam ullam hic in voluptatem obcaecati incidunt tenetur, aperiam sapiente ad ex doloribus dolore consequatur natus molestias praesentium illo.</p>
                </ChildrenProps>
            </div>
        )
    }
}
export default ParentProps