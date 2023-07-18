const dateFormat = (x: string) => {
    const date = new Date(x);
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

export default dateFormat;