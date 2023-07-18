import React from "react";
import { Entry, Icon } from "../basic/Box";
import Text from "../basic/Text";
import { IconType } from "react-icons";

const KPI = ({ Ico, number, title }: {Ico: IconType, number: string, title: string}) => {
    return (
        <Entry $width="100%" className="kpi">
            <Icon $dim="4rem" $padding="1rem" $color="#FFEDEC">
                <Ico size="2rem" color="#E23428" />
            </Icon>
            <div>
                <Text $size="2rem" $weight="600">{number}</Text>
                <Text $size="0.75rem" $weight="300" $color="#787878">{title}</Text>
            </div>
        </Entry>
    );
}

export default KPI;