import React from 'react'
import { useData } from './DataProvider'

export default function GrandChild() {

    /* משכית המידע דרך ההוק החדש */
    const result = useData();
    console.log(result);

    return (
        <div>
            This is GrandChild
        </div>
    )
}
