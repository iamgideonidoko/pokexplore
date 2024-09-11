import withHelmet from '@/hocs/withHelmet';
import AppLayout from '@/layouts/app';

const HomeScreen = () => {
  return <AppLayout>Home Screen</AppLayout>;
};

export const Home = withHelmet(HomeScreen, {
  title: 'Home - PokeXplore',
  description: 'Your ultimate companion to explore, compare, and master every Pokémon!',
});
