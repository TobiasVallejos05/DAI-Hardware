import * as React from 'react';
import {useContext} from "react";

export const initialState = {
    loading:true,
    contacts:{
        name:'',
        surname:'',
        phoneNumber:0,
        defaultEmergencyNumber:''
    },
};

export const ActionTypes = {
SetLoading:'SET_LOADING',
SetContacts:'SET_CONTACTS',
SetContactsName:'SET_CONTACTS_NAME',
SetContactsSurname:'SET_CONTACTS_SURNAME',
SetContactsPhoneNumber:'SET_CONTACTS_PHONENUMBER',
SetContactsDefaultEmergencyNumber: 'SET_CONTACTS_DEFAULTEMERGENCYNUMBER',
};

export const reducer = (state = {}, action) => {
    switch(action.type){
        case ActionTypes.SetLoading:
            return{
                ...state,
                loading: action.value,
            };
        case ActionTypes.SetContacts:
            return{
                ...state,
                contacts: action.value,
            };
        case ActionTypes.SetContactsName:
            return{
                ...state,
                contacts:{
                    ...state,
                    name: action.value,
                }
            };
        case ActionTypes.SetContactsSurname:
            return{
                ...state,
                contacts:{
                    ...state,
                    surname: action.value,
                }
            };
        case ActionTypes.SetContactsPhoneNumber:
            return{
                ...state,
                contacts:{
                    ...state,
                    phoneNumber: action.value,
                }
            };
        case ActionTypes.SetContactsDefaultEmergencyNumber:
            return{
                ...state,
                contacts:{
                    ...state,
                    defaultEmergencyNumber: action.value,
                }
            };
    }
};

export const initialContext={
    contextState:initialState,
    setContextState:()=>{},
};

const Cont = React.createContext(initialContext);
export function ContextProvider({children, initial = initialState}){
const [state, dispatch] = React.useReducer(reducer, initial);

const contextState=state;
const setContextState=dispatch;

return <Cont.Provider value ={{contextState, setContextState}}>{children}</Cont.Provider>
}

export const useContextState = () => useContext(Cont);