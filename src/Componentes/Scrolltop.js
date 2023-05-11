import React from "react";
import { useEffect,useState } from "react";

function Scrolltop () {
    const [Scrolltop, setScrolltop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScrolltop(true)
            } else {
                setScrolltop(false)
            }
        })
    }, [])

        const scrollup = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        return <div className="buttom">
            {Scrolltop && (
                <button style={{
                    position:"fixed",
                    bottom: "50px",
                    left: "50px",
                    height: "50px",
                    width: "50px",
                    fontSize: "50px",
                }}
                    onClick={scrollup}
                >
                    Back to top</button>
            )}
        </div>
}
