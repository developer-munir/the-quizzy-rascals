export const loaderData = async () => {
    const data = await fetch('url');
    const res = await data.json();
    return res;
}