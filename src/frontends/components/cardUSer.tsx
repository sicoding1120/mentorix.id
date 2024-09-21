import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import axios from "axios";

export default function CardUser({
  follower,
  following,
  userName,
  id,
  handleFollow,
    handleUnFollow,
  isFollowed,
}: {
  follower: number;
  following: number;
  userName: string;
  id: string;
  handleFollow: () => void;
        handleUnFollow: () => void;
  isFollowed: boolean;
}) {
//   const [isFollowed, setIsFollowed] = React.useState(false);

  const truncate = (str: any, length: any) => {
    if (str.length > length) {
      return str.substring(0, length) + "...";
    }
    return str;
  };


  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between overflow-scroll scrollbar-hide">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600 truncate">
              {truncate(userName, 11)}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @ {truncate(userName, 11)}
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={isFollowed ? handleFollow : handleUnFollow}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 scrollbar-hide">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {following}
          </p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {follower}
          </p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
