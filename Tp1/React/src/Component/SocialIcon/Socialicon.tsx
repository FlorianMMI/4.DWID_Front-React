export default function SocialIcon({ name }: { name: string }) { 
    const icons: Record<string, string> = {
        Facebook: "./src/assets/Facebook.svg",
        Github: "./src/assets/Github.svg",
        Instagram: "./src/assets/Instagram.svg",
    };

    // Cette section retourne une balise image avec la source définie en fonction du nom passé en paramètre.
    return (
        <img src={icons[name]} alt={name} />
    );
}