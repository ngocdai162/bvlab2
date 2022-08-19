import React from "react";
import styled from "styled-components";
import { mainPadding } from "../../../styledConstant/styledConstant";
import {styledConstant} from "../../../styledConstant/styledConstant";
const AdsStyled = styled.div`
    /* padding: ${mainPadding}; */
    padding: ${styledConstant.mainPadding};
`;
const Ads = () => {
    return (
        <AdsStyled>
            <p className="content-text">Ads Content</p>
        </AdsStyled>
    )
}
export default Ads;