export const loaderData = async () => {
    const quizTopic = await fetch("https://openapi.programming-hero.com/api/quiz");
    const res = await quizTopic.json();
    return res;
}