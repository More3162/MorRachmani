import React from 'react'
import PageHeader from '../components/PageHeader'
import MyButton from './propsAndChildren/MyButton'
import MyMessage from './propsAndChildren/MyMessage'
import SignupPage from '../users/pages/SignupPage'
import Countries from './effects/Countries'
import CardsFeedback from '../cards/components/CardsFeedback'
import GrandChild from './context/GrandChild'
import GrandParent from './context/GrandParent'
import Counter from './stastes/Counter'
import Timer from './effects/Timer'
import FormExample from './forms/FormExample'


export default function SandBoxPage() {
    return (
        <div>
            <PageHeader title="SandBox" subtitle="This is the sandbox page" />
            <FormExample />

        </div>
    )
}
