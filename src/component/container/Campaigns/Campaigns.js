import React from "react";
import {styledConstant} from "../../../styledConstant/styledConstant";
import styled from "styled-components";
const CampaignStyled = styled.div`
    padding: ${styledConstant.mainPadding};
`;
const Campaigns = () => {
    return (
        <CampaignStyled>
            <p className="content-text">Campaigns Content</p>
        </CampaignStyled>
    )
}
export default Campaigns;