import React from 'react';

interface IProps {
    text: string;
    children: React.ReactNode;
}

const Logo = (props: IProps) => {
    return (
        <div className='tech-logo'>
            <div className='tech-logo-img'>
                { props.children }
            </div>
            <div className='tech-logo-text'>
                <p>{ props.text }</p>
            </div>
        </div>    
    )
}

export default Logo;