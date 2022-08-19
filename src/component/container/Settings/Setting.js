import React from "react";
import styled from "styled-components";
import {styledConstant} from "../../../styledConstant/styledConstant";
const SettingStyled= styled.div`
    padding: ${styledConstant.mainPadding};
`;
const Settings = () => {
    return (
        <SettingStyled>
            <p className="content-text">Settings Contento</p>
        </SettingStyled>
    )
}
export default Settings;