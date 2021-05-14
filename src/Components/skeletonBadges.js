import React from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

import "./styles/LiBadge.css"

function SkeletonBadges() {
    return (
        <div className="skeleton">
            <SkeletonTheme color="#808080" highlightColor="#444">
                <div>
                    <div className="skeleton_img">
                        <Skeleton circle={true} width={50} height={50}></Skeleton>
                    </div>
                    <div className="skeleton_p">
                        <Skeleton count={3}/>   
                    </div>
                </div>
                <div>
                    <div className="skeleton_img"> 
                        <Skeleton circle={true} width={50} height={50}></Skeleton>
                    </div>
                    <div className="skeleton_p">
                        <Skeleton count={3}/>   
                    </div>
                </div>
                <div>
                    <div className="skeleton_img">
                        <Skeleton circle={true} width={50} height={50}></Skeleton>
                    </div>
                    <div className="skeleton_p">
                        <Skeleton count={3}/>   
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    )
}

export default SkeletonBadges;