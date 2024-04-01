import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

function Home() {
    const [joke, setJoke] = useState({});
    const [update, setUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const axiosInstance = axios.create({
        withCredentials: true,
        headers: {
            "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_URL,
            "Content-Type": "application/json",
        },
    });
    useEffect(() => {
        axiosInstance
            .get(`${process.env.REACT_APP_BASE_URL}/api/joke`)
            .then((res) => {
                if (res.data.joke.message === "Come back another day!") {
                    setJoke(false);
                } else {
                    setJoke(res.data.joke);
                    setIsLoading(false);
                }
            })
            .catch(() => console.log("Error Network"));
    }, [update]);
    function handleVoteJoke(isFunny) {
        setIsLoading(true);
        axiosInstance
            .post(
                `${process.env.REACT_APP_BASE_URL}/api/joke/vote?id=${joke._id}&isfunny=${isFunny}`
            )
            .then((res) => {
                setJoke(res.data.joke);
                setUpdate((prev) => !prev);
            })
            .catch(() => console.log("Error Network"));
    }
    return (
        <div>
            <div className="bg-[#29b363] text-white text-center sm:py-14 py-10 z-0 ">
                <p className="lg:text-3xl sm:text-xl text-base  font-semibold mb-4 ">
                    A Joke a day keeps the doctor away
                </p>
                <p className="sm:text-xs text-[10px] font-semibold">
                    If you joke wrong way, your teeth have to pay. (Serius)
                </p>
            </div>

            {joke ? (
                <div className="flex flex-col justify-center items-center my-14">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <p className="lg:w-3/5 sm:w-4/5 mx-4 sm:text-base text-[14px] text-gray-600 mb-8">
                                {joke.content}
                            </p>
                            <hr
                                width="50%"
                                size="7px"
                                align="center"
                            />
                            <div className="text-white flex justify-center sm:gap-8 gap-4 mt-8 mx-4">
                                <button
                                    className=" bg-[#2c7edb] sm:w-56 sm:py-2 w-32 py-1 sm:text-base text-sm border-b-[#1c69c0] border-solid border-b-[3px]"
                                    type="submit"
                                    onClick={() => handleVoteJoke(true)}
                                >
                                    This is Funny!
                                </button>
                                <button
                                    className=" bg-[#29b363] sm:w-56 sm:py-2 w-32 py-1 sm:text-base text-sm border-b-[#19984e] border-solid border-b-[3px]"
                                    type="submit"
                                    onClick={() => handleVoteJoke(false)}
                                >
                                    This is not Funny.
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center my-14">
                    <p className="w-3/5 text-gray-600 mb-8 text-center">
                        That&apos;s all the jokes for today! Come back another
                        day!
                    </p>
                    <hr
                        width="50%"
                        size="7px"
                        align="center"
                    />
                </div>
            )}
        </div>
    );
}
export default Home;
