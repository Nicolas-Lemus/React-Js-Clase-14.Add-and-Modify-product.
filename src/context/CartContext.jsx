import React,{ useState ,createContext} from 'react';


export const CardContext = React.createContext();

export const CartProviden = ({children}) => {
    
    const [count,setCount]= useState(0);

    return (
        <CardContext.Provider
         //DEBEMOS PASARLO COMO UN ARRAY  {[]}
            value={[count,setCount]}
            >{children}
        </CardContext.Provider>
    )
};

