import React, {useState} from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';

const PageSelect = () => {
    const [selected, setSelected] = useState('Choose one')
    return (
        <div className="container">
            <h1>Select</h1>
            <Dropdown
                selected={selected}
                setSelected={setSelected}
            />
        </div>
    );
};

export default PageSelect;