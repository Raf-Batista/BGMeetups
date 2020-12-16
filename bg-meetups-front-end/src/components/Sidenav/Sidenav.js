import React from 'react';
import './Sidenav.scss';

const Sidenav = () => {
    return (
        <section className="sidenav">
            <input type="checkbox" className="sidenav__checkbox" id="sidenav-toggle" />

            <label for="sidenav-toggle" className="sidenav__button"><span class="sidenav__icon">NAV</span></label>

            <div class="sidenav__background">&nbsp;</div>
        </section>
    )
}

export default Sidenav
