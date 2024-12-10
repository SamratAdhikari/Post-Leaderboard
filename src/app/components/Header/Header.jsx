import Image from "next/image";

const Header = () => {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center mb-4">
            <div className="w-full h-36 flex justify-center items-center">
                <Image
                    src="/Post-Leaderboard/assets/kec-logo.png"
                    alt="kec-logo"
                    width={100}
                    height={100}
                    priority
                />
                <div className="h-24 w-px bg-gray-300 mx-4"></div>
                <Image
                    src="Post-Leaderboard/assets/lite-logo.png"
                    alt="lite-logo"
                    width={120}
                    height={100}
                    priority
                />
            </div>

            <p className="text-xs sm:text-xs md:sm lg:text-sm text-gray-600">
                Developed and Maintained by
                <span className="font-semibold"> KEC Computer Club</span>
            </p>
        </div>
    );
};

export default Header;
