"use client";

import Typewriter from "typewriter-effect";
import CardWidget from "./components/CardWidget/CardWidget";
import { useEffect, useState } from "react";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const DATA_URL = "/data.json";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(DATA_URL);
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data.posts);
                } else {
                    console.error("Failed to fetch data:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen sm:px-8 font-[family-name:var(--font-geist-sans)] gap-12">
            {/* Title Section */}
            <div className="w-full text-center sm:mb-12 mt-12 top-0 left-0">
                <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold text-primary">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("AI PHOTOGRAPHY")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("LEADERBOARD")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("#KECLITE2081")
                                .pauseFor(1000)
                                .deleteAll()
                                .start();
                        }}
                        options={{
                            loop: true,
                        }}
                    />
                </h1>
            </div>

            {/* Cards Section */}
            <div className="w-full sm:w-[95%] flex flex-wrap justify-center">
                {posts.length > 0
                    ? posts.map((post, index) => (
                          <CardWidget key={index} {...post} rank={index + 1} />
                      ))
                    : [1, 2, 3].map((_, index) => (
                          <div
                              key={index}
                              className="w-full m-8 sm:w-[300px] md:w-[350px] lg:w-[400px] bg-slate-200 rounded-lg h-[480px] animate-pulse"
                          >
                              <div className="w-full bg-slate-300 h-[60px] rounded-t-lg mb-4"></div>
                              <div className="w-full h-[320px] bg-slate-300 rounded-md mb-4"></div>
                              <div className="flex justify-between px-4 py-2">
                                  <div className="w-[70px] h-[30px] bg-slate-300 rounded"></div>
                                  <div className="w-[70px] h-[30px] bg-slate-300 rounded"></div>
                                  <div className="w-[70px] h-[30px] bg-slate-300 rounded"></div>
                              </div>
                          </div>
                      ))}
            </div>
        </div>
    );
}
