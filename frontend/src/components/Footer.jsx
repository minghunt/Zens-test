import React from "react";

function Footer() {
    return (
        <footer className="sm:py-8 px-10 sm:px-20 flex flex-col items-center relative z-10 border-t-[0.5px] border-t-gray-300">
            <p className=" text-gray-400 sm:w-3/5  text-center text-xs my-4">
                This website is created as part of Hlsolutions program. The
                materials contained on this website are provided for general
                Information only and do not constitute any form of advice. HLS
                assumes no responsibility for the accuracy of any particular
                statement and accepts no liability for any loss or damage which
                may arise from reliance on the information contained on this
                site.
            </p>
            <p className="text-gray-600 text-sm mb-2">Copyrigh 2021 HLS</p>
        </footer>
    );
}

export default Footer;
