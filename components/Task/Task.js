"use client"
import './task.scss'
import React from "react";
import ToolbarEx from "../ToolbarEx";
export default function Task () {
    const compClasses = 'task-comp'
    return (
        <div className={compClasses}>
            <ToolbarEx></ToolbarEx>
            <section>
                <h3 className={'mb-0'}>Limpiar el piso</h3>
            </section>
            <section>
                <h6>Description</h6>
                <p>Limpiare el piso</p>
            </section>
            <section className={'tags'}>
                <span className={'tag'}>Due date: <b>10/10/2023</b></span>
                <span className={'tag'}>Recurrent: <b>Yes</b></span>
                <span className={'tag'}>Postponed: <b>Yes</b></span>
            </section>
        </div>
    )
}