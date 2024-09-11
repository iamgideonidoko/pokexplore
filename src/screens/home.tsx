import withHelmet from "@/hocs/withHelmet";

const HomeScreen = () => {
  return <div>Home Screen</div>;
};

export const Home = withHelmet(HomeScreen, {
  title: "Home - PokeXplore",
  description:
    "Your ultimate companion to explore, compare, and master every Pokémon!",
});
