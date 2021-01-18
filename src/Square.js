import React from 'react'

class Square extends React.Component{
    shouldComponentUpdate(nextProps,nextstate)
        {
            return nextProps.value !== this.value
        }
    render(){
        const {value, onClick,index}=this.props;
        return (
        <span className="cell" onClick={() => onClick(index)}>
            {value}
        </span>
        );
    }
}

export default Square