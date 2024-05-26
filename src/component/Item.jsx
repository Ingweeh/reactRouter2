import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

export default function Item(props) {

    const { numbers } = useParams()

    const { list } = props


    return (
        <>
            <h1>Item #{numbers}</h1>
            <h3>{list[numbers-1]}</h3>
        </>
    )
}