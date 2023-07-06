import { styled } from "styled-components";
import { Box, Entry, Icon } from "../basic/Box";
import Text from "../basic/Text";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

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
    left: ${props => props.left || "0"};
    height: 100%;
    weigth: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

export const SwiperNavigationAlt = ({ data, count, cur, setCur, margin, colors }) => {
    const pages = Math.ceil((data.length || 0) / count);
    const move = (x) => {
        if (pages === 0)
            return;

        let y = cur + x;

        if (y < 0 || y >= pages)
            return;

        setCur(y);
    };

    return (
        <>
            <Container>
                <SwiperComponents data={data} cur={cur} count={count} />
            </Container>
            <Icon
                as="button"
                $margin={margin}
                $dim="2rem"
                $padding="0.45rem"
                $color={cur - 1 < 0 ? colors[0] : colors[1]}
                onClick={() => { move(-1) }}
            >
                <HiArrowLeft size="2rem" color={cur - 1 < 0 ? colors[2] : colors[3]} />
            </Icon>
            <Icon
                as="button"
                $margin={margin}
                $dim="2rem"
                $padding="0.45rem"
                $color={cur + 1 >= pages ? colors[0] :colors[1]}
                onClick={() => { move(1) }}
            >
                <HiArrowRight size="2rem" color={cur + 1 >= pages ? colors[2] : colors[3]} />
            </Icon>
        </>
    );
}