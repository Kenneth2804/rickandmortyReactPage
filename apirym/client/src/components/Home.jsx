import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from '../redux/actions';

export default function Home() {

const allcharacters = useSelector((state) => state.allCharacters);

    return (
    <div>Home

<div></div>

    </div>

  )
}
