import { useState } from "react";
import { Box, Entry, Icon } from "./Box";
import Text from "./Text";

const Swiper = ({ data, direction, count }) => {
    let [cur, setCur] = useState(0);

    const move = (x) => {
        let z = data.length || 0;
        if (z === 0)
            return;

        z = Math.floor(z / count) + 1;
        let y = cur + x;

        if (y < 0 || y >= z)
            return;

        setCur(y);
    }

    return (
        <div>
            <Entry justify="space-between" gap="1rem" direction={direction}>
                {
                    data.map((el, i) => {
                        if (i >= (cur + 1) * count - count && i < (cur + 1) * count)
                            return el;
                        return <></>;
                    })
                }
            </Entry>
            <Entry justify="end">
                <Box
                    as="button"
                    margin="0"
                    width="5rem"
                    height="3rem"
                    padding="0.875rem"
                    color="white"
                    border="2px solid #135846"
                    onClick={() => { move(-1) }}
                >
                    <Text color="#135846" align="center">Prev</Text>
                </Box>
                <Entry margin="0" gap="0" padding="0" color="#F5F5F5">
                    {
                        data.map((el, i) => {
                            if (i % count === 0)
                                return (
                                    <Icon
                                        as="button"
                                        key={i}
                                        dim="3rem"
                                        padding="1rem"
                                        color={cur === Math.floor(i / count || 0) ? "#135846" : "transparent"}
                                        onClick={() => {setCur(Math.floor(i / count || 0))}}
                                    >
                                        <Text
                                            align="center"
                                            color={cur === Math.floor(i / count || 0)
                                                ?
                                                "white"
                                                :
                                                "black"}
                                        >
                                            {Math.floor(i / count || 0) + 1}
                                        </Text>
                                    </Icon>
                                );
                            return <></>;
                        })
                    }
                </Entry>
                <Box
                    as="button"
                    margin="0"
                    width="5rem"
                    height="3rem"
                    padding="0.875rem"
                    color="white"
                    border="2px solid #135846"
                    onClick={() => { move(1) }}
                >
                    <Text size="1rem" color="#135846" align="center">Next</Text>
                </Box>
            </Entry>
        </div>
    );
};

export default Swiper;