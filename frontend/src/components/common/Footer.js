import React from "react";

function Footer() {
    return (
        <div >
            <footer className="bg-dark text-white mt-5 p-4 text-center fixed-bottom" >
                Copyright &copy; {new Date().getFullYear()} NYT's BESTREADS
      </footer>
        </div>
    );
}
export default Footer;
