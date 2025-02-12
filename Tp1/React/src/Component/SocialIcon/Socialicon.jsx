export default function SocialIcon({name}) { 
    const icons = {
        Facebook: "./src/assets/Facebook.svg",
        Github: "./src/assets/Github.svg",
        Instagram: "./src/assets/Instagram.svg",
    };

    return (
        <img src = {icons[name]} />
    )
}