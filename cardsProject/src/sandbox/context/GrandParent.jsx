import React from 'react'
import Parent from './Parent'
import DataProvider from './DataProvider'


export default function GrandParent() {


    return (
        <div>
            {/* אנחנו משתמשים בזה פה על מנת שכל מה שנמצא מתחתיו יוכל לקבל את המידע */}
            <DataProvider>
                This is GrandParent
                <Parent />
            </DataProvider>
        </div>
    )
}
