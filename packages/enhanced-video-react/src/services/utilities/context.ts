import React from 'react';

import {
    IContext,
} from '../../data/interfaces';



const Context = React.createContext<IContext | null>(null);


export default Context;
