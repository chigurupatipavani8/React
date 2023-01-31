import { reduce } from 'lodash'
import React from 'react'
import './CssFiles/styles.css'
import styles from './ModuleCss/styles.module.css'

let persons=[
    {
        id:1,
        name:'pavani',
    age:22,
    college:'kmit'
    },
    {
        id:2,
        name:'shivani',
        age:21,
    college:'kmit'
    },
    {
        id:3,
        name:'hamsini',
        age:21,
    college:'kmit'
    },{
        id:4,
        name:'raashmi',
        age:21,
    college:'kmit'
    },{
        id:5,
        name:'grishma',
        age:21,
    college:'kmit'
    }
]

function MapForList() {
    let arr=['pavani','shivani','hamsini','raashmi','grishma']
    return (<>
        {arr.map((name, index)=>(<Item key={index} name={name} index={index}></Item>))}
        <table><thead><tr><th>SI.No</th><th>name</th><th>age</th><th>college</th></tr></thead><tbody>
            {persons.map((person, index)=>(<PersonTable key={person.id} person={person} key={index} index={index}></PersonTable>))}
            </tbody></table>
        </>
    )
}

function Item(props){
    return(<div><span>{props.index}</span>.){props.name}</div>)
}

function PersonTable(props){
    const inline={
        color:'red',
        fontSize:'25px'

    }
return(
    <tr>
    <td className="first">{props.index}</td>
    <td className={styles.first}>{props.person.name}</td>
    <td style={inline}>{props.person.age}</td>
    <td>{props.person.college}</td>
    </tr>
)
}

export default MapForList
