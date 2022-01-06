import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import getData from './api/firebase';
import TicketApp from './app/TicketApp';
import { actionCreators } from './state';
import { RootState } from './state/reducers';
const App: React.FC = () => {
    const dispatch = useDispatch();
    const dataFirebase = useSelector((state: RootState) => state.dataFirebase);
    console.log(dataFirebase);
    const { fetchFirebase, fetchFirebaseSuccess, fetchFirebaseDefault } =
        bindActionCreators(actionCreators, dispatch);
    useEffect(() => {
        fetchFirebase();
        getData
            .then((e: object) => {
                // console.log(e);
                fetchFirebaseSuccess(e);
            })
            .catch((e: object) => {
                // console.log(e);
                fetchFirebaseDefault();
            });
    }, []);
    return (
        <div id="main">
            <TicketApp />
        </div>
    );
};

export default App;
