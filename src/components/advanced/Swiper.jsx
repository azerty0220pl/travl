import { styled } from "styled-components";
import { Box, Entry, Icon } from "../basic/Box";
import Text from "../basic/Text";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useState } from "react";

export const SwiperComponents = ({ data, cur, count }) => {

    return (
        <>
            {
                data.filter((el, i) => {
                    return (i >= (cur + 1) * count - count && i < (cur + 1) * count);
                })
            }
        </>
    );
}

export const SwiperNavigation = ({ data, count, cur, setCur }) => {
    const pages = Math.ceil((data.length || 0) / count);
    const move = (x) => {
        if (pages === 0)
            return;

        let y = cur + x;

        if (y < 0 || y >= pages)
            return;

        setCur(y);
    };

    const printNav = () => {
        let x = [];
        let z = data.length || 0;
        if (z === 0)
            return x;

        z = Math.ceil(z / count);

        for (let i = 0; i < z; i++) {
            x.push(
                <Icon
                    as="button"
                    key={"snav" + i}
                    $dim="3rem"
                    $padding="1rem"
                    $color={cur === i ? "#135846" : "transparent"}
                    onClick={() => { setCur(i) }}
                >
                    <Text
                        $align="center"
                        key={"snav" + i + "t1"}
                        $color={cur === i
                            ?
                            "white"
                            :
                            "black"}
                    >
                        {i + 1}
                    </Text>
                </Icon>
            );
        }
        return x;
    }

    return (
        <>
            <Entry $color="transparent" $margin="0" $padding="0" $justify="end" $width="100%">
                <Box
                    as="button"
                    $margin="0"
                    $width="5rem"
                    $height="3rem"
                    $padding="0.875rem"
                    $color="white"
                    $border="2px solid #135846"
                    onClick={() => { move(-1) }}
                >
                    <Text $color="#135846" $align="center">Prev</Text>
                </Box>
                <Entry $margin="0" $gap="0" $padding="0" $color="#F5F5F5">
                    {
                        printNav().map((el) => {
                            return el;
                        })
                    }
                </Entry>
                <Box
                    as="button"
                    $margin="0"
                    $width="5rem"
                    $height="3rem"
                    $padding="0.875rem"
                    $color="white"
                    $border="2px solid #135846"
                    onClick={() => { move(1) }}
                >
                    <Text $size="1rem" $color="#135846" $align="center">Next</Text>
                </Box>
            </Entry>
        </>
    );
}

const Container = styled.div`
    position: absolute;
    top: ${props => props.$top || "0"};
    left: ${props => props.$left || "0"};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    transition: ${props => props.$transition || "all 0.25s"};
`;

const Mask = styled.div`
    position: relative;
    width: 100%;
    height: 14rem;
    overflow: hidden;
    margin-left: ${props => props.$margin || "0"};
    margin-right: ${props => props.$margin || "0"};
`;

export const SwiperNavigationAlt = ({ data, count, cur, setCur, margin, colors }) => {
    const [pos1, setPos1] = useState("0");
    const [pos2, setPos2] = useState("100%");
    const [tran, setTran] = useState("0")
    const [aux, setAux] = useState(0);

    const pages = Math.ceil((data.length || 0) / count);

    const move = (x) => {
        if (pages === 0)
            return;

        let y = cur + x;

        if (y < 0 || y >= pages)
            return;

        setAux(y);
        setTran("none");
        setPos1("0%");
        setPos2((100 * x) + "%");

        setTimeout(() => {
            setTran("all 0.25s")
            setPos1(-(100 * x) + "%");
            setPos2("0%");
        }, 10);

        setTimeout(() => {
            setCur(y);
            setTran("none");
            setPos1("0%");
            setPos2("100%");
        }, 260);
    };

    return (
        <>
            <Icon
                as="button"
                $dim="2rem"
                $padding="0.45rem"
                $color={cur - 1 < 0 ? colors[0] : colors[1]}
                onClick={() => { move(-1) }}
                $zindex="10"
            >
                <HiArrowLeft size="2rem" color={cur - 1 < 0 ? colors[2] : colors[3]} />
            </Icon>
            <Mask $margin={margin}>
                <Container $left={pos1} $transition={tran}>
                    <SwiperComponents data={data} cur={cur} count={count} />
                </Container>
                <Container $left={pos2} $transition={tran}>
                    <SwiperComponents data={data} cur={aux} count={count} />
                </Container>
            </Mask>
            <Icon
                as="button"
                $dim="2rem"
                $padding="0.45rem"
                $color={cur + 1 >= pages ? colors[0] : colors[1]}
                onClick={() => { move(1) }}
            >
                <HiArrowRight size="2rem" color={cur + 1 >= pages ? colors[2] : colors[3]} />
            </Icon>
        </>
    );
}