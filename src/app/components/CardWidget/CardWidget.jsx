import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {
    Crown,
    MessageCircleMore,
    Quote,
    Share2,
    ThumbsUp,
} from "lucide-react";
import CardStats from "../CardStats/CardStats";

const CardWidget = (props) => {
    // colors for the crown
    const crownColors = {
        1: "#F3C623",
        2: "#A6AEBF",
        3: "#CD7F32",
    };

    return (
        <div
            className="relative w-full sm:w-[300px] m-8 md:w-[330px] lg:w-[400px] h-auto shadow-md rounded-lg hover:cursor-pointer hover:shadow-2xl"
            onClick={() => {
                window.open(props.PostLink, "_blank");
            }}
        >
            {/* Crown Icon */}
            {props.rank <= 3 && (
                <div className="absolute -top-3 -right-3 bg-white p-1 rounded-full shadow-lg z-10">
                    {/* <Crown className={`h-12 w-12 bg-[${props.rank}]`} /> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className={`h-12 w-12`}
                        fill={crownColors[props.rank]}
                    >
                        <path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5 .4 5.1 .8 7.7 .8 26.5 0 48-21.5 48-48s-21.5-48-48-48z" />
                    </svg>
                </div>
            )}

            {/* Card */}
            <Card className="w-full h-full rounded-lg overflow-hidden">
                {/* Card Header */}
                <CardHeader className="pb-0 pt-4 px-6 flex-col items-start">
                    <p className="text-sm uppercase font-bold mb-2 text-gray-600">
                        {props.Author}
                    </p>
                    <h4 className="font-bold text-lg sm:text-md md:text-lg flex items-start gap-2 line-clamp-2 max-h-[3.5em] overflow-hidden">
                        <Quote className="self-start h-8 shrink-0 text-[#f7d931] transform scale-x-[-1]" />
                        <span className="line-clamp-2">{props.Text}</span>
                    </h4>
                </CardHeader>

                {/* Card Body with image */}
                <CardBody className="py-4">
                    <div className="w-full h-full">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-md w-full h-full"
                            src={props.Image}
                        />
                    </div>
                </CardBody>

                {/* Card Footer with stats */}
                <div className="m-2 p-2 flex flex-wrap justify-around items-center text-lg text-gray-600">
                    <CardStats
                        icon={<ThumbsUp />}
                        count={props.NumberOfReactions}
                        color={"#1881aa"}
                    />
                    <CardStats
                        icon={<MessageCircleMore />}
                        count={props.NumberOfComments}
                        color={"#EB5353"}
                    />
                    <CardStats
                        icon={<Share2 />}
                        count={props.NumberOfShares}
                        color={"#29a06e"}
                    />
                </div>
            </Card>
        </div>
    );
};

export default CardWidget;
