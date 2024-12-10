import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {
    CircleUserRound,
    Crown,
    Dot,
    MessageCircleMore,
    Quote,
    Share2,
    ThumbsUp,
} from "lucide-react";
import CardStats from "../CardStats/CardStats";

const CardWidget = (props) => {
    // colors for the crown
    const crownColors = {
        1: "#FFD700",
        2: "#cccaca",
        3: "#C88E53",
    };

    return (
        <div
            className="relative w-full sm:w-[300px] md:w-[330px] lg:w-[400px] h-auto shadow-md rounded-lg hover:cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out m-6"
            onClick={() => {
                window.open(props.PostLink, "_blank");
            }}
        >
            {/* Crown Icon */}
            {props.rank <= 3 && (
                <div
                    className="absolute -top-4 -right-4 p-2 rounded-full shadow-lg z-10"
                    style={{ backgroundColor: crownColors[props.rank] }}
                >
                    <Crown className="h-7 w-7 text-white" />
                </div>
            )}

            {/* Card */}
            <Card className="w-full h-full rounded-lg overflow-hidden">
                {/* Card Header */}
                <CardHeader className="pb-0 pt-4 px-6 flex-col items-start">
                    {/* Author */}
                    <div className="text-sm uppercase text-gray-500 flex items-center mb-2">
                        <CircleUserRound className="mr-2" />{" "}
                        <span className="font-semibold font-khand">
                            {/* Added margin to space out the logo */}
                            {props.Author}
                        </span>
                    </div>

                    {/* Caption */}
                    <h4 className="font-khand font-bold text-xl flex items-start gap-2 line-clamp-2 max-h-[3.5em] overflow-hidden">
                        <Quote className="self-start h-6 shrink-0 text-gray-400 transform scale-x-[-1]" />
                        <span className="line-clamp-2">{props.Text}</span>
                    </h4>
                </CardHeader>

                {/* Card Body with image */}
                <CardBody className="flex justify-center">
                    <div className="w-full aspect-square overflow-hidden rounded-md">
                        <Image
                            alt="Card background"
                            className="object-fit w-full h-full"
                            src={props.Image}
                        />
                    </div>
                </CardBody>

                {/* Card Footer with stats */}
                <div className="px-6 pb-4 flex flex-wrap justify-around items-center text-gray-600">
                    <CardStats
                        icon={<ThumbsUp />}
                        count={props.NumberOfReactions}
                        color={"#1881aa"}
                    />
                    <CardStats
                        icon={<Share2 />}
                        count={props.NumberOfShares}
                        color={"#29a06e"}
                    />
                    <div className="flex justify-center items-center gap-1 text-[#EB5353]">
                        <CardStats
                            icon={<Dot />}
                            count={props.Points}
                            color={"#EB5353"}
                        />{" "}
                        Points
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CardWidget;
