import React from "react";
import styled from "styled-components";
import {styledConstant} from "../../../styledConstant/styledConstant";
const AnalyticsStyled = styled.div`
    padding: ${styledConstant.mainPadding};
`;
const Analytics = () => {
    return (
        <AnalyticsStyled>
            <p className="content-text">Analytics Content</p>
        </AnalyticsStyled>
    )
}
export default Analytics;