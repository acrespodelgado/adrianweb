import React from 'react'
import './hamburger.scss'

export default function Hamburger() {

    return (
        <button class="btn-floating hamburger hamburger--collapse navbar-toggler" type="button" id="openNav" aria-label="Toggle navigation" data-bs-toggle="collapse"
        data-bs-target="#collapsable" aria-controls="collapsable">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    );
}