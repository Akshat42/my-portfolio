import './Intro.css';

function Intro() {
    const companyName = 'CAW Studios';
    const clientUrl1 = 'https://www.radian.com/'
    const clientUrl2 = 'https://www.cashflo.io/'
    const clientUrl3 = 'http://www.officeadvisor.in/'

    return (
        <section id="intro">
            <p className="name">
                Hi, my name is <span>Akshat Divya.</span>
            </p>

            <h2>I build Web Apps.</h2>

            <p>
                I'm a front-end developer specializing in HTML, CSS, Angular and
                React.
            </p>

            <p>
                {`Currently, I'm working at `}
                <a
                    rel="noreferrer"
                    href="https://www.cawstudios.com"
                    target="_blank"
                >
                    {companyName}
                </a>
                , developing web applications for clients such as <a
                    rel="noreferrer"
                    href={clientUrl1}
                    target="_blank"
                >
                    Radian</a>&nbsp; and <a
                    rel="noreferrer"
                    href={clientUrl2}
                    target="_blank"
                >Office Advisor</a>&nbsp; in real estate, and <a
                    rel="noreferrer"
                    href={clientUrl3}
                    target="_blank"
                >
                    Cashflo</a>&nbsp; in finance.
            </p>
        </section>
    );
}

export default Intro;
