import React from 'react';
import Accordion from '../../newComponents/Accordion';


function PreviewPage(props) {
    return (
        <div className='p-5'>
            <div className='p-5 border-solid border-2 border-slate-900'>    
                <p> Accordion component</p>
                <Accordion />
            </div>

        </div>
    );
}

export default PreviewPage;