import { Box, Entry, Icon } from "../basic/Box";
import Text from "../basic/Text";

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
};

export const SwiperNavigation = ({ data, count, cur, setCur }) => {
    const move = (x) => {
        let z = data.length || 0;
        if (z === 0)
            return;

        z = Math.ceil(z / count);
        let y = cur + x;

        if (y < 0 || y >= z)
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
};