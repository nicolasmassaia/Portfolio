

function Profil() {
    return (
        <div className="profil">
            <img
                className="profil-picture"
                src="/Images/profile-pic.png"
                /* eslint-disable-next-line jsx-a11y/img-redundant-alt */
                alt="Profil image"/>
            <div className="name">
                Nicolas Massaia
            </div>
            <div className="job">
                Développeur Web Full Stack
            </div>
            <div className="slogan">
                Transformer vos idées en projets concrets avec un code propre et efficace.
            </div>



        </div>
    );
}

export default Profil;
