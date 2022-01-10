import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import IconFilter from '../icons/IconFilter';

const ButtonFilter = () => {
    const dispatch = useDispatch();
    const { modalManagerOpen } = bindActionCreators(actionCreators, dispatch);
    return (
        <button className="btn-filter" onClick={() => modalManagerOpen()}>
            <IconFilter />
            <span>Lọc vé</span>
        </button>
    );
};

export default ButtonFilter;
